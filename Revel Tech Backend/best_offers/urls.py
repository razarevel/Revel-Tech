from django.urls import path
from .views import bestOffer

urlpatterns = [
    path("top_things/", bestOffer)
]