from django.db import models

from user.models import CustomUser
from service.models import Offer

# Create your models here.


class Comment(models.Model):
    author = models.ForeignKey(
        CustomUser, on_delete=models.CASCADE, related_name='comments')
    offer = models.ForeignKey(
        Offer, on_delete=models.CASCADE, related_name='customOffer')
    timestamp = models.DateTimeField(auto_now_add=True)
    content = models.TextField()

    def __str__(self):
        return self.author.full_name
