# Table of contents
1. [Introduction to APIs](#introduction-to-apis)
2. [API views](#api-views)
3. [Serialization and Deserialization](#serialization-and-deserialization)
4. [Authentication and Authorization](#authentication-and-authorization)
5. [JWT (JSON Web Tokens)](#jwt-json-web-tokens)
6. [Filtering & Ordering & Pagination & Caching](#filtering--ordering--pagination--caching)


# Introduction to APIs 

### What is an API?
- API stands for Application Programming Interface. It is a set of rules that allow programs to talk to each other. The developer creates the API on the server and allows the client to talk to it.

### What is HTTP
- HTTP stands for Hypertext Transfer Protocol. It's a stateless, application-layer protocol for communicating between distributed systems, and is the foundation of the modern web.


### `TOPIC AGENDA`  
```markdown
1. HTTP Methods = [GET, POST, PUT, PATCH, DELETE]
<!-- URL => Universal Resource Locator -->
2. HTTP requests  =  [ Version type, URL, Method, Headers, Body (optional) ]
3. HTTP response = [ Source, Length, Content-type, Headers, last-modified, status-code]
4. Naming conventions on Uniform Resource Identifier  and  Hierarchy and Params -?...=...
5. Essential tools for API development (Thunder-Client and Browser-Json-Formatter)
6. Creating a simple API using Django REST Framework
```


#### `HTTP Methods`  
```markdown
1. GET - Retrieve data from the server
2. POST - Submit data to the server
3. PUT - Update a resource
4. PATCH - Update part of a resource
5. DELETE - Delete a resource
```

#### `HTTP requests`  
```markdown
1. Version type - HTTP/1.1
2. URL - https://www.google.com
3. Method - GET
4. Headers - Accept: text/html
5. Body (optional) - { "name": "John" }
```

#### `HTTP response`  
```markdown
1. Source - https://www.google.com
2. Length - 12345
3. Content-type - text/html
4. Headers - Content-type: text/html
5. last-modified - 2020-01-01
6. status-code - 200
```

#### `Naming conventions on Uniform Resource Identifier  and  Hierarchy and Params -?...=...`  
```markdown
1. URI - Uniform Resource Identifier
2. URL - Uniform Resource Locator
3. Hierarchy - https://www.google.com/search?q=python
4. Params - ?q=python

EXAMPLE:
*`https://www.example.com/products/computers/laptops?brand=dell&price=500-1000`*
---------------------------------------------
- **https** is the scheme, which specifies the protocol used to access the resource (in this case, HTTPS).
- **www.example.com** is the domain name, which identifies the server that hosts the resource.
- **/products/computers/laptops** is the path, which specifies the location of the resource on the server.
- **?brand=dell&price=500-1000** is the query string, which contains additional parameters that can be used to filter or modify the resource.
```

#### `Essential tools for API development (Zunder-Client and Browser-Json-Formatter)`  
```markdown
1. Thunder-Client - https://www.thunderclient.com/
2. Browser-Json-Formatter - https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa
```


#### `Creating a simple API using Django REST Framework`  
https://www.django-rest-framework.org/tutorial/quickstart/



# API views

### Diffirent types of API-views
```python
from django.http import HttpResponse
from rest_framework import status

# For using a decorators
from rest_framework.response import Response
from rest_framework.decorators import api_view

# For using class-based views
from rest_framework.views import APIView
from rest_framework import generics, viewsets

@api_view(['GET', 'POST'])
def books_view(request):
    if request.method == 'POST':
        ...
    else:
       data = modal_to_dict(Book.objects.all())
       return Response({'message': 'Hello, world!'}, status=status.HTTP_200_OK)

class Books():
    @staticmethod
    @api_view(['GET', 'POST'])
    def books_view(request):
        return Response(
                        {'message': 'Hello, world!'}, 
                        status=status.HTTP_200_OK
                    )

# If we want to use it in the class-based view
class BookView(APIView):
	def get(self, request):
        all_books = Books.objects.all()
        books = BooksSerializer(all_books, many=True)
        return Response(books.data, status=status.HTTP_200_OK)

    def post(self, request):
        # data  ==>  информация
        serializer = BooksSerializer(data=request.data)
        if serializer.is_valid(): # is it valid or not?
            obj = serializer.save(commit=False)
            # obj.--- = ....
            obj.save()
            # Before saving the information into the DB, we can do some extra things
            # by using commit=False
            # RU: До сохранения информации в базу данных, мы можем сделать некоторые дополнительные вещи (например: добавить автора)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


    def patch(self, request): ...
    def put(self, request): ...
    def delete(self, request): ...
    def update(self, request): ...
```

### ViewSets
- ViewSets are simple class-based views, but they come with benefits. There are a few ViewSets classes available in DRF that you can use to quickly scaffold a functioning API CRUD project. You can also provide permission classes and throttle classes to allow authenticated API calls and rate limiting.

Here are some of them that are mostly used:
1. **ViewSet** - does not provide any actions by default, and does not include the base set of generic view behavior.
So, you need to provide the implementation for each action explicitly.
1. **ModelViewSet** - provides CRUD functions with a single class. It accepts a queryset and a serializer class as required parameters. It also provides the following actions out of the box: list, retrieve, create, update, partial_update, destroy.
2. **ReadOnlyModelViewSet** - provides the read-only actions list and retrieve.

```python
from rest_framework import viewsets
from .models import MyModel
from .serializers import MyModelSerializer

class MyViewSet(viewsets.ViewSet):
    def list(self, request):
        queryset = MyModel.objects.all()
        serializer = MyModelSerializer(queryset, many=True)
        return Response(serializer.data)

    def create(self, request):  # POST
        pass

    def retrieve(self, request, pk=None):   # GET
        pass

    def update(self, request, pk=None):    # PUT
        pass

    def partial_update(self, request, pk=None):  # PATCH
        pass

    def destroy(self, request, pk=None):    # DELETE
        pass

class MyModelViewSet(viewsets.ModelViewSet):
    queryset = MyModel.objects.all()
    serializer_class = MyModelSerializer

class MyReadOnlyModelViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = MyModel.objects.all()
    serializer_class = MyModelSerializer

```

### Generic views 
- Generic views are another way of quickly writing class-based views to scaffold fully functional CRUD API projects. There are several generic views that offer a particular functionality, like displaying resources or creating a new resource and so on. All you must do is extend these generic views to make your API endpoints work.

- CreateAPIView           - `POST` - Used for creating objects.
- ListAPIView             - `GET`  - Used for listing objects.
- RetrieveAPIView         - `GET`  - Display a single resource
- DestroyAPIView          - `DELETE` - Used for deleting objects.
- UpdateAPIView           - `PUT, PATCH` - Used for updating objects.
- ListCreateAPIView       - `GET, POST` - Used for listing and creating objects.
- RetrieveUpdateAPIView   - `GET, PUT, PATCH` - Used for retrieving and updating objects.
- RetrieveDestroyAPIView  - `GET, DELETE` - Used for retrieving and deleting objects.
- RetrieveUpdateDestroyAPIView - `GET, PUT, PATCH, DELETE` - Used for retrieving, updating, and deleting objects.

```python
from rest_framework import generics
from .models import MyModel

class MyCreateAPIView(generics.CreateAPIView):
    """ Used for creating objects. """
    queryset = MyModel.objects.all()
    serializer_class = MyModelSerializer

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)

class MyListAPIView(generics.ListAPIView):
    """ Used for listing objects. """
    queryset = MyModel.objects.all()
    serializer_class = MyModelSerializer

    def get_queryset(self):
        return self.queryset.filter(author=self.request.user)

class MyRetrieveAPIView(generics.RetrieveAPIView):
    """ Used for retrieving a single object. """
    queryset = MyModel.objects.all()
    serializer_class = MyModelSerializer

class MyDestroyAPIView(generics.DestroyAPIView):
    """ Used for deleting objects. """
    queryset = MyModel.objects.all()
    serializer_class = MyModelSerializer

class MyUpdateAPIView(generics.UpdateAPIView):
    """ Used for updating objects. """
    queryset = MyModel.objects.all()
    serializer_class = MyModelSerializer

class MyListCreateAPIView(generics.ListCreateAPIView):
    """ Used for listing and creating objects. """
    queryset = MyModel.objects.all()
    serializer_class = MyModelSerializer

class MyRetrieveUpdateAPIView(generics.RetrieveUpdateAPIView):
    """ Used for retrieving and updating objects. """
    queryset = MyModel.objects.all()
    serializer_class = MyModelSerializer

class MyRetrieveDestroyAPIView(generics.RetrieveDestroyAPIView):
    """ Used for retrieving and deleting objects. """
    queryset = MyModel.objects.all()
    serializer_class = MyModelSerializer

class MyRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    """ Used for retrieving, updating, and deleting objects. """
    queryset = MyModel.objects.all()
    serializer_class = MyModelSerializer

# =========================================================================
# in urls.py
...
path('api/.../', ...APIView.as_view(), name='...'),
...
```



### Permissions classes
- `AllowAny` - Allow any access
- `IsAuthenticated` - Allow access only to authenticated users
- `IsAdminUser` - Allow access only to admin users
- `IsAuthenticatedOrReadOnly` - Allow access to authenticated users (read-only) and allow access to non-authenticated users (read-only)


# Serialization and Deserialization

### Serializer
- In easy words, serializers are used to convert complex data, such as querysets and model instances, to native Python datatypes that can then be easily rendered into JSON, XML, or other content types. Serializers also provide deserialization, allowing parsed data to be converted back into complex types, after first validating the incoming data.


```python
from rest_framework import serializers

class BookSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True) # NOTE: usually we don't want to add id field
    title = serializers.CharField(max_length=255)
    author = serializers.CharField(max_length=255)
    description = serializers.CharField(max_length=255)
    created_at = serializers.DateTimeField(read_only=True)
    updated_at = serializers.DateTimeField(read_only=True)

    def create(self, validated_data:dict) -> Books:
        return Books.objects.create(**validated_data)

    def update(self, instance:Books, validated_data:dict) -> Books:
        instance.title = validated_data.get('title', instance.title)
        instance.author = validated_data.get('author', instance.author)
        instance.description = validated_data.get('description', instance.description)
        instance.save()
        return instance
```
Then we can use it like:
```python
serializer = BookSerializer(data=request.data)
if serializer.is_valid():
    serializer.save()
    return Response(serializer.data, status=status.HTTP_201_CREATED)
return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
```



### ModelSerializer
- ModelSerializer is a shortcut to create a serializer class with fields that correspond to the Model fields. It will create a set of default fields for you, based on the model.


```python
from rest_framework import serializers
DISCOUNT_IN_PERCENT = 10

class BookSerializer(serializers.ModelSerializer):
    price_in_discount = serializers.IntegerField(read_only=True, method_name='price_after_discount')
    author_name = serializers.CharField(read_only=True, method_name='current_user_as_author')

    # NOTE: 
    # 1. We can aslo use rename existing fields by using source attribute
    # ex: author_name = serializers.CharField(source='author.username')
    # 2. We can also use SerializerMethodField() to create a custom field
    # ex: price_in_discount = serializers.SerializerMethodField(method_name='price_after_discount')

    class Meta:
        model = Book
        fields = ['title', 'author_name', 'price_in_discount', 'description', 'created_at']

    def price_after_discount(self, obj:Book):
        discount_price = obj.price - (obj.price * DISCOUNT_IN_PERCENT / 100)
        return f'${discount_price} - ({DISCOUNT_IN_PERCENT}% discount)'

    def current_user_as_author(self, obj:Book):
        request = self.context.get('request')
        return request.user.username

# NOTE: To be able to get request object in serializer, 
#       you need to pass it in the view MySerializer(..., context={'request': request})

```


### Relationship serializer
- Let's say we have another model for 'genre' field of Books model.
```python
# models.py
class Genre(models.Model):
    slug = models.SlugField(unique=True) # this is for url
    name = models.CharField(max_length=50, unique=True)

    def save(self, *args, **kwargs):
        if not self.slug:
            from django.utils.text import slugify
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.name

class Books(models.Model):
    ...
    genre = models.ForeignKey(Genre, on_delete=models.PROTECT, default=1)
    ...
```

- So, we need to create a serializer for it and then use it in BooksSerializer

```python
# serializers.py
class BooksSerializer(serializers.ModelSerializer):
    ...
    genre = serializers.HyperlinkedRelatedField(
        queryset=Genre.objects.all(),
        view_name='genre-detail',
        lookup_field='slug'
    )
    class Meta:
        model = Books
        fields = [..., 'genre', ...]
    ...
```

Then, we need to create a view for it.
```python
# NOTE: There is a convention you must follow when you create this view name. The rule is that you have to add -detail after the related field name, which is category in the MenuItemSerializer. This is why the view name was category-detail in this code. If the related field name was user, the view name would be user-detail. 

from .models import Genre 
from .serializers import GenreSerializer
from django.shortcuts import get_object_or_404 # for 404 error if the object does not exist
@api_view()
def genre_detail(request, slug):
    genre = get_object_or_404(Genre, slug=slug)
    serializer = GenreSerializer(genre)
    return Response(serializer.data)

# In urls.py
urlpatterns = [
    ...
    path('genres/<slug:slug>/', genre_detail, name='genre-detail'),
]
```


# Authentication and Authorization

### What is Authentication? 🔑
Think of authentication like showing your ID card at a club:
- It's how a website/app knows who you are
- Usually involves typing in your username and password
- If correct, you get a special "token" (like a wristband at a club)
- You show this token every time you want to do something in the app

### What is Authorization? 🛡️
Authorization is like having different VIP levels at a club:
- Once you're in (authenticated), what are you allowed to do?
- Some people can only view things
- Others can edit or delete things
- Admins can do everything

### How does it work? 🤔
It's a 2-step process:

1. First Login (Authentication):
   - You send your username and password
   - If correct, the server gives you a token
   - Think of it like showing your ID and getting a wristband

2. Using the Token (Authorization):
   - Every time you want to do something, you show your token
   - The server checks what you're allowed to do
   - Like showing your wristband to access different areas of a club

```markdown
Step 1: Getting Your Token    Step 2: Using Your Token
+----------------+           +----------------+
|    You         |           |     You        |
|  +----------+  |           |  +----------+  |
|  | Username |  |           |  |  Token   |  |
|  | Password |  |           |  |          |  |
|  +----------+  |           |  +----------+  |
|       ↓        |           |       ↓        |
|  +----------+  |           |  +----------+  |
|  |  Token   |  |           |  | Can you  |  |
|  |          |  |           |  |  do it?  |  |
|  +----------+  |           |  +----------+  |
+----------------+           +----------------+
```

### Setting Up Token Authentication 🛠️

1. First, add this to your settings.py:
```python
# settings.py
INSTALLED_APPS = [
    # ... your other apps ...
    'rest_framework.authtoken',  # Add this line
]

REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'rest_framework.authentication.TokenAuthentication',
    ],
}

# This helps during development
if DEBUG:
    REST_FRAMEWORK['DEFAULT_AUTHENTICATION_CLASSES'] += [
        'rest_framework.authentication.SessionAuthentication',
    ]
```

2. Add this to your urls.py:
```python
# urls.py
from rest_framework.authtoken.views import obtain_auth_token

urlpatterns = [
    # ... your other urls ...
    path('api/login', login, name='login'),
]
```

3. Create a simple login view:
```python
# views.py
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.contrib.auth import authenticate

@api_view(['POST'])
def login(request):
    # Get username and password from the request
    username = request.data.get('username')
    password = request.data.get('password')
    
    # Check if username and password are correct
    user = authenticate(username=username, password=password)
    
    if user:
        # Create or get a token for this user
        token, _ = Token.objects.get_or_create(user=user)
        return Response({'token': token.key})
    else:
        return Response({'error': 'Wrong username or password'}, status=400)
```

### Checking User Permissions (Authorization) 🔒

Here's a simple example of checking if a user is an admin:

```python
# views.py
@api_view(['GET'])
def check_if_admin(request):
    # Check if user is in the 'admin' group
    if request.user.groups.filter(name='admin').exists():
        return Response({'message': 'You are an admin! 🎉'})
    else:
        return Response({'message': 'Sorry, admin only area! 🚫'}, status=403)
```

### Protecting Against Too Many Requests (Throttling) 🛡️

Sometimes you want to limit how many times someone can try to login or use your API. This is called throttling:

```python
# settings.py
REST_FRAMEWORK = {
    'DEFAULT_THROTTLE_CLASSES': [
        'rest_framework.throttling.AnonRateThrottle',  # For users who aren't logged in
        'rest_framework.throttling.UserRateThrottle',  # For logged in users
    ],
    'DEFAULT_THROTTLE_RATES': {
        'anon': '3/minute',  # Anonymous users: 3 requests per minute
        'user': '10/minute', # Logged in users: 10 requests per minute
    }
}
```

### Using Djoser for Easy Authentication 🔑
Djoser gives you ready-made login, registration, and password reset features!

1. Install it:
```bash
poetry add djoser
```

2. Set it up:
```python
# settings.py
INSTALLED_APPS = [
    # ... other apps ...
    'rest_framework',
    'djoser',  # Make sure djoser comes after rest_framework
]

# urls.py
urlpatterns = [
    # ... other urls ...
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.authtoken')),
]
```

Now you get these useful URLs for free:
- `/auth/users/` - Create a new user
- `/auth/users/me/` - Get your user info
- `/auth/token/login/` - Login and get token
- `/auth/token/logout/` - Logout


# JWT (JSON Web Tokens)

### What is JWT and why use it? 🤔

Remember how we used tokens with Djoser? JWT is like a smarter version of those tokens! Here's why JWT is cool:

1. It's self-contained - all user info is in the token
2. It's more secure - it's digitally signed
3. It's stateless - no need to store tokens in database
4. It has built-in expiration

Think of JWT like a special VIP pass that:
- Contains your info (like your ID and permissions)
- Can't be faked (because it's signed with a secret key)
- Expires after some time (so if someone steals it, they can't use it forever)

### Setting Up JWT 🛠️

First, let's install the JWT package:
```bash
poetry add djangorestframework-simplejwt
```

Now let's configure it:

```python
# settings.py

INSTALLED_APPS = [
    # ... other apps ...
    'rest_framework',
    'rest_framework_simplejwt',  # Add this line
]

# Replace the default token authentication with JWT
REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'rest_framework_simplejwt.authentication.JWTAuthentication',
    ],
}

# JWT settings
from datetime import timedelta

# JWT will create two tokens:
# 1. Access token - for accessing protected routes (short-lived)
# 2. Refresh token - for getting new access tokens (long-lived)

SIMPLE_JWT = {
    # Access token will expire after 2 hours
    'ACCESS_TOKEN_LIFETIME': timedelta(hours=2),
    
    # Refresh token will expire after 30 days
    'REFRESH_TOKEN_LIFETIME': timedelta(days=30),
    
    # If True, a new refresh token will be created when users refresh their access token
    'ROTATE_REFRESH_TOKENS': True,
    
    # The word that goes before the token in Authorization header
    # Authorization: Bearer <your-token>
    'AUTH_HEADER_TYPES': ('Bearer',),
}
```

### Setting Up JWT URLs 🌐

```python
# urls.py
from rest_framework_simplejwt.views import (
    TokenObtainPairView,    # For logging in
    TokenRefreshView,       # For refreshing access token
    TokenVerifyView         # For verifying tokens
)

urlpatterns = [
    # ... your other urls ...
    
    # Login endpoint - returns both access and refresh tokens
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    
    # Use refresh token to get new access token
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    
    # Verify if a token is valid
    path('api/token/verify/', TokenVerifyView.as_view(), name='token_verify'),
]
```

### How to Use JWT in Your Project 🎯

1. **Logging In:**
When a user logs in, they'll get two tokens:
```json
{
    "access": "eyJ0eXAiOiJKV1QiLCJhbGc...",  // Use this for API requests
    "refresh": "eyJ0eXAiOiJKV1QiLcGciOiJ..."  // Save this to get new access tokens
}
```

2. **Making Authenticated Requests:**
Add the access token to your request headers:
```python
headers = {
    'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGc...'
}
```

3. **When Access Token Expires:**
Use your refresh token to get a new access token:
```python
# Send POST request to /api/token/refresh/ with:
{
    "refresh": "your-refresh-token"
}

# You'll get back:
{
    "access": "new-access-token"
}
```

### Adding Custom Data to Tokens 🎨

Want to add extra user info to your tokens? Here's how:

```python
# serializers.py
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        # Get the token with the default user ID
        token = super().get_token(user)
        
        # Add custom data
        token['username'] = user.username
        token['email'] = user.email
        token['is_staff'] = user.is_staff
        
        return token

# views.py
class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

# urls.py
urlpatterns = [
    # Use your custom view instead of the default one
    path('api/token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    # ... other urls ...
]
```

### Security Tips 🔒

1. Keep your access token lifetime short (few hours)
2. Keep your refresh token lifetime reasonable (few weeks)
3. Never store tokens in localStorage (use httpOnly cookies)
<!-- Storing tokens in localStorage exposes them to JavaScript, which means that if your site ever suffers from a cross-site scripting (XSS) attack, an attacker could easily access your tokens. Using httpOnly cookies mitigates this risk because such cookies are inaccessible to JavaScript, thereby providing an extra layer of security. -->
1. Always use HTTPS in production
2. Rotate refresh tokens (already enabled in our settings)

### Common JWT Flow 🔄

1. User logs in → Gets access & refresh tokens
2. User makes requests with access token
3. When access token expires → Use refresh token to get new access token
4. If refresh token expires → User must log in again

Think of it like a hotel:
- Access token = Room key (expires daily)
- Refresh token = Booking confirmation (expires when your stay ends)
- When room key expires, show booking confirmation to get new key
- When booking ends, make new reservation (log in again)








# Filtering  &  Ordering  &  Pagination  &  Caching

### Filtering
[This is the link that we can visit filtering](https://www.django-rest-framework.org/api-guide/filtering/)

By filtering we can filter the data that we want to get. 
For example, we can filter the books by author or by title.


So, if the user asks books by author, we can do it like this:
ex: `http://domain-name.com/api/books/?author=John`

```python
# views.py
from rest_framework import generics
from .models import Book
from .serializers import BookSerializer

class BookList(generics.ListAPIView):
    queryset = Book.objects.all()
    serializer_class = BookSerializer

    def get_queryset(self):
        queryset = super().get_queryset()
        author = self.request.query_params.get('author')
        if author:
            queryset = queryset.filter(author=author)
        return queryset

# ===========================================
# -- OR -- in our case
# ===========================================
class BookList(APIView): 
    def get(self, request):
        author = request.query_params.get('author')
        if author:
            books = Book.objects.filter(author=author)
        else:
            books = Book.objects.all()
        serializer = BookSerializer(books, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

# urls.py
urlpatterns = [
    ...
    path('api/books/', BookList.as_view(), name='book-list'),
    ...
]
```

### Ordering
[This is the link that we can visit for ordering](https://www.django-rest-framework.org/api-guide/filtering/#orderingfilter)

By ordering we can order the data that we want to get.
For example, we can order the books by title or by author.

```python
# views.py
from rest_framework import generics
from .models import Book
from .serializers import BookSerializer

class BookList(generics.ListAPIView):
    queryset = Book.objects.all()
    serializer_class = BookSerializer

    def get_queryset(self):
        queryset = super().get_queryset()
        ordering = self.request.query_params.get('ordering')
        if ordering:
            queryset = queryset.order_by(ordering)
        return queryset

# ===========================================
# -- OR -- in our case
# ===========================================
class BookList(APIView): 
    def get(self, request):
        ordering = request.query_params.get('ordering')
        if ordering:
            books = Book.objects.order_by(ordering)
        else:
            books = Book.objects.all()
        serializer = BookSerializer(books, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
```

### Pagination
[This is the link that we can visit for pagination](https://www.django-rest-framework.org/api-guide/pagination/)
By pagination we can limit the number of objects that we want to get.
For example, we can limit the number of books that we want to get.

```python
# settings.py
REST_FRAMEWORK = {
    ...
    'DEFAULT_PAGINATION_CLASS': 'rest_framework.pagination.PageNumberPagination',
    'PAGE_SIZE': 1,
    ...
}


# views.py
from rest_framework import generics
class BookList(generics.ListAPIView):
    queryset = Books.objects.all()
    serializer_class = BookSerializer

# ===========================================
# -- OR -- in our case
# ===========================================
from rest_framework.pagination import PageNumberPagination
class BookList(APIView): 
    def get(self, request):
        books = Book.objects.all()
        paginator = PageNumberPagination()
        result_page = paginator.paginate_queryset(books, request)
        serializer = BookSerializer(result_page, many=True)
        return paginator.get_paginated_response(serializer.data)
```


### Caching 

```python
SECOND = 1
MINUTE = SECOND * 60
HOUR = MINUTE * 60

SHORT_WAIT = SECOND * 3
LONG_WAIT = MINUTE * 10

SHORT_CACHING_TIME = MINUTE * 30
LONG_CACHING_TIME = HOUR * 2
```

By caching we can improve the performance of our API.
When we visit first time the api it loads normally but
when we visit it again it loads faster because it is cached.

```python
@method_decorator(cache_page(LONG_CACHING_TIME)) 
# cache_page => This means that we cache the page for a certain amount of time
# By default, it caches the page for 15 minutes

@method_decorator(vary_on_headers("Authorization",))
# vary_on_headers => We need this because we want to cache the page for each user separately
# By default, it caches the page for all users together
```

[This is the link that we can visit for filtering](https://www.django-rest-framework.org/api-guide/caching/)





