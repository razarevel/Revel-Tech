# Generated by Django 5.0.1 on 2024-02-20 22:27

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("best_seller", "0001_initial"),
    ]

    operations = [
        migrations.AlterField(
            model_name="product",
            name="price",
            field=models.SmallIntegerField(),
        ),
    ]
