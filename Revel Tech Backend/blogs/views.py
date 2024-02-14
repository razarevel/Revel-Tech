from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Blogs
from .serializers import BlogSerializers
# Create your views here.


@api_view()
def blogs(request):
    queryset = Blogs.objects.all()
    serialer = BlogSerializers(queryset, many=True)
    return Response(serialer.data)
