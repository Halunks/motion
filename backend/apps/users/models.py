from django.conf import settings
from django.contrib.auth.models import AbstractUser
from django.db import models

from apps.friend.models import Friend


def user_directory_path(instance, filename):
    # file will be uploaded to MEDIA_ROOT/username/<filename>
    return f'{instance.username}/{filename}'


class User(AbstractUser):
    email = models.EmailField(
        unique=True
    )
    username = models.CharField(
        max_length=60,
        unique=True
    )
    password = models.CharField(
        max_length=120
    )
    first_name = models.CharField(
        max_length=60
    )
    last_name = models.CharField(
        max_length=60
    )
    phone_num = models.IntegerField(
        null=True,
        blank=True
    )
    job = models.CharField(
        max_length=80,
        null=True,
        blank=True
    )
    avatar = models.ImageField(
        upload_to=user_directory_path,
        blank=True,
        null=True
    )
    banner = models.ImageField(
        upload_to=user_directory_path,
        blank=True,
        null=True
    )
    location = models.CharField(
        max_length=80,
        blank=True,
        default=""
    )
    about_me = models.CharField(
        max_length=150,
        blank=True
    )
    followees = models.ManyToManyField(
        to=settings.AUTH_USER_MODEL,
        related_name='followers',
        blank=True
    )
    logged_in_user_is_following = models.BooleanField(
        default=False
    )

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    def __str__(self):
        return self.username

    @property
    def friends(self):
        friend_list = []
        received_requests = Friend.objects.filter(
            receiver=self,
            status='ACCEPTED'
        )
        for friend in received_requests:
            friend_list.append(friend.sender)
        sent_requests = Friend.objects.filter(
            sender=self,
            status='ACCEPTED'
        )
        for friend in sent_requests:
            friend_list.append(friend.receiver)
        return friend_list


