from rest_framework import serializers

from apps.comment.models import Comment
from apps.users.serializers import UserSerializer
from apps.post.serializers import PostSerializer


class CommentSerializer(serializers.ModelSerializer):
    author = UserSerializer(read_only=True)
    post = PostSerializer(read_only=True)

    class Meta:
        model = Comment
        fields = ['id', 'text_content', 'author', 'post']
