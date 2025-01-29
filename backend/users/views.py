from django.shortcuts import render, redirect
from .models import Profile
from .forms import ProfileForm
from todos.models import Todos

# Create your views here.
def profile_page(request):
    profile = Profile.objects.get(user=request.user)
    ids = request.session.get('favorite_todos', [])
    # ORM  ->  Object relational mapping
    favorite_todos = Todos.objects.filter(id__in=ids)

    context = {
        "profile": profile,
        "favorite_todos": favorite_todos
    }
    return render(request, 'profile.html', context)


def update_profile(request, pk:int):
    profile = Profile.objects.get(id=pk)
    form = ProfileForm(instance=profile)

    if request.method == 'POST':
        if form.is_valid(): 
            form.save()
            return redirect('profile_page')
        
    return render(request, 'update_profile.html', {'form': form})
    