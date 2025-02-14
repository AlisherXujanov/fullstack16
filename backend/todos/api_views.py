from rest_framework.views import APIView
from rest_framework import permissions, viewsets
from rest_framework.response import Response
from .models import Todos
from .serializers import TodoSerializer
from rest_framework import status
from rest_framework import viewsets

from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.contrib.auth import authenticate

from rest_framework.pagination import PageNumberPagination

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
        data = {'token': token.key}
        
        if user.groups.filter(name='admin').exists():
            data['msg'] = "Hello Admin"
        return Response(data)
    else:
        return Response({'error': 'Wrong username or password'}, status=400)


class TodosApiView(viewsets.ModelViewSet):
    # model = Todos
    queryset = Todos.objects.all()
    serializer_class = TodoSerializer
    permission_classes = [permissions.IsAuthenticated]
    lookup_field = 'pk'
    pagination_class = PageNumberPagination
    # in order to get the next page,
    # we just send a query parameter ?page=2


    def get_queryset(self):
        query = super().get_queryset()
        # title = self.request.query_params.get('title')
        # if title:
        #     ...
        if title := self.request.query_params.get('title'):
            query = query.filter(title__icontains=title)
            
        if description := self.request.query_params.get('description'):
            query = query.filter(description__icontains=description)

        if ordering := self.request.query_params.get('ordering'):
            if ordering == 'desc':
                query = query.order_by('-id')
            else:
                query = query.order_by('id')

        # if ... := self.request.query_params.get('...'):
        #     query = query.filter(...__icontains=...)
        return query
    

# class TodosApiView(APIView):
    
#     def get(self, request):
#         todos = Todos.objects.all()
#         serializer = TodoSerializer(todos, many=True)
#         return Response(serializer.data, status=status.HTTP_200_OK)
#         # 200 == success


#     def post(self, request): 
#         data = TodoSerializer(data=request.data)
#         if data.is_valid():
#             data.save()
#             return Response(data.data, status=status.HTTP_201_CREATED)




