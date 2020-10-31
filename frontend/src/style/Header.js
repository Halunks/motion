import styled from 'styled-components'

export const NavigationContainer = styled.nav`
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2), 0px 10px 20px rgba(0, 0, 0, 0.05);
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const LeftContainerHeader = styled.div`
    display: flex;
    align-items: center;
    height: 100;      
    justify-content: space-between;
    width: 560px;
`;

export const RightContainerHeader = styled.div`
    justify-content: flex-end;
    display: flex;
    align-items: center;
    height: 100;
    width: 200px;            
`;

export const NavItemBase = styled.div`
    text-decoration: none;
    display: inline-block;
    padding: 15px ;
    transition: all 0.3s ease 0s;

    a:hover{
        color: purple;
    }
`;

export const NavItemLink = styled.a`
    text-decoration: none;
    margin-left: 12px;
`;

export const MotionIcon = styled.img`
    `;

export const PostsIcon = styled.img`
    
    &#true {
        filter: invert(49%) sepia(60%) saturate(2147%) hue-rotate(229deg) brightness(100%) contrast(99%);
    }
    &#false {
        filter: grayscale(100%);
    }
`;

export const FriendsIcon = styled.img`
    
    &#true {
        filter: invert(55%) sepia(81%) saturate(2498%) hue-rotate(226deg) brightness(97%) contrast(106%);
    }
    &#false { 
        opacity: 0.3;
    }
`;

export const BellIcon = styled.img`
    margin-bottom: -18px;
    opacity: 0.3;
    width: 22px;
    
`;

export const ProfileIcon = styled.img`
    margin-right: 10px;
    width: 40px;
    height: 40px;
`;

export const MenuIcon = styled.img`
    margin-right: 5px;
`;

export const MotionItem = styled(NavItemBase)`
    display: flex;
    align-items: center;
    margin-left: 40px;
`;

export const MotionLink = styled(NavItemLink)`
    font-size: 2.2rem;
`;

export const PostsItem = styled(NavItemBase)`
    display: flex;
    align-items: center;

    padding-bottom: 29px;
    padding-top: 29px;
    
    border-bottom: 2px solid white;

    &#true {
        border-bottom: 2px solid #AD73FD;
    }
    &#false {
        border-bottom: 2px solid white;

        :hover {
            border-bottom: 2px solid #AD73FD;
        }
    }

`;

export const PostsLink = styled(NavItemLink)`
    `;

export const FriendsItem = styled(NavItemBase)`
    
    display: flex;
    align-items: center;

    padding-bottom: 29px;
    padding-top: 29px;

    border-bottom: 2px solid white;

    &#true {
        border-bottom: 2px solid #AD73FD;
    }
    &#false {
        border-bottom: 2px solid white;

        :hover {
            border-bottom: 2px solid #AD73FD;
        }
    }

`;

export const FriendsLink = styled(NavItemLink)`
    
`;

export const BellItem = styled(NavItemBase)`
    margin-bottom: 16px;
`;

export const BellLink = styled(NavItemLink)`
    
    display: flex;
    
    svg {
        opacity: 0.2;
        box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.07);

    }

    img {
        box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.07);

    }
`;

export const ProfileItem = styled(NavItemBase)`  
    `;

export const ProfileLink = styled(NavItemLink)`
    
`;

export const MenuItem = styled(NavItemBase)`
    margin-right: 30px;
`;

export const MenuLink = styled(NavItemLink)`
    `;
