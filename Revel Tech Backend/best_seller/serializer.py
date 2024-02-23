from rest_framework import serializers
from .models import Collection
from .models import Product
class sellerCollectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Collection
        fields = "__all__"

class sellerProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = "__all__"