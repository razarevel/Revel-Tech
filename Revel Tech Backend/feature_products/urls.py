from django.urls import path
from . import views
urlpatterns = [
    path("features_product/collection", views.feature_product_collection),
    path("features_product/products", views.feature_products),
]
