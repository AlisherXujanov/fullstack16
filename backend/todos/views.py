from django.shortcuts import render, redirect
from .models import Todos
from .forms import TodoForm
from django.contrib import messages
from django.contrib.auth.models import User
import datetime


# HTTP methods of request  =>  HTTP-методы запроса
# GET    => получение данных
# POST   => отправка данных
# PUT    => обновление данных
# PATCH  => обновление части данных
# DELETE => удаление данных


def home_page(request): # запрос 
    # for now, the view works in only GET method requests
    # RU: пока что, view работает только с GET-запросами
    if request.method == "POST":
        form = TodoForm(request.POST)
        if form.is_valid():
            obj = form.save(commit=False)
            admin = User.objects.first()
            obj.author = admin
            obj.save()
            messages.success(request, "Todo added successfully")
            return redirect('home')
    
    context = {
        "todos": Todos.objects.all(),
        "form": TodoForm(),
        'date': datetime.datetime.now()
    }
    return render(request, 'home.html', context)

# API  => Application Programming Interface



