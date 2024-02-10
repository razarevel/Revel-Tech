from django.http import HttpResponse
from .models import Blogs

# Create your views here.


def blogs(request):
    
    return HttpResponse("Uloaded")
