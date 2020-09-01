from django.db import models
from django.utils.translation import ugettext_lazy as _

from user.models import CustomUser

# Create your models here.


class Service(models.Model):
    name = models.CharField(_('Service Name'), max_length=255)
    thumbnail = models.ImageField(
        default='service_default.jpg', upload_to='service')

    def __str__(self):
        return self.name


class Offer(models.Model):
    author = models.ForeignKey(
        CustomUser, on_delete=models.CASCADE, related_name='author')
    service = models.ForeignKey(
        Service, on_delete=models.CASCADE, related_name='service')
    title = models.CharField(max_length=255)
    description = models.TextField(verbose_name="Offer Description")
    created_date = models.DateField(auto_now_add=True, blank=True, null=True)
    price = models.PositiveIntegerField()

    def __str__(self):
        return f"{self.author.full_name}'s Offer'"
