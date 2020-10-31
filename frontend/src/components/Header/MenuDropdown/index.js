import React from 'react'
import iconLogout from '../../../assets/svgs/logout.svg'
import iconProfile from '../../../assets/svgs/profile.svg'
import { DropdownContent, DropdownContainer, DropProfile, DropLogout } from '../../../style/MenuDropdown';
import Menu from '../../../assets/svgs/menu.svg'
import { useHistory } from 'react-router-dom';


export const MenuDropdown = () => {
    const history = useHistory();

    const logoutHandler = () => {
        localStorage.clear();
        window.location.reload()
    }

    const profileHandler = () => {
        history.push("/home/users")
    }

    return (
        <DropdownContainer id="dropdown" >
            <img src={Menu} alt="menu button"/>
            <DropdownContent id="dropdown-content">
                <DropProfile onClick={profileHandler}>
                    <img src={iconProfile} alt="profile icon"/>
                    <p>Profile</p>
                </DropProfile>
                <DropLogout onClick={logoutHandler}>
                    <img src={iconLogout} alt="logout icon"/>
                    <span><p>Logout</p></span>
                </DropLogout>
            </DropdownContent>
        </DropdownContainer>
    )
}
