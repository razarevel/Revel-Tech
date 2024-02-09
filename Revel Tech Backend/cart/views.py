from django.http import HttpResponse
# Create your views here.

def carts(request):
    return HttpResponse('Hello from server for cart')
    