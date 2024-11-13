from django.shortcuts import render
from .models import Recipe, Favorite
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth.models import User
from .Serializers import RecipeSerializer
from rest_framework import serializers
from rest_framework import status
from rest_framework.views import APIView
# Create your views here.
class CreateRecipeView(APIView):
    def post(self, request):
        serializer = RecipeSerializer(data=request.data)
        if serializer.is_valid ():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=400)

@api_view(['GET'])
def view_recipes(request):
    recipes = Recipe.objects.all()
    serializer = RecipeSerializer(recipes, many=True)
    return Response(serializer.data)

class FavoriteSerializer(serializers.ModelSerializer):
    recipe = RecipeSerializer()

    class Meta:
        model = Favorite
        fields = ['id','recipe']

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def view_favorites(request):
    favorites = Favorite.objects.filter(user=request.user)
    serializer = FavoriteSerializer(favorites, many=True)
    return Response(serializer.data)        

from rest_framework import status

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def add_favorite(request):
    recipe_id = request.data.get('recipe_id')
    if not recipe_id:
        return Response({"error": "Recipe ID is required"}, status=status.HTTP_400_BAD_REQUEST)

    recipe = Recipe.objects.filter(id=recipe_id).first()
    if not recipe:
        return Response({"error": "Recipe not found"}, status=status.HTTP_404_NOT_FOUND)

    created = Favorite.objects.get_or_create(user=request.user, recipe=recipe)
    
    if created:
        return Response({"message": "Favorite added"}, status=status.HTTP_201_CREATED)
    else:
        return Response({"error": "Favorite already exists"}, status=status.HTTP_400_BAD_REQUEST)

@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def delete_favorite(request, favorite_id):
    favorite = Favorite.objects.filter(id=favorite_id, user=request.user).first()
    if not favorite:
        return Response({"error": "Favorite not found"}, status=status.HTTP_404_NOT_FOUND)

    favorite.delete()
    return Response({"message": "Favorite deleted"}, status=status.HTTP_204_NO_CONTENT)