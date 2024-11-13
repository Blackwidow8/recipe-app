from django.db import models
from django.contrib.auth.models import User

import recipeapp

class Recipe(models.Model):
    image = models.ImageField(upload_to='recipes/', default='')
    title = models.CharField(max_length=50, default='')
    description = models.TextField(default='')
    date_uploaded = models.DateTimeField(auto_now=True)


class Favorite(models.Model):
    user=models.ForeignKey(User, on_delete=models.CASCADE)
    recipe = models.ForeignKey(Recipe, on_delete=models.CASCADE)

    class Meta:
        unique_together = ['user', 'recipe']

def __str__(self):
    return self.title