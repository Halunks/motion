from django.contrib.auth import get_user_model
from django.db.models import Q
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView, ListAPIView, GenericAPIView
from rest_framework.response import Response

from apps.post.models import Post
from apps.post.serializers import PostSerializer, PostMinimalSerializer

User = get_user_model()


class PostListCreateAPIView(ListCreateAPIView):
    """
    GET:
    Returns all the posts if no search parameters is given
    If a search parameter is given, it will return all posts that contain it in their text_content or user information

    POST:
    Creates a new post instance and returns it
    """

    queryset = Post.objects.all()

    # TODO How to determine "is_from_logged_in_user"? Approach: BigC compare session users to social post users
    def get_serializer_class(self):
        if self.request.method == 'GET':
            return PostSerializer
        return PostMinimalSerializer

    def get(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        search_string = self.request.query_params.get('search')
        if search_string:
            queryset = queryset.filter(
                Q(text_content__icontains=search_string)
                | Q(author__username__icontains=search_string)
                | Q(author__first_name__icontains=search_string)
                | Q(author__last_name__icontains=search_string)
            )
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)


class PostRetrieveUpdateDestroyAPIView(RetrieveUpdateDestroyAPIView):
    """
    GET:
    Returns a post based on the given id

    PUT:
    Updates and returns a post based on the given id

    PATCH:
    Partially updates and returns a post based on the given id

    DELETE:
    Deletes a post based on the given id and return no content status 204
    """

    queryset = Post.objects.all()
    serializer_class = PostSerializer
    lookup_url_kwarg = 'post_id'
    # TODO adjust permission for UPDATE and DELETE to IsOwner, for GET default IsAuthenticated is sufficient
    # permission_classes = [IsOwner]


class PostListAPIView(ListAPIView):
    """
    GET:
    Returns all posts of given users id
    """

    def get_queryset(self):
        # TODO is there a more efficient, cleaner way?
        requested_user = User.objects.get(id=self.kwargs["user_id"])
        return Post.objects.filter(author=requested_user)

    serializer_class = PostSerializer
    lookup_url_kwarg = 'user_id'


class PostFollowingListAPIView(ListAPIView):
    """
    GET:
    Returns all posts of the users which the logged in user is following
    """

    queryset = Post.objects.all()
    serializer_class = PostMinimalSerializer

    # TODO update and test once follow-attribute is done
    def get(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        # queryset = queryset.filter(Q(user__logged_in_user_is_following=True))
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)


class PostFriendsListAPIView(ListAPIView):
    """
    GET:
    Returns all posts of the users which the logged in user is friends with
    """

    queryset = Post.objects.all()
    serializer_class = PostMinimalSerializer

    # TODO update and test once friend-app is done
    def get(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        # queryset = queryset.filter(Q(user__logged_in_user_is_friends=True))
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)


class PostLikedListAPIView(ListAPIView):
    """
    GET:
    Returns all liked posts of the logged in user
    """

    def get_queryset(self):
        user = self.request.user
        return Post.objects.filter(liked_by=user)

    serializer_class = PostSerializer


class ToggleLikePostAPIView(GenericAPIView):
    """
    POST:
    Toggle like post by logged in users
    """

    queryset = Post
    serializer_class = PostSerializer
    lookup_url_kwarg = 'post_id'

    def post(self, request, *args, **kwargs):
        post = self.get_object()
        user = self.request.user
        logged_in_user_liked = user in post.liked_by.all()

        if logged_in_user_liked:
            post.liked_by.remove(user)
            setattr(post, 'logged_in_user_liked', False)
        else:
            post.liked_by.add(user)
            setattr(post, 'logged_in_user_liked', True)
        return Response(self.get_serializer(post).data)
