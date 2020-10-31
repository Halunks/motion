import React, { useEffect, useState } from 'react'
import { NavigationContainer, LeftContainerHeader, RightContainerHeader, MotionIcon, MotionItem, MotionLink, PostsIcon, PostsItem, PostsLink, FriendsIcon, FriendsItem, FriendsLink, BellItem, BellLink, BellIcon, ProfileItem, ProfileLink, ProfileIcon, MenuItem } from '../../style/Header'
import MotionLogo from '../../assets/svgs/logo.svg'
import PostsLogo from '../../assets/images/posts_logo.png'
import IconFriends from '../../assets/svgs/icon-friends.svg'
import Bell from '../../assets/svgs/notification_bell.svg'
import { useHistory, useLocation } from 'react-router-dom'
import { Notification } from './Notification/index'
import { MenuDropdown } from './MenuDropdown/index'
import { useSelector } from 'react-redux'
import { DefaultAvatarHeader } from '../../style/Posts/Posts';
import Jennifer from '../../assets/images/users/jennifer.png'


export const Header = () => {
    const user = useSelector(state => state.userReducer.user)
    const [inHover] = useState(false);
    const [currentState, setCurrentState] = useState(true)
    const location = useLocation();
    const history = useHistory();

    useEffect(() => {
        currentState && location.pathname === "/home/friends" ? setCurrentState(!currentState) : setCurrentState(currentState);
    }, [location, currentState]);

    function FriendsOnClickHandler() {
        if (location.pathname === "/home/friends") {
            setCurrentState(currentState)
        } else {
            setCurrentState(!currentState)
            history.push("/home/friends");
        }       
    }

    function PostsOnClickHandler() {
        if (location.pathname === "/home/feed") {
            setCurrentState(currentState)
        } else {
            setCurrentState(!currentState)
            history.push("/home/feed");
        }   
    }

    return (<>
        <NavigationContainer>
            <LeftContainerHeader>
                <MotionItem onClick={PostsOnClickHandler} ><MotionIcon src={MotionLogo}/><MotionLink href="#">Motion</MotionLink></MotionItem>
                <PostsItem onClick={PostsOnClickHandler} id={`${currentState}`} ><PostsIcon id={`${currentState}`} src={PostsLogo}/><PostsLink href="#" >Posts</PostsLink></PostsItem>
                <FriendsItem onClick={FriendsOnClickHandler} id={`${!currentState}`}><FriendsIcon id={`${!currentState}`} src={IconFriends}/><FriendsLink href="#" >Find Friends</FriendsLink></FriendsItem>
            </LeftContainerHeader>
            <RightContainerHeader>   
                <BellItem><BellLink href="#"><BellIcon src={Bell}/><Notification id="note" /></BellLink></BellItem>
                <ProfileItem>
                    {user.avatar ? (
                        <DefaultAvatarHeader></DefaultAvatarHeader>
                        ) : (
                        <ProfileIcon src={Jennifer}/>
                    )}
                </ProfileItem>
                <MenuItem ><MenuDropdown /></MenuItem> 
                {inHover && <MenuDropdown />}
            </RightContainerHeader> 
        </NavigationContainer>
    </>)
}




