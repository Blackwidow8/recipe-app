from django.shortcuts import render
from .serializer import UserSerializer
from django.contrib.auth.models import User
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes, authentication_classes
from django.contrib.auth import authenticate, login
from rest_framework import status
from rest_framework.authtoken.models import Token
from rest_framework.authentication import SessionAuthentication,TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.authtoken.views import ObtainAuthToken

# Create your views here.
@api_view(["GET"])
@authentication_classes([SessionAuthentication, TokenAuthentication])
@permission_classes([IsAuthenticated])
def user_list(request):
    users = User.objects.all()
    serializer = UserSerializer(users, many=True)

    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(["POST"])
def login_view(request):
    if request.method == "POST":
        username = request.data.get ('username')
        password = request.data.get ('password')
        user = authenticate(request, username=username, password=password)
       
        if user is not None:
               serializer = UserSerializer(user)
               token, created = Token.objects.get_or_create(user=user)
               return Response({
                   "message":"User successfully logged in.",
                    "user": serializer.data,
                    "session" : token.key
                })
        else:
         return Response({
             "message": "Could not validate user."
              }, status=status.HTTP_400_BAD_REQUEST)
        
@api_view(['POST'])
def register(request):
    if request.method == 'POST':
       username = request.data.get('username')
       email = request.data.get('email')
       password = request.data.get('password')
       first_name = request.data.get('first_name')
       last_name = request.data.get('last_name')

       user =User.objects.filter(username=username)

       if user.exists():
           return Response({"message" : "User already exists"}, status=status.HTTP_400_BAD_REQUEST)
       
       user = User.objects.create_user(
           username=username,
           email=email,
           first_name=first_name,
           last_name=last_name
       )

       user.set_password(password)
       user.save()
       token = Token.objects.create(user=user)

       return Response({
           'message' : 'User created successfully.',
           "token" : token.key
           })
    
    def some_view(request):
        request.session['token'] = '2ee79c708513bd2393230064eeec436167b525ab'