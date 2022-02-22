from rest_framework.routers import DefaultRouter

from .views import TodoViewset, UserViewset

router = DefaultRouter()

router.register(r"todo", TodoViewset)
router.register(r"user", UserViewset)
