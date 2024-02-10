from django.http import HttpResponse
import json
import os
# Create your views here.


def features_product(request):
    return HttpResponse("You are so cute. I love you sweetheart.")


def feature_product_collection(request):
    directory = '/work/Revel Tech/JSON'


# Get list of files in the directory
    entries = os.listdir(directory)

# Filter out non-JSON files if needed
    json_files = [file for file in entries if file.endswith('.json')]

# Assuming there's only one JSON file in the directory
    if 'blogs.json' in json_files:
        json_file_path = os.path.join(directory, 'blogs.json')

    # Read the JSON data from the file
    with open(json_file_path, 'r') as file:
        data = json.load(file)
    print(data)
    # try:
    #     for item in data:
    #         data = Blogs(
    #             img = item['img'],
    #             title = item['title'],
    #             description = item['description'],
    #             comments = item['comments']
    #         )
    #         data.save()
    # except Exception as e:
    #     raise Exception("Error occures while saving data to the database for blog {}" .format(str(e)))
    return HttpResponse("Alright")
