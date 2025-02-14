"""
URL configuration for backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from todos.views import *
from users.views import *
from django.conf import settings
from django.conf.urls.static import static

from todos.api_views import TodosApiView
from todos.api_views import *

from rest_framework_simplejwt.views import (
    TokenObtainPairView,    # For logging in
    TokenRefreshView,       # For refreshing access token
    TokenVerifyView         # For verifying tokens
)
from users.api_views import MyTokenObtainPairView


urlpatterns = [
    path("apis/todos/",
        TodosApiView.as_view({
            'get': 'list',
            'post': 'create',
            'put':  'update',
            'patch':  'partial_update',
            'delete': 'destroy'
        }), name="todos-api"),
    path('api/login', login, name='api_login'),
    
    # Login endpoint - returns both access and refresh tokens
    path('api/token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),

    # Use refresh token to get new access token
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    # Verify if a token is valid
    path('api/token/verify/', TokenVerifyView.as_view(), name='token_verify'),


    path('admin/', admin.site.urls),
    path('accounts/', include('allauth.urls')),
    
    
    path('', HomePageView.as_view(), name='home'),
    path('about/', about, name='about'),
    path('todo-details/<int:pk>', TodoDetailsView.as_view(), name='todo-details'),
    path('create-todo/', CreateTodoView.as_view(), name='create-todo'),
    path('update-todo/<int:pk>', update_todo, name='update-todo'),
    path('delete-todo/<int:pk>', DeleteTodoView.as_view(), name='delete-todo'),
    path('profile', profile_page, name='profile'),
    path('update-profile/<int:pk>', update_profile, name='update-profile'),
    path('toggle-favorite/<int:pk>', toggle_favorite, name='toggle-favorite'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
