from django.db import models

# Create your models here.
class Product(models.Model):
    img = models.CharField(max_length=255)
    
              
