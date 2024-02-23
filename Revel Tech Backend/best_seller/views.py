from .models import Collection
from .models import Product
from .serializer import sellerCollectionSerializer
from .serializer import sellerProductSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view

# Create your views here.


@api_view()
def best_seller_Collection(request):
    queryset = Collection.objects.all()
    serialer = sellerCollectionSerializer(queryset, many=True)
    return Response(serialer.data)


@api_view()
def best_seller_Product(request, id):
    query_set = Product.objects.filter(collection_id=id).all()
    if request.GET.get('limit'):
        limit = int(request.GET.get('limit'))
        query_set = query_set[:limit]
    serialer = sellerProductSerializer(query_set, many=True)
    return Response(serialer.data)


@api_view()
def best_seller_ProductById(request, id):
    queryset = Product.objects.get(pk=id)
    serialer = sellerProductSerializer(queryset)
    return Response(serialer.data)


#     directory = '/work/Revel Tech/JSON'


# # Get list of files in the directory
#     entries = os.listdir(directory)

# # Filter out non-JSON files if needed
#     json_files = [file for file in entries if file.endswith('.json')]

# # Assuming there's only one JSON file in the directory
#     if 'blogs.json' in json_files:
#         json_file_path = os.path.join(directory, 'best_seller_product.json')

#     # Read the JSON data from the file
#     with open(json_file_path, 'r') as file:
#         data = json.load(file)
#     try:
#         for item in data:
#             data = Product(
#                 img=item['img'],
#                 name=item['name'],
#                 price=item['price'],
#                 discount=item['discount'],
#                 collection_id=item['collection_id']
#             )
#             data.save()
#     except Exception as e:
#         raise Exception(
#             "Error occures while saving data to the database for blog {}" .format(str(e)))
#     return Response("Ok")
