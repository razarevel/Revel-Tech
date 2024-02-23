from django.urls import path
from . import views

urlpatterns = [
    path("top_things/", views.bestOffer),

]
