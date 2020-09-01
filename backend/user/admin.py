from django.contrib import admin
from .models import CustomUser, PhoneBook
# Register your models here.


class CustomUserAdmin(admin.ModelAdmin):
    list_display = ('email', 'first_name', 'last_name', 'is_superuser')


admin.site.register(CustomUser, CustomUserAdmin)
admin.site.register(PhoneBook)
