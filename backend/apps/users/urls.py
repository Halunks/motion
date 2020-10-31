from django.urls import path

from apps.users.views import FollowUser, GetListOfAllFollowers, GetListOfPeopleUserIsFollowing, UserListSearch, \
    GetSpecificUser, GetLoggedUser, UserRegistration, ValidateUpdateRegistration


urlpatterns = [
    path('', UserListSearch.as_view()),
    path('registration/', UserRegistration.as_view()),
    path('registration/validation/', ValidateUpdateRegistration.as_view()),
    path('me/', GetLoggedUser.as_view()),
    path('toggle-follow/<int:user_id>/', FollowUser.as_view()),
    path('followers/', GetListOfAllFollowers.as_view()),
    path('following/', GetListOfPeopleUserIsFollowing.as_view()),
    path('?search=<str:search_string>/', UserListSearch.as_view()),
    path('<int:user_id>/', GetSpecificUser.as_view()),
]
