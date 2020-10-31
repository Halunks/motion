import styled from 'styled-components';

export const SocialButton = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: none;
    margin-right: 18px;
    font-size: 1.4rem;

    img {
        color: rgba (0, 0, 0, 0.3);
        height: 22px;
        width: 22px;
        background-size: 26px 26px;
    }
`

export const MenuButton = styled(SocialButton)`
    :hover {

        img {
            background: rgba (0, 0, 0, 0.8);
            border: 1px solid rgba (0, 0, 0, 0.8);
        }
    }
`

export const TwitterButton = styled.button`
    width: 46px;
    height: 46px;
    background: none;
    border: none;
    opacity: 0.2; 
    padding-bottom: -10px;  
    :hover {
        opacity: 1;
    }   
`

export const FacebookButton = styled.button`
    width: 40px;
    height: 40px;
    background: none;
    border: none;
    margin-right: 16px; 
    margin-left: 16px; 
    opacity: 0.2;   
    :hover {
        opacity: 1;
    } 
`

export const InstagramButton = styled.button`
    width: 40px;
    height: 40px;
    background: none;
    border: none;
    opacity: 0.2;  
    :hover {
        opacity: 1;
    } 
`

export const AppleButton = styled.button`
    width: 126px;
    height: 40px;
    background: transparent;
    padding-top: 2px;
    margin-right: 8px;
    border: 2px solid rgba(255, 255, 255, 0.2);
    border-radius: 100px;
    :hover {
        background: rgba(255, 255, 255, 0.2);
    } 
`;

export const GoogleButton = styled.button`
    width: 126px;
    height: 40px;
    background: transparent;
    padding-top: 7px;
    margin-right: 8px;
    border: 2px solid rgba(255, 255, 255, 0.2);
    border-radius: 100px;
    :hover {
        background: rgba(255, 255, 255, 0.2);
    } 
`;

export const SignUpButton = styled.button`
    background: transparent;
    padding: 14px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.07);
    border-radius: 30px; 
    display: flex;
    align-items: center;
    justify-content: center;
    width: 120px;
    height: 40px;
    margin: 20px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 12px;
    /* identical to box height */

    text-align: center;
    letter-spacing: 1px;
    text-transform: uppercase;

    color: #000000;

    :hover {
        background: rgba(0, 0, 0, 0.07);
    }
`;

export const BigPurpleButton = styled.input`
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
    justify-items: center;
    align-content: center;    
    background: linear-gradient(132.96deg, #C468FF 3.32%, #6E91F6 100%);
    color: #ffff;
    border-radius: 30px;
    width: 280px;
    height: 60px;
    border: 2px solid rgba(200, 200, 200, 0.45);
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.07);

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 1.2rem;
    line-height: 14px;
    /* identical to box height */

    text-align: center;
    letter-spacing: 1px;
    text-transform: uppercase;

    color: #FFFFFF;

    :hover {
        background: linear-gradient(132.96deg, #C468FF 50%, #6E91F6 100%);
    }

    input {
        width: 280px;
    }

    &#submit {
        font-size: 1.2rem;
    }
`


export const PurpleSendButton = styled.button`
    background: linear-gradient(132.96deg, #C468FF, #6E91F6);
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.07);
    height: 60px;
    width: 60px;
    border-radius: 50%;
    color: white;
    border: none;
    display:flex;
    justify-content: center;
    align-items: center;
    outline: none;

    :hover {
        background: linear-gradient(132.96deg, #C468FF 50%, #6E91F6 100%);
    }
`

export const FriendsButton = styled.button`
    background: transparent;
    border: 1px solid rgba(0, 0, 0, 0.07);
    margin-right: 3px;
    margin-left: 3px;
    box-shadow: 0px 7px 20px rgba(0,0,0,0.07);
	letter-spacing: 1px;
    justify-content: center;
    color: #000000;
    text-transform: uppercase;
    font-size: 1.0rem;
    font-style: normal;
    font-weight: 500;
    letter-spacing: 1px;
    outline: none;
    height: 40px;
    width: 133px;
    border-radius: 30px;

    :hover {
        background: rgba(0, 0, 0, 0.07);
    }

    &#true {
        background: linear-gradient(132.96deg, #C468FF 3.32%, #6E91F6 100%);
        box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.07);
        background-color: linear-gradient(132.96deg, #C468FF 3.32%, #6E91F6 100%);
        color: white;

        :hover {
            background: linear-gradient(132.96deg, #C468FF 50%, #6E91F6 100%);
            border-color: linear-gradient(132.96deg, #C468FF 50%, #6E91F6 100%);
        }
    }
`;
