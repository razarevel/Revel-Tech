from django.urls import path
from . import views
urlpatterns = [
    path("best_seller/collection", views.best_seller_Collection),
    path("best_seller/collection/<id>", views.best_seller_Product),
    path("best_seller/product/<id>", views.best_seller_ProductById),
]
