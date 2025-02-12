# Render.com для Django: Учебное руководство

## Введение

Render.com — это отличная платформа для хостинга веб-приложений, особенно для проектов на Django. Она предоставляет все необходимые инструменты для запуска полноценного веб-приложения, включая базы данных и хранилища. В этом руководстве мы рассмотрим, почему Render.com подходит для Django, и как его использовать шаг за шагом.

## Почему Render.com лучше для Django?

* **Поддержка баз данных**: Встроенная поддержка PostgreSQL, MySQL и Redis
* **Хранилища**: Объектное хранилище для файлов
* **Простота использования**: Интуитивно понятный интерфейс
* **Автомасштабирование**: Автоматическое масштабирование приложения
* **Бесплатный тарифный план**: Идеально для стартовых проектов

# Пошаговая настройка Django на Render.com

## 1. Создание аккаунта на Render.com
1. Перейдите на сайт Render.com.
2. Нажмите кнопку "Sign Up" и заполните форму регистрации.
3. Подтвердите свою учетную запись через письмо, которое придет на ваш email.


## 2. Создание нового приложения
1. Войдите в свой аккаунт Render.com.
2. Нажмите кнопку "New" в разделе "Web Apps".
3. Выберите "Django" в качестве типа приложения.
4. Укажите название вашего приложения и выберите ветку Git, в которой находится ваш проект.


## 3. Настройка базы данных
1. В разделе "Resources" вашего приложения нажмите кнопку "New Resource".
2. Выберите тип базы данных (например, PostgreSQL).
3. Настройте параметры базы данных, такие как имя пользователя и пароль.
4. Сохраните изменения.


## Подключение базы данных к Django
В файле settings.py вашего Django-проекта обновите параметры базы данных:
```python
DATABASES = {  
    'default': {  
        'ENGINE': 'django.db.backends.postgresql',  
        'NAME': 'имя_базы',  
        'USER': 'имя_пользователя',  
        'PASSWORD': 'пароль',  
        'HOST': 'хост_базы',  
        'PORT': 'порт_базы',  
    }  
}  
```
Сохраните изменения и зафиксируйте их в Git.



## 5. Настройка хранилища
1. В разделе "Resources" вашего приложения нажмите кнопку "New Resource".
2. Выберите "Object Storage".
3. Настройте параметры хранилища, такие как имя и регион.
4. Сохраните изменения.


## 6. Подключение хранилища к Django
1. Установите библиотеку django-storages:
```bash
pip install django-storages[render]  
```
2. В файле settings.py добавьте следующие строки:
```python
DEFAULT_FILE_STORAGE = 'storages.backends.render.RenderStorage'  
RENDER_STORAGE_ACCESS_KEY = 'ваш_access_ключ'  # Найдите его в настройках хранилища
RENDER_STORAGE_SECRET_KEY = 'ваш_secret_ключ'  # Найдите его в настройках хранилища
```
Сохраните изменения и зафиксируйте их в Git.


## 7. Применение миграций
1. Войдите в консоль вашего приложения через SSH.
2. Выполните команду:
```bash
python manage.py migrate  
```
3. Это применит все миграции к вашей базе данных.

## 8. Настройка домена
1. В разделе "Settings" вашего приложения перейдите в раздел "Domains".
2. Нажмите кнопку "Add Domain".
3. Введите ваш домен и следуйте инструкциям для настройки DNS.
4. После настройки DNS ваше приложение будет доступно по вашему домену.


## 9. SSL-сертификат
Render автоматически настраивает SSL-сертификат для вашего домена. Это означает, что ваш сайт будет доступен по HTTPS без дополнительных настроек.
```python
# settings.py
# NOTE: Добавьте следующую строку для автоматического перенаправления на HTTPS только после окончания разработки

SECURE_SSL_REDIRECT = True # Перенаправление на HTTPS
SECURE_HSTS_SECONDS = ...  # Время действия HSTS
# HSTS  - Это механизм, который заставляет браузеры использовать HTTPS вместо HTTP
SECURE_HSTS_INCLUDE_SUBDOMAINS = True # Включить поддомены
SECURE_HSTS_PRELOAD = True # Предзагрузка HSTS
SECURE_PROXY_SSL_HEADER = ('HTTP_X_FORWARDED_PROTO', 'https') # Заголовок прокси 
# Это для работы с прокси-серверами, которые передают информацию о протоколе
```

## 10. Экстра запреты
1. Middleware для защиты от атак:
```python
# settings.py
MIDDLEWARE = [
    ...
    'django.middleware.clickjacking.XFrameOptionsMiddleware', # Защита от кликджекинга
    'django.middleware.security.SecurityMiddleware', # Защита от различных атак
    ...
]
```
2. Создайте свой `middleware` чтобы проверить является ли пользователь amin или нет.
Это поможет нам чтобы отправить не администраторов на другую страницу как например `403.html`:
```python
# middleware.py
from django.http import HttpResponseForbidden

class AdminCheckMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    # чтобы использовать это только для '/admin' на 'production'
    def __call__(self, request):
        if request.path.startswith('/admin') and not request.user.is_staff:
            return HttpResponseForbidden()
        return self.get_response(request)


# settings.py
MIDDLEWARE = [
    ...
    'myapp.middleware.AdminCheckMiddleware',
    ...
]
```



