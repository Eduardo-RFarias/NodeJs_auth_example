from rest_framework import viewsets

from .models import Todo
from .serializer import TodoSerializer
from .filters import TodoFilter

# Create your views here.


class TodoViewset(viewsets.ModelViewSet):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer
    filterset_class = TodoFilter
