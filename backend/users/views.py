from django.shortcuts import render
from .models import Profile

# Create your views here.
def profile_page(request):
    profile = Profile.objects.get(user=request.user)
    context = {"profile": profile}
    return render(request, 'profile.html', context)