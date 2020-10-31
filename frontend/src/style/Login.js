import styled from 'styled-components'
import backgroundImg from '../assets/images/background_image.png'

export const Container = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;

`

export const Left = styled.section`
    background-image: url(${backgroundImg}), ${props => props.theme.linearGradient};
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    width: 40%;
    display: flex;
    flex-direction: column;

    h1 {
        font-style: normal;
        font-weight: 500;
        font-size: 3rem;
        line-height: 35px;
        text-align: center;
        letter-spacing: 0.75px;
        color: #FFFFFF;
        margin-bottom: 50px;
        font-family: Roboto;
    }

`

export const LeftContainer = styled.div`
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    
    p {
        width: 28rem;
        word-wrap: break-word;
        font-family: Roboto;
        font-style: normal;
        font-weight: 500;
        font-size: 1.6rem;
        line-height: 24px;
        text-align: center;
        color: #FFFFFF;
        mix-blend-mode: normal;
        opacity: 0.6;
        margin-bottom: 25px;
        line-height: 25px;
        column-gap: 40px;
    } 
`
export const FooterContainer = styled.div`
    display: flex;
    justify-self: flex-end;
    align-items: center;
    flex-direction: column;
    margin-top: 90px;    

    p {            
        margin-top: 40px;
        font-size: 1.2rem;
        line-height: 14px;
        text-align: center;
        color: #FFFFFF;
        font-weight: 400;
    }

    footer {
        display: flex;
        justify-content: center;
        align-items: center;    
    }
`

export const Right = styled.section`
    display: flex;
    flex-direction: column;
    width: 60%;
    height: 100vh;

`

export const RightContainer = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;

    h2 {
        display: flex;
        justify-content: center;
        font-size: 4rem;
        line-height: 47px;
        font-family: Roboto;
        font-style: normal;
        font-weight: 500;
        margin-bottom: 45px;
    }

    form {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;
        width: 100%;
        flex-direction: column;
    }
`

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const HeaderContainer = styled.div`
    display: flex;
    margin-top: calc(40px - 14px);
    justify-content: flex-end;    

    header { 
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding-right: 40px;
        font-size: 1.4rem;
        p {
            font-size: 1.4rem;
            line-height: 16px;
        }
    }
`

export const StoreBtnContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 268px;
    margin: 10px;
`;

export const MotionLogo = styled.img`
    height: 80px;
    width: 80px;
    color: #fff;
    margin-bottom: 20px;
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.07);
`

export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: calc(100vh - 80px - 26px);
    //padding-top: calc(128px - 20px); mark

    #signUpSuccess {
        color: rgba(0, 0, 0, 0.5);
    }

    p {
        height: 14px;
        font-size: 1.4rem;
    }

    input {
        border: none;
        padding: 0 0 0 0;
        opacity: 100%;
        line-height: 26px;
        font-size: 1.6rem;

        &#user, &#password {
            width: 100%;
        }
    }

    input::-webkit-input-placeholder {
        color: black;
        opacity: 1;
    }

    input:focus {
        outline: none;
    }
    
    label {
        display: flex;
        align-self: center;
        justify-content: center;
    }
`;


export const StepOneContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding-top: 70px;
    height: 100%;

    #stepOneIcon {
        flex: 0;
        min-height: 9px;
        min-width: 27px;
        margin: 55px 0 62px 0;
    }
`
export const StepLoginContainer = styled(StepOneContainer)`
    #submit {
        margin-top: min(160px, 140px);
        margin-bottom: calc(55px + 62px + 9px);
        min-height: 60px;
    }
`

export const StepTwoContainer = styled(StepOneContainer)`
    img {
        margin-top: calc(43px - 37px);
        margin-bottom: 41px;
        height: 81px;
        width: 81px;
    }

    p {
        color: rgba(0, 0, 0, .5);
        font-size: 1.6rem;
        text-align: center;
    }

    #stepTwoIcon {
        flex: 0;
        min-height: 9px;
        min-width: 27px;
        margin: 55px 0 62px 0;
    }
`

export const StepThreeContainer = styled(StepOneContainer)`
    h2 {
        margin-bottom: 39px;
    }

    button {
        margin-bottom: 56px;
    }

    #stepThreeIcon {
        flex: 0;
        min-height: 9px;
        min-width: 27px;
        margin: 55px 0 62px 0;
    }
`

export const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const BaseInputContainer = styled.div`
    display: flex;
    align-self: center;
    align-items: center;
    justify-content: flex-start;
    border-bottom: 1px solid rgba(0, 0, 0, .5);
    width: 260px;
    height: 58px;

    p {
        color: rgba(0, 0, 0, .5);
        font-size: 1.2rem;
        line-height: 12px;
    }

    label {
        margin-right: 15px;
    }

    input {
        width: 100%;
        height: 26px;
    }

`

export const ValidationCodeContainer = styled(BaseInputContainer)`
    width: 560px;
`
export const EmailInputContainer = styled(BaseInputContainer)`
    flex-direction: column;
    align-items: flex-start;
`

export const EmailSignUpContainer = styled(BaseInputContainer)`
    align-items: flex-start;
    flex-direction: column;
    width: 340px;

    div {
        width: 100%;
    }

    input {
        width: 100%;
        height: 24px;
    }

    svg {
        margin-bottom: 15px;
    }

    div {
        display: flex;
        flex-direction: row;
    }
    
    p {
        padding-left: 39px;
        height: 100%;
        font-size: 1.2rem;
        color: rgba(0, 0, 0, 0.5);
    }
`

export const UsernameInputContainer = styled(BaseInputContainer)`
    flex-direction: column;
    align-items: flex-start;
`
export const FirstnameInputContainer = styled(BaseInputContainer)``
export const LastnameInputContainer = styled(BaseInputContainer)``
export const PasswordInputContainer = styled(BaseInputContainer)``
export const PasswordRepeatInputContainer = styled(BaseInputContainer)``

export const UsernameSignInInputContainer = styled(BaseInputContainer)`
    width: 340px;
`
export const PasswordSignInContainer = styled(UsernameSignInInputContainer)``

export const LayoutContainerForm = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
`

export const LayoutContainerLeft = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px;
`

export const LayoutContainerRight = styled(LayoutContainerLeft)``







