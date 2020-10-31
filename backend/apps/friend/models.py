from django.conf import settings
from django.db import models


class Friend(models.Model):
    STATUS_CHOICES = [
        ('PENDING', 'pending'),
        ('ACCEPTED', 'accepted'),
        ('REJECTED', 'rejected')
    ]

    status = models.CharField(
        max_length=8,
        choices=STATUS_CHOICES,
        default='PENDING'
    )
    sender = models.ForeignKey(
        to=settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="send_request_user"
    )
    receiver = models.ForeignKey(
        to=settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="receive_request_user"
    )

    def __str__(self):
        return f"Request by {self.sender} to {self.receiver} is {self.status}"

    class Meta:
        unique_together = ['sender', 'receiver']
