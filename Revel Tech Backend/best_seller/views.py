from .models import Collection
from .serializer import sellerCollectionSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view

# Create your views here.

@api_view()
def best_seller(request):
    queryset = Collection.objects.all()
    serialer = sellerCollectionSerializer(queryset, many=True)
    print(serialer.data)
    return Response(serialer.data)


# directory = '/work/Revel Tech/JSON'


# # Get list of files in the directory
#     entries = os.listdir(directory)

# # Filter out non-JSON files if needed
#     json_files = [file for file in entries if file.endswith('.json')]

# # Assuming there's only one JSON file in the directory
#     if 'blogs.json' in json_files:
#         json_file_path = os.path.join(directory, 'best_seller_collection.json')

#     # Read the JSON data from the file
#     with open(json_file_path, 'r') as file:
#         data = json.load(file)
#     try:
#         for item in data:
#             data = Collection(
#                 img = item['img'],
#                 name = item['name'],
#             )
#             data.save()
#     except Exception as e:
#         raise Exception("Error occures while saving data to the database for blog {}" .format(str(e)))
