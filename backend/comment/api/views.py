from rest_framework.generics import ListAPIView, CreateAPIView, RetrieveAPIView
from rest_framework import permissions
from .serializers import CommentSerializer, CommentCreateSerializer

from comment.models import Comment


class CommentListView(ListAPIView):
    def get_queryset(self):
        comments = Comment.objects.filter(offer_id=self.kwargs['id'])
        return comments
    serializer_class = CommentSerializer
    permission_classes = (permissions.AllowAny,)


class CommentCreateView(CreateAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentCreateSerializer
    permission_classes = (permissions.AllowAny,)
