import React from 'react';
import { RightProfile } from './UserFame';
import { ReactComponent as Jennifer } from '../../../assets/svgs/Jennifer.svg'
import { LeftProfile, WhiteFlexBox } from '../../../style/Profile/UserProfile';


export const UserProfileContainer = () => {
    return (
        <WhiteFlexBox>
            <LeftProfile>
                <Jennifer/>
                <h3>Jennifer Smith</h3>
                <p>Zürich, Switzerland</p>
                <button>Edit Profile</button>
            </LeftProfile>
            <RightProfile/>
        </WhiteFlexBox>
    )
}