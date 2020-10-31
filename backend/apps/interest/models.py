from django.contrib.auth import get_user_model
from django.db import models

User = get_user_model()


class Interest(models.Model):
    interest_name = models.CharField(
        max_length=50,
    )
    author = models.ForeignKey(
        to=User,
        related_name='things_user_likes',
        on_delete=models.CASCADE,
        blank=True,
    )

    def __str__(self):
        return f"{self.interest_name}"
