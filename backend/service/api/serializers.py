from rest_framework import serializers

from service.models import Service, Offer
from user.api.serializers import UserSerializer


class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = "__all__"


class OfferSerializer(serializers.ModelSerializer):
    author = UserSerializer()

    class Meta:
        model = Offer
        fields = "__all__"


class OfferCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Offer
        fields = "__all__"

    # def create(self, validated_data):
    #     return Offer.objects.create(**validated_data)
