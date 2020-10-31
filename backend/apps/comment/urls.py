from django.urls import path

from apps.comment.views import ListCreateComment

urlpatterns = [
    path('<int:post_id>/', ListCreateComment.as_view())
]