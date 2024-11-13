from rest_framework import serializers

from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            'id',
            'username',
            'email',
            'first_name',
            'last_name'
        ]  

class RegistrationSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    def create(self, validated_data) :
        user = User.objects.create_user(**validated_data)
        return user

    class Meta:
        model=User
        fields=[
            'username',
            'password',
            'email',
            'first_name',
            'last_name'
        ] 
