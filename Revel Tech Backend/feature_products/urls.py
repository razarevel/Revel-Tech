from django.urls import path
from . import views
urlpatterns = [
    path("features_product/collection", views.feature_product_collection),
    path("features_product/collection/<id>", views.feature_products),
    path("features_product/product/<id>", views.feature_productsbyId),
]
