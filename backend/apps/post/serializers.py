from django.contrib.auth import get_user_model
from rest_framework import serializers

from apps.post.models import Post
from apps.users.serializers import UserSerializer
from apps.image.serializers import ImageSerializer

User = get_user_model()


class PostMinimalSerializer(serializers.ModelSerializer):
    author = UserSerializer(read_only=True)
    fk_image_post = ImageSerializer(many=True, required=False)
    likes_counter = serializers.SerializerMethodField()

    def get_likes_counter(self, post):
        return post.liked_by.all().count()

    class Meta:
        model = Post
        fields = '__all__'


class PostSerializer(serializers.ModelSerializer):
    author = UserSerializer(read_only=True)
    shared = PostMinimalSerializer()
    fk_image_post = ImageSerializer(many=True, required=False)
    likes_counter = serializers.SerializerMethodField()
    is_from_logged_in_user = serializers.SerializerMethodField()
    logged_in_user_liked = serializers.SerializerMethodField()

    def get_likes_counter(self, post):
        return post.liked_by.all().count()

    def get_is_from_logged_in_user(self, post):
        return post.author == User

    def get_logged_in_user_liked(self, post):
        return User.objects.filter(liked_posts=post) == post


    class Meta:
        model = Post
        fields = '__all__'


