from django.shortcuts import render, redirect
from .models import Todos
from .forms import TodoForm
from django.contrib import messages
from django.contrib.auth.models import User
from django.views.generic import (
    TemplateView,
    ListView,
    DetailView,
    CreateView,
    DeleteView,
    UpdateView)


# request  =>  запрос нашего клиента
# MIDDLEWARE
# response =>  ответ сервера



class HomePageView(ListView):
    model = Todos
    template_name = 'home.html'
    context_object_name = 'todos'
    
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        favorite_todos = self.request.session.get('favorite_todos', [])
        context["favorite_todos"] = favorite_todos
        return context
    



def about(request):
    return render(request, 'about.html')


def toggle_favorite(request, pk:int):
    session_storage = request.session.get('favorite_todos', [])

    if pk in session_storage:
        session_storage.remove(pk)
        messages.success(request, "Todo removed from favorites")
    else:
        session_storage.append(pk)
        messages.success(request, "Todo added to favorites")

    return redirect('home')






class TodoDetailsView(DetailView):
    model = Todos
    template_name = 'todo_details.html'
    context_object_name = 'todo'


class CreateTodoView(CreateView):
    model = Todos
    form_class = TodoForm  # This lets to use the form that we created inside templates
    template_name = 'create_todo.html'
    success_url = '/'

    def form_valid(self, form):
        obj = form.save(commit=False)
        obj.author = self.request.user
        obj.save()
        messages.success(self.request, "Todo added successfully")
        return super().form_valid(form)


class DeleteTodoView(DeleteView):
    model = Todos
    template_name = 'delete_todo.html'
    success_url = '/'
    context_object_name = 'todo'

    def delete(self, request, *args, **kwargs):
        messages.success(request, "Todo deleted successfully")
        return super().delete(request, *args, **kwargs)


def update_todo(request, pk):
    todo = Todos.objects.get(id=pk)
    form = TodoForm(instance=todo)
    if request.method == "POST":
        form = TodoForm(request.POST, instance=todo)
        if form.is_valid():
            form.save()
            messages.success(request, "Todo updated successfully")
            return redirect('home')

    context = {"form": form}
    return render(request, 'update_todo.html', context=context)
