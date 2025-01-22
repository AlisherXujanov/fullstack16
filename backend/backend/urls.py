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

urlpatterns = [
    path('admin/', admin.site.urls),
    path('accounts/', include('allauth.urls')),
    
    
    path('', home_page, name='home'),
    path('about/', about, name='about'),
    path('todo-details/<int:pk>', todo_details, name='todo-details'),
    path('create-todo/', create_todo, name='create-todo'),
    path('update-todo/<int:pk>', update_todo, name='update-todo'),
    path('delete-todo/<int:pk>', delete_todo, name='delete-todo'),
    path('profile', profile_page, name='profile'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
