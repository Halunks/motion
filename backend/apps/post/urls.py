from django.urls import path

from apps.post.views import PostListCreateAPIView, PostRetrieveUpdateDestroyAPIView, PostListAPIView, \
    ToggleLikePostAPIView, PostLikedListAPIView, PostFriendsListAPIView, PostFollowingListAPIView

urlpatterns = [
    path('', PostListCreateAPIView.as_view()),
    path('?search=<str:search_string>/', PostListAPIView.as_view()),
    path('<int:post_id>/', PostRetrieveUpdateDestroyAPIView.as_view()),
    path('users/<int:user_id>/', PostListAPIView.as_view()),
    path('following/', PostFollowingListAPIView.as_view()),
    path('friends/', PostFriendsListAPIView.as_view()),
    path('likes/', PostLikedListAPIView.as_view()),
    path('toggle-like/<int:post_id>/', ToggleLikePostAPIView.as_view()),
]
