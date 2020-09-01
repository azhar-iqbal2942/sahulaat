from rest_framework.generics import ListAPIView, CreateAPIView, RetrieveAPIView, UpdateAPIView
from rest_framework import permissions
from .serializers import UserSerializer, PhoneBookSerializer

from user.models import CustomUser, PhoneBook


class UserDetails(RetrieveAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = UserSerializer


class UserUpdate(UpdateAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = UserSerializer


class PhoneBookList(ListAPIView):
    queryset = PhoneBook.objects.all()
    serializer_class = PhoneBookSerializer


class PhoneBookCreate(CreateAPIView):
    queryset = PhoneBook.objects.all()
    serializer_class = PhoneBookSerializer
