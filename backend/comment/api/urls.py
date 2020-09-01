from django.urls import path
from . import views


urlpatterns = [
    path('offer/<int:id>', views.CommentListView.as_view(), name='comment-list'),
    path('create/', views.CommentCreateView.as_view(), name='comment-create')
]
