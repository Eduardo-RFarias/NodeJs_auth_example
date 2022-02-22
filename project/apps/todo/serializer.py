from rest_framework import serializers
from .models import Todo


class TodoSerializer(serializers.ModelSerializer):
    url = serializers.HyperlinkedIdentityField("todo-detail")
    owner = serializers.ReadOnlyField(source="owner.username")

    class Meta:
        model = Todo
        fields = [
            "url",
            "id",
            "title",
            "content",
            "owner",
            "created_at",
        ]

    def create(self, validated_data):
        owner = self.context["request"].user

        return Todo.objects.create(
            **validated_data,
            owner=owner,
        )
