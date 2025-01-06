from django.shortcuts import render
from .models import Todos
# Create your views here.


def home_page(request):
    context = {
        "todos": Todos.objects.all()
    }
    
    return render(request, 'home.html', context)
