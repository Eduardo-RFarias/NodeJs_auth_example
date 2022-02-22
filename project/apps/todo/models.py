from django.db import models
from django.contrib.auth import get_user_model

# Create your models here.


class Todo(models.Model):
    title = models.CharField(max_length=120)
    content = models.TextField(null=True)
    owner = models.ForeignKey(
        get_user_model(),
        on_delete=models.CASCADE,
    )
    created_at = models.DateTimeField(auto_now=True)

    def __str__(self) -> str:
        return f"Todo(title={self.title}, owner={self.owner.pk})"
