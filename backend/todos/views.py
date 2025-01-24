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
    DeleteView )

class HomePageView(ListView):
    model = Todos
    template_name = 'home.html'
    context_object_name = 'todos'

def about(request):
    return render(request, 'about.html')


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
