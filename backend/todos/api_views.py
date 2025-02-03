from rest_framework.views import APIView
from rest_framework import permissions, viewsets
from rest_framework.response import Response
from .models import Todos
from .serializers import TodoSerializer
from rest_framework import status


class TodosApiView(APIView):
    
    def get(self, request):
        todos = Todos.objects.all()
        serializer = TodoSerializer(todos, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
        # 200 == success


    def post(self, request): 
        data = TodoSerializer(data=request.data)
        if data.is_valid():
            data.save()
            return Response(data.data, status=status.HTTP_201_CREATED)




