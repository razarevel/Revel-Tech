from django.urls import path
from .views import carts

urlpatterns = [
    path('carts/', carts)
]
