from django.urls import path
from . import views

urlpatterns = [
    path('new/<int:pk>', views.UserDetails.as_view(), name="user"),
    path('phonebook/', views.PhoneBookList.as_view(), name='phonebook-list'),
    path('new/update/<int:pk>', views.UserUpdate.as_view(), name='user-update'),
    path('phonebook/create/', views.PhoneBookCreate.as_view(), name='create-contact')
]
