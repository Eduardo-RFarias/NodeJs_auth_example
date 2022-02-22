from django.db import models
from django.contrib.auth import get_user_model
from model_utils.models import TimeStampedModel
from model_utils.fields import UUIDField


class Todo(TimeStampedModel):
    id = UUIDField()
    title = models.CharField(max_length=120)
    content = models.TextField(null=True)
    owner = models.ForeignKey(
        get_user_model(),
        on_delete=models.CASCADE,
    )

    def __str__(self) -> str:
        return f"Todo(title={self.title}, owner={self.owner.pk})"
