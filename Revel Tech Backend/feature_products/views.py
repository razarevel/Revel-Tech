from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializer import featureCollectionSerializer
from .models import Collection
from .models import Product
import os
import json
# Create your views here.


@api_view()
def feature_product_collection(request):
    queryset = Collection.objects.all()
    serializer = featureCollectionSerializer(queryset, many=True)
    return Response(serializer.data)


@api_view()
def feature_products(request):
    
    return Response("ok")


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