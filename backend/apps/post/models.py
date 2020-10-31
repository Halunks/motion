from django.contrib.auth import get_user_model
from django.db import models

User = get_user_model()


class Post(models.Model):
    author = models.ForeignKey(
        to=User,
        related_name='fk_post_to_user',
        on_delete=models.CASCADE,
        null=True,
        blank=True
    )
    liked_by = models.ManyToManyField(
        to=User,
        related_name='liked_posts',
        blank=True,
    )
    shared = models.ForeignKey(
        'self',
        related_name='shared_posts',
        on_delete=models.CASCADE,
        null=True,
        blank=True,
    )
    text_content = models.CharField(max_length=600)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.author}: {self.text_content[0:100]}"
