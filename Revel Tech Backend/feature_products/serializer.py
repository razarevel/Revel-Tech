from rest_framework import serializers
from .models import Collection
from .models import Product

class featureCollectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Collection
        fields = "__all__"
    
class featureProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = "__all__"