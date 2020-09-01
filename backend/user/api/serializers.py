from rest_framework import serializers

from user.models import CustomUser, PhoneBook


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        exclude = ['password', 'groups',
                   'user_permissions', 'is_active', 'is_staff', 'is_superuser']


class PhoneBookSerializer(serializers.ModelSerializer):
    class Meta:
        model = PhoneBook
        fields = '__all__'
