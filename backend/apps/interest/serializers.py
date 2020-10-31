from rest_framework import serializers

from apps.interest.models import Interest


class UserInterestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Interest
        fields = '__all__'
