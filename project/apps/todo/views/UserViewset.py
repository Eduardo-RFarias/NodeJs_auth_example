from rest_framework import viewsets
from django.contrib.auth import get_user_model

from ..serializers import UserSerializer
from ..filters import UserFilter


class UserViewset(viewsets.ReadOnlyModelViewSet):
    queryset = get_user_model().objects.all()
    serializer_class = UserSerializer
    filterset_class = UserFilter
