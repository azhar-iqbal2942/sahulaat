from django.urls import path
from . import views


urlpatterns = [
    path('', views.ServiceListView.as_view(), name='service-list'),
    path('offers', views.OfferListView.as_view(), name='offer-list'),
    path('user/offers/<int:id>', views.UserOfferList.as_view(),
         name='user-offer-list'),
    path('offers/detail/<int:pk>',
         views.OfferRetrieveDetailView.as_view(), name='offer-detail'),
    path('offer/create/', views.OfferCreateView.as_view(), name='offer-create'),

]
