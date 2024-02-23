from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializer import featureCollectionSerializer
from .serializer import featureProductSerializer
from .models import Collection
from .models import Product

# Create your views here.


@api_view()
def feature_product_collection(request):
    queryset = Collection.objects.all()
    serializer = featureCollectionSerializer(queryset, many=True)
    return Response(serializer.data)
    

@api_view()
def feature_products(request, id):
    query_set = Product.objects.filter(collection_id=id).all()
    if request.GET.get('limit'):
        limit = int(request.GET.get('limit'))
        query_set = query_set[:limit]
    serialer = featureProductSerializer(query_set, many=True)
    return Response(serialer.data)
    


@api_view()
def feature_productsbyId(request, id):
    product = Product.objects.get(pk=id)
    serialer = featureProductSerializer(product)
    return Response(serialer.data)
