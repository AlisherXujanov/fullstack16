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




