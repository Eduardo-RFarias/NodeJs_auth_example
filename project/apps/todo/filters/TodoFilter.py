from django_filters import rest_framework as filters

from ..models import Todo


class TodoFilter(filters.FilterSet):
    title = filters.CharFilter(
        lookup_expr="icontains",
    )
    content = filters.CharFilter(
        lookup_expr="icontains",
    )
    owner = filters.CharFilter(
        field_name="owner__username",
        lookup_expr="icontains",
    )

    class Meta:
        model = Todo
        fields = [
            "title",
            "content",
            "owner",
        ]
