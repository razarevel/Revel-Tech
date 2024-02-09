from django.http import HttpResponse

# Create your views here.

def Likes(request):
    return HttpResponse("Hello from server for likes")

