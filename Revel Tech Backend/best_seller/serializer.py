from rest_framework import serializers
from .models import Collection
class sellerCollectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Collection
        fields = "__all__"