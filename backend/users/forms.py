from django import forms
from .models import Profile

class ProfileForm(forms.ModelForm):
    username = forms.CharField(max_length=100, required=False, 
                widget=forms.TextInput(attrs={'placeholder': 'Username'}))

    class Meta:
        model = Profile
        fields = ('bio', 'image', 'username')
    