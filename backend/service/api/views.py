from rest_framework.generics import ListAPIView, CreateAPIView, RetrieveAPIView
from rest_framework import permissions
from .serializers import ServiceSerializer, OfferSerializer, OfferCreateSerializer

from service.models import Service, Offer


class ServiceListView(ListAPIView):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer
    permission_classes = (permissions.AllowAny,)


class OfferCreateView(CreateAPIView):
    queryset = Offer.objects.all()
    serializer_class = OfferCreateSerializer
    permission_classes = (permissions.AllowAny,)


# get list of specific offer like electrician
class OfferListView(ListAPIView):
    # def get_queryset(self):
    #     offers = Offer.objects.filter(service__id=self.kwargs['pk'])
    #     return offers
    queryset = Offer.objects.all()
    serializer_class = OfferSerializer
    permission_classes = (permissions.AllowAny,)


class UserOfferList(ListAPIView):
    def get_queryset(self):
        offers = Offer.objects.filter(author__id=self.kwargs['id'])
        return offers
    serializer_class = OfferSerializer
    permission_classes = (permissions.AllowAny,)


class OfferRetrieveDetailView(RetrieveAPIView):
    queryset = Offer.objects.all()
    serializer_class = OfferSerializer
    permission_classes = (permissions.AllowAny,)
