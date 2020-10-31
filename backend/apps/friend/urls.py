from django.urls import path

from apps.friend.views import PostFriendRequest, GetPatchDeleteFriendRequest

urlpatterns = [
    path('request/<int:user_id>/', PostFriendRequest.as_view()),
    path('requests/<int:friend_request_id>', GetPatchDeleteFriendRequest.as_view()),
]
