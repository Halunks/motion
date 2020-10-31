import styled from 'styled-components'

export const ProfileBannerContainer = styled.main`
    display: flex;
    justify-content: center;
    align-content: center;
    width: 100%;
    height: 100%;

    img {
        position: absolute;
        z-index: 1;
        width: 100%;
        height: auto;
    }
`;

export const ProfilePanelContainer = styled.section`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
`;