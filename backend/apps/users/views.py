from django.core.exceptions import ObjectDoesNotExist
from django.core.mail import EmailMessage, send_mail
from django.db.models import Q
from rest_framework.generics import ListAPIView, RetrieveAPIView, GenericAPIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from django.db import IntegrityError

from apps.users.models import User
from apps.users.serializers import UserSerializer
from apps.registration_profile.models import RegistrationProfile
from apps.registration_profile.models import code_generator


class UserRegistration(GenericAPIView):
    """
    POST:
    Sends a verification code to the given email address and creates an anonymous user
    """
    # TODO Alternative: use the serializer instead of overwriting the "post" method

    permission_classes = []
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def post(self, request, *args, **kwargs):
        email_address = request.data["email"]
        username = email_address.split("@")
        code = code_generator()

        try:
            new_user = User(email=email_address, username=username[0], is_active=False)
            new_user.save()
            registration_profile = RegistrationProfile(user=new_user, code=code)
            registration_profile.save()
        except IntegrityError:
            return Response(f"The email address '{email_address}' is already taken.")

        # TODO uncomment for production
        # send_mail(
        #     'Motion Registration Code',
        #     f"Here is your registration code {registration_profile.code}",
        #     'alexdevops42@gmail.com',
        #     [new_user.email],
        #     fail_silently=False,
        # )
        serializer = self.get_serializer(new_user)
        return Response(serializer.data)


class ValidateUpdateRegistration(GenericAPIView):
    """
    POST:
    If given a matching validation code with the provided email, update the user profile
    """
    permission_classes = []
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def post(self, request, *args, **kwargs):
        email = self.request.data["email"]
        code = self.request.data["code"]
        try:
            registration = RegistrationProfile.objects.get(user__email=email, code=code, code_used=False)
            registration.user.username = self.request.data["username"]
            registration.user.first_name = self.request.data["first_name"]
            registration.user.last_name = self.request.data["last_name"]
            registration.user.set_password(self.request.data["password"])
            registration.user.is_active = True
            registration.code_used = True
            registration.user.save()
            registration.save()
            return Response(self.get_serializer(registration.user).data)
        except ObjectDoesNotExist:
            return Response(data=f"The provided email {email} and code {code} do not match.", status=400)
        except IntegrityError:
            return Response(data="This username is already taken.", status=400)


class GetLoggedUser(ListAPIView):
    """
    GET:
    Returns the logged in user
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def get(self, request, *args, **kwargs):
        user = self.request.user
        serializer = self.get_serializer(user)
        return Response(serializer.data)


class UserListSearch(ListAPIView):
    """
    GET:
    Returns all the users if no search parameters is given
    If a search parameter is given, it will return all users that contain it in their user information
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def get(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        search_string = self.request.query_params.get('search')
        if search_string:
            queryset = queryset.filter(
                Q(location__icontains=search_string)
                | Q(username__icontains=search_string)
                | Q(first_name__icontains=search_string)
                | Q(last_name__icontains=search_string)
            )
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)


class GetSpecificUser(RetrieveAPIView):
    """
    GET : Get specific user profile
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer
    lookup_url_kwarg = 'user_id'


class FollowUser(GenericAPIView):
    """
    POST:
    Toggle like post by logged in users
    """
    queryset = User
    serializer_class = UserSerializer
    lookup_url_kwarg = 'user_id'

    def post(self, request, *args, **kwargs):
        target_user = self.get_object()
        logged_in_user = self.request.user
        if target_user in logged_in_user.followees.all():
            logged_in_user.followees.remove(target_user)
        else:
            logged_in_user.followees.add(target_user)
        return Response(self.get_serializer(logged_in_user).data)


class GetListOfAllFollowers(ListAPIView):
    """
    GET: list of all the followers
    """
    permission_classes = (IsAuthenticated,)
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def get(self, request, *args, **kwargs):
        user = self.request.user
        followed_by = user.followed_by.all()
        serializer = self.get_serializer(followed_by, many=True)
        return Response(serializer.data)


class GetListOfPeopleUserIsFollowing(ListAPIView):
    """
    GET: list of all the people the user is following
    """
    permission_classes = (IsAuthenticated,)
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def get(self, request, *args, **kwargs):
        user = self.request.user
        following = user.following.all()
        serializer = self.get_serializer(following, many=True)
        return Response(serializer.data)

    """
class SendFriendRequest(CreateAPIView):
    """
    # POST: Send friend request to another user
    """
    serializer_class = FriendRequestSerializer
    lookup_url_kwarg = "user_id"

    def post(self, request, *args, **kwargs):
        receiver_id = kwargs["user_id"]
        receiver = User.objects.get(id=receiver_id)
        if self.request.user.username != receiver.username:
            friend_request, created = FriendRequest.objects.get_or_create(sender=self.request.user, receiver=receiver)
            if created:
                email = EmailMessage(
                    subject="New friend request",
                    body=f"Hi {receiver.username}\n\n{self.request.user.username} sent you a friend request!",
                    from_email="students@propulsionacademy.com",
                    to=[f"{receiver.email}"],
                )
                email.send()
                return Response(f"You sent a friend request to {receiver.username}")
            else:
                return Response(f"You have already sent a friend request to {receiver.username}")
        return Response(f"You can't send a friend request to yourself, {self.request.user.username}")


class ShowPendingReceivedFriendRequests(ListAPIView):
    serializer_class = FriendRequestSerializer

    def get_queryset(self):
        received_requests = FriendRequest.objects.filter(status="pending", receiver_id=self.request.user.id)
        return received_requests


# GET: List all my pending friend requests
class ShowPendingSentFriendRequests(ListAPIView):
    serializer_class = FriendRequestSerializer

    def get_queryset(self):
        sent_requests = FriendRequest.objects.filter(status="pending", sender_id=self.request.user.id)
        return sent_requests


class AcceptFriendRequest(CreateAPIView):
    """

    """
    serializer_class = FriendRequestSerializer
    lookup_url_kwarg = "user_id"

    def create(self, request, *args, **kwargs):
        sender_id = kwargs["request_id"]
        try:
            sender = User.objects.get(id=sender_id)
        except User.DoesNotExist:
            return Response(f"There is no user with the ID {sender_id}")
        try:
            pending_request = FriendRequest.objects.get(receiver=self.request.user.id, sender=sender.id)
            FriendRequest.objects.get_or_create(sender=self.request.user, receiver=sender, status="friends")
            pending_request.status = "friends"
            pending_request.save()
            return Response(f"{self.request.user.username} and {sender.username} are now friends!")
        except FriendRequest.DoesNotExist:
            return Response(f"{sender.username} did not send you a friend request.")
    """