from django_filters import rest_framework as filters
from django.contrib.auth import get_user_model


class UserFilter(filters.FilterSet):
    username = filters.CharFilter(
        lookup_expr="icontains",
    )
    first_name = filters.CharFilter(
        lookup_expr="icontains",
    )
    last_name = filters.CharFilter(
        lookup_expr="icontains",
    )
    email = filters.CharFilter(
        lookup_expr="exact",
    )
    is_staff = filters.BooleanFilter()
    is_superuser = filters.BooleanFilter()
    is_active = filters.BooleanFilter()
    date_joined = filters.DateFilter(lookup_expr="lte")
    last_login = filters.DateFilter(lookup_expr="lte")

    class Meta:
        model = get_user_model()
        fields = [
            "username",
            "first_name",
            "last_name",
            "email",
            "is_staff",
            "is_superuser",
            "is_active",
            "date_joined",
            "last_login",
        ]
