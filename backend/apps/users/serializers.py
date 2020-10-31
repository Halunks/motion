import sys

from django.contrib.auth import get_user_model
from rest_framework import serializers

from apps.users.models import User
from apps.post.models import Post
from apps.interest.serializers import UserInterestSerializer

from apps.friend.serializers import FriendSerializer

User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    things_user_likes = UserInterestSerializer(many=True)
    amount_of_posts = serializers.SerializerMethodField()
    amount_of_likes = serializers.SerializerMethodField()
    amount_of_followers = serializers.SerializerMethodField()
    amount_of_following = serializers.SerializerMethodField()
    amount_of_friends = serializers.SerializerMethodField()
    logged_in_user_is_following = serializers.SerializerMethodField()


    def get_amount_of_posts(self, user):
        return Post.objects.filter(author=user).count()

    # TODO WIP
    def get_amount_of_likes(self, user):
        return user.liked_posts.count()

    def get_amount_of_friends(self, user):
        return len(user.friends)

    def get_amount_of_followers(self, user):
        return User.objects.filter(followees=user).count()

    def get_amount_of_following(self, user):
        return user.followees.count()

    def get_logged_in_user_is_following(self, user):
        return User.objects.filter(followees=user) == user

    class Meta:
        model = User
        fields = ['id', 'email', 'first_name', 'last_name', 'username', 'is_active', 'job', 'avatar', 'banner',
                  'location', 'about_me', 'things_user_likes', 'logged_in_user_is_following', 'amount_of_posts', 'amount_of_likes', 'amount_of_likes',
                  'amount_of_friends', 'amount_of_followers', 'amount_of_following', 'followees']
