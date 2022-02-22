from rest_framework.test import APITestCase
from django.contrib.auth import get_user_model

from ..models import Todo

# Create your tests here.


class TodoTest(APITestCase):
    def test_model(self):
        title = "test 1"
        content = "test content 1"

        owner = get_user_model().objects.create(
            username="edu.farias",
            password="123456",
        )

        todo = Todo.objects.create(
            title=title,
            content=content,
            owner=owner,
        )

        self.assertIsNotNone(todo.pk)
        self.assertEqual(todo.title, title)
        self.assertEqual(todo.content, content)
        self.assertEqual(todo.owner, owner)
