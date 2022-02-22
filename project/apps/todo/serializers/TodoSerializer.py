from rest_framework import serializers
from ..models import Todo


class TodoSerializer(serializers.ModelSerializer):
    url = serializers.HyperlinkedIdentityField("todo-detail")
    owner = serializers.HyperlinkedRelatedField(
        "user-detail",
        read_only=True,
    )
    created = serializers.DateTimeField(
        format=r"%d/%m/%y %H:%M:%S",
        read_only=True,
    )
    modified = serializers.DateTimeField(
        format=r"%d/%m/%y %H:%M:%S",
        read_only=True,
    )

    class Meta:
        model = Todo
        fields = [
            "url",
            "id",
            "title",
            "content",
            "owner",
            "created",
            "modified",
        ]

    def create(self, validated_data):
        owner = self.context["request"].user

        return Todo.objects.create(
            **validated_data,
            owner=owner,
        )
