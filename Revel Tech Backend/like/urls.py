from django.urls import path
from .views import Likes
urlpatterns = [
    path('likes/', Likes)
]
