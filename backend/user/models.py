from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils.translation import ugettext_lazy as _


from .managers import CustomUserManager

# Create your models here.


class CustomUser(AbstractUser):
    username = None
    first_name = models.CharField(_('First Name'), max_length=255)
    last_name = models.CharField(_('Last Name'), max_length=255)
    email = models.EmailField(_('email address'), unique=True)
    description = models.TextField(blank=True)
    skills = models.CharField(max_length=255, blank=True)
    education = models.CharField(max_length=255, blank=True)
    certification = models.CharField(max_length=255, blank=True)
    phone_no = models.BigIntegerField(null=True, blank=True)
    occupation = models.CharField(max_length=255, blank=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name']

    objects = CustomUserManager()

    @property
    def full_name(self):
        return f"{self.first_name} {self.last_name}"

    def __str__(self):
        return self.email


class PhoneBook(models.Model):
    user = models.ForeignKey(
        CustomUser, on_delete=models.CASCADE)
    name = models.CharField(max_length=255, blank=True)
    phone_no = models.BigIntegerField(null=True, blank=True)
    email = models.EmailField(null=True, blank=True)

    def __str__(self):
        return self.user.full_name
