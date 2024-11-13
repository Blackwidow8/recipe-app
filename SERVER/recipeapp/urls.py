from .views import view_recipes, view_favorites, add_favorite, delete_favorite
from django.urls import path



urlpatterns = [
    path('', view_recipes, name='all_recipes'),
    path('favorites/', view_favorites, name='favorites'),
    path('favorites/add/', add_favorite, name='add_favorite'),
    path('favorites/delete/<int:favorite_id>/', delete_favorite, name='delete_favorite'),
]