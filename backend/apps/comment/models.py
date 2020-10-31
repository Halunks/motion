from django.contrib.auth import get_user_model
from django.db import models

from apps.post.models import Post

User = get_user_model()


class Comment(models.Model):
    text_content = models.CharField(max_length=300)
    created = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(
        to=User,
        related_name='fk_comment_user',
        on_delete=models.CASCADE
    )
    post = models.ForeignKey(
        to=Post,
        related_name='fk_comment_post',
        on_delete=models.CASCADE
    )

    def __str__(self):
        return f"Comment by {self.author} on Post: {self.post}"
