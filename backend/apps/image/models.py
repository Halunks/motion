from django.db import models

from apps.post.models import Post


def user_directory_path(instance, filename):
    return f'user_{instance.post.author.id}/{filename}'


class Image(models.Model):
    image = models.ImageField(
        upload_to=user_directory_path,
        blank=True,
        null=True)
    post = models.ForeignKey(
        to=Post,
        related_name='fk_image_post',
        on_delete=models.CASCADE
    )

    def __str__(self):
        return f'{self.image}'
