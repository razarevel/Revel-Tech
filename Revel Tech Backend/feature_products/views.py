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
    serialer = featureProductSerializer(query_set, many=True)
    return Response(serialer.data)


@api_view()
def feature_productsbyId(request, id):
    product = Product.objects.get(pk=id)
    serialer = featureProductSerializer(product)
    return Response(serialer.data)
# directory = '/work/Revel Tech/JSON'

#     # Get list of files in the directory
#     entries = os.listdir(directory)

#     # Filter out non-JSON files if needed
#     json_files = [file for file in entries if file.endswith('.json')]

#     # Assuming there's only one JSON file in the directory
#     if 'blogs.json' in json_files:
#         json_file_path = os.path.join(directory, 'feature_products.json')

#         # Read the JSON data from the file
#     with open(json_file_path, 'r') as file:
#         data = json.load(file)
#     try:
#         for item in data:
#             data = Product(
#                 img = item['img'],
#                 name = item['name'],
#                 price = item['price'],
#                 discount = item['discount'],
#                 collection_id = item['collection_id']
#             )
#             data.save()
#     except Exception as e:
#             raise Exception("Error occures while saving data to the database for blog {}" .format(str(e)))
