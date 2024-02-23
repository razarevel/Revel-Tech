from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Feature_product
from .models import Top_rated
from .models import Top_selling
from .serializers import serialerBestOffer
# Create your views here.


@api_view()
def bestOffer(request):
    featureProducts = Feature_product.objects.all()
    topRated = Top_rated.objects.all()
    topSelling = Top_selling.objects.all()
    serialerFeature = serialerBestOffer(featureProducts, many=True)
    serialerRated = serialerBestOffer(topRated, many=True)
    serialerSeller = serialerBestOffer(topSelling, many=True)
    data = [serialerFeature.data, serialerRated.data, serialerSeller.data]
    return Response(data)
