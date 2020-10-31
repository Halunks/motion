import React, { useState } from 'react'
import { FriendsButton } from '../../../style/Buttons'
import { useDispatch } from 'react-redux';
import { postAction } from '../../../store/actions/postAction'
import { UserContainer, DefaultAvatar } from '../../../style/FindFriends'
import { SET_FOLLOW } from '../../../helpers/constants'



export const User = ({ user }) => { 
    const dispatch = useDispatch(); 
    const [followState, setFollowState] = useState(user.logged_in_user_is_following)
    const [ID] = useState(user.id)

    const followHandler = () => {
        dispatch(postAction(`/social/toggle-follow/${ID}/`, 'POST', SET_FOLLOW));
        setFollowState(!followState)
    }

    return (<>
        <UserContainer>
            {user.avatar ? (
                <img src={user.avatar} alt="avatar"/>
            ) : (
                <DefaultAvatar><p>{user.first_name[0]}</p></DefaultAvatar>
            )}
            <div id="TitleContainer">
                <h3>{user.first_name} {user.last_name}</h3>
                <p>{user.location}</p>
            </div>
            <div id="SocialContainer">
                <FriendsButton onClick={() => followHandler()} id={`${followState}`}>{followState ? "Following" : "Follow"}</FriendsButton>
                <FriendsButton>Add Friend</FriendsButton>
            </div>
            <div id="AboutMe">
                <p>{user.about_me}</p>
            </div>
            <div id="Interests">
                {user.things_user_likes.map(interest => <p>{interest.interest_name}</p>)}
            </div>
        </UserContainer>
    </>)
}