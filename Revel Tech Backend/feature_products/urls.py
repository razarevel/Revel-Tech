from django.urls import path
from . import views
urlpatterns = [
    path("features_products", views.features_product),
    path("features_product/collection", views.feature_product_collection),
]
