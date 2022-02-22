from rest_framework import serializers
from django.contrib.auth import get_user_model


class UserSerializer(serializers.ModelSerializer):
    url = serializers.HyperlinkedIdentityField("user-detail")
    todos = serializers.HyperlinkedRelatedField(
        many=True,
        read_only=True,
        view_name="todo-detail",
        source="todo_set",
    )
    date_joined = serializers.DateTimeField(
        format=r"%d/%m/%y %H:%M:%S",
        read_only=True,
    )
    last_login = serializers.DateTimeField(
        format=r"%d/%m/%y %H:%M:%S",
        read_only=True,
    )

    class Meta:
        model = get_user_model()
        fields = [
            "url",
            "id",
            "username",
            "first_name",
            "last_name",
            "email",
            "is_staff",
            "is_superuser",
            "is_active",
            "date_joined",
            "last_login",
            "todos",
        ]
