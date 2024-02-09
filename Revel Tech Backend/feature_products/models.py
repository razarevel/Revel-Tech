from django.db import models

# Create your models here.


class Collection(models.Model):
    img = models.CharField(max_length=255)
    name = models.CharField(max_length=255)


class Product(models.Model):
    img = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=5, decimal_places=4)
    discount = models.BooleanField(default=False)
    collection = models.ForeignKey(Collection, on_delete=models.CASCADE, related_name='collection_id')