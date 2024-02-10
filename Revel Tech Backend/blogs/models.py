from django.db import models

# Create your models here.

class Blogs(models.Model):
    img = models.CharField(max_length=255)
    title = models.CharField(max_length=255)
    description = models.TextField()
    comments = models.SmallIntegerField()