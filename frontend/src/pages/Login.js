import React, { useState } from 'react'
import { FooterContainer, LoginContainer, LeftContainer, HeaderContainer, Right, RightContainer, Left, Container, StoreBtnContainer, MotionLogo } from '../style/Login'
import { TwitterButton, FacebookButton, InstagramButton, AppleButton, GoogleButton, SignUpButton } from '../style/Buttons'
import LogoMotion from '../assets/images/logo_white.png';
import TwitterIcon from '../assets/svgs/twitter_icon.svg'
import FacebookIcon from '../assets/svgs/facebook_icon.svg'
import InstagramIcon from '../assets/svgs/instagram_icon.svg'
import { ReactComponent as AppleSVG } from '../assets/svgs/apple.svg';
import { ReactComponent as GoogleSVG } from '../assets/svgs/google.svg';
import { SignIn } from '../components/SignIn';
import { SignUp } from '../components/SignUp';

export const Login = () => {
    const [toggleSwitch, setToggleSwitch] = useState(true);


    return (
        <Container >
            <Left>
                <LeftContainer>
                    <MotionLogo src={LogoMotion} alt="Motion Logo" />
                    <h1>Motion</h1>
                    <p>Connect with friends and the world around you with Motion.</p>
                    <StoreBtnContainer>
                        <AppleButton><AppleSVG /></AppleButton>
                        <GoogleButton><GoogleSVG /></GoogleButton>
                    </StoreBtnContainer>
                </LeftContainer>
                <FooterContainer>
                    <footer>
                        <TwitterButton><img src={TwitterIcon} width={46} height={46} alt="Twitter Icon"/></TwitterButton>
                        <FacebookButton><img src={FacebookIcon} width={40} height={40} alt="Facebook Icon"/></FacebookButton>
                        <InstagramButton><img src={InstagramIcon} width={40} height={40} alt="Instagram Icon"/></InstagramButton>
                    </footer>
                    <p>&copy; Motion 2020. All rights reserved.</p>
                </FooterContainer>
            </Left>
            <Right>
                <HeaderContainer>
                    <header>
                        {toggleSwitch ? <>Don't have an account?</> : <>Already have an account?</>} 
                        <SignUpButton onClick={() => setToggleSwitch(!toggleSwitch)}>{toggleSwitch ? <>Sign Up</> : <>Sign In</>}</SignUpButton>
                    </header>
                </HeaderContainer>
                <RightContainer>
                    <LoginContainer>
                        {toggleSwitch ? <SignIn /> : <SignUp />}
                    </LoginContainer>
                </RightContainer>
            </Right>            
        </Container>
    )
}