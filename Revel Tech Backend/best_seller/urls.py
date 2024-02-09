from django.urls import path
from .views import best_seller
urlpatterns = [
    path("best_seller", best_seller)
]
