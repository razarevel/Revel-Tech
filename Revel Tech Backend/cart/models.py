from django.db import models

# Create your models here.
class Product(models.Model):
    product_id = models.SmallIntegerField()
    tag = models.CharField(max_length=255)
    
              
