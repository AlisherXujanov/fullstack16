from django.db import models
from django.contrib.auth.models import User


# Create your models here.


# OneToOneField   ->  1x1
# ForeignKey      ->  1xM
# ManyToManyField ->  MxM

# on_delete = models.CASCADE   ->  if the user is deleted, delete the todo
#                              RU: если пользователь удален, удалить заметку
# on_delete = models.PROTECT   ->  if the user is deleted, do not delete the todo
#                              RU: если пользователь удален, не удалять заметку
# on_delete = models.SET_NULL  ->  if the user is deleted, set the author to NULL
#                              RU: если пользователь удален, установить автора в NULL


# Заметки
class Todos(models.Model):
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title
    
    class Meta:
        verbose_name_plural = 'Todos'


# python manage.py makemigrations   =>   create migration file
# python manage.py migrate          =>   apply migration
