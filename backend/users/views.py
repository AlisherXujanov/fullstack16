from django.shortcuts import render, redirect
from .models import Profile
from .forms import ProfileForm

# Create your views here.
def profile_page(request):
    profile = Profile.objects.get(user=request.user)
    context = {"profile": profile}
    return render(request, 'profile.html', context)


def update_profile(request, pk:int):
    profile = Profile.objects.get(id=pk)
    form = ProfileForm(instance=profile)

    if request.method == 'POST':
        if form.is_valid(): 
            form.save()
            return redirect('profile_page')
        
    return render(request, 'update_profile.html', {'form': form})
    