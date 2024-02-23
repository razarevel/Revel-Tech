from rest_framework import serializers
from .models import Feature_product
class serialerBestOffer(serializers.ModelSerializer):
    class Meta:
        model = Feature_product
        fields = "__all__"
