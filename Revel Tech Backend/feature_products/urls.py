from django.urls import path
from .views import features_product
urlpatterns = [
    path("listen/", features_product)
]
