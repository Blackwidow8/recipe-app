from django.urls import path
from .views import user_list, login_view, register
from rest_framework_simplejwt.views import TokenObtainPairView,TokenRefreshView




urlpatterns = [
    path('', user_list, name='user_list'),
    path('login/', login_view, name='login'),
    path('register/',register, name='register'),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh')
]