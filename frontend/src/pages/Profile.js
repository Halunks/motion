import React, {useEffect, useState} from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Loading } from "../components/Loading";
import { UserProfile } from "../components/UserProfile";
import { ProfileBannerContainer, ProfilePanelContainer} from "../style/Profile/Profile";
import Background from "../assets/svgs/user_background.svg";


export const Profile = () => {
    const history = useHistory();
    const location = useLocation();
    const [currentPath, setCurrentPath] = useState(location.pathname);
    const [isLoading] = useState(false)

    useEffect(() => {
        setCurrentPath(location.pathname);
    },[location]);

    const renderSwitch = (currentPath) => {
        switch(true) {
            case currentPath.includes('/home/users/me'):
                return <UserProfile user="user"/>;
            case currentPath.includes('/home/users/update'):
                // return <UpdateProfile/>;
                break;
            // TODO implement search param functionality here
            case currentPath.includes('/home/users'):
                return <UserProfile path={currentPath}/>;
            default:
                history.push('/home/feed')
        }
    }

    return (
        <>
            {isLoading ? (
                <Loading />
                ) : (
                <ProfileBannerContainer>
                    <img src={Background} alt="background"/>
                    <ProfilePanelContainer>
                        {renderSwitch(currentPath)}
                    </ProfilePanelContainer>
                </ProfileBannerContainer>
            )}
        </>
    )
}