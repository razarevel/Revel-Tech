from django.db import models

# Create your models here.
tg_choices = [('fp', "Feature Product"),('bs', "Best Seller")]
class Product(models.Model):    
    img  = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    price = models.IntegerField()
    tags = models.CharField(max_length=2,null=True,choices=tg_choices)
    class Meta:
        abstract = True


class Feature_product(Product):
    pass
class Top_rated(Product):
    pass
class Top_selling(Product):
    pass