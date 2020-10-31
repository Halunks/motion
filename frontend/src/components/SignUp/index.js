import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { regAction } from '../../store/actions/regAction';
import { valiAction } from '../../store/actions/valiAction';
import { useDispatch } from 'react-redux';
import { BigPurpleButton } from '../../style/Buttons'
import { FormWrapper, StepOneContainer, StepTwoContainer, StepThreeContainer, EmailSignUpContainer, EmailInputContainer, FirstnameInputContainer, LastnameInputContainer, PasswordInputContainer, PasswordRepeatInputContainer, UsernameInputContainer, ValidationCodeContainer, LayoutContainerLeft, LayoutContainerRight, LayoutContainerForm } from '../../style/Login'
import congrats from '../../assets/images/congrats.png';
import { SignIn } from '../SignIn';
import { ReactComponent as EmailIconSVG } from '../../assets/svgs/mail.svg';
import { ReactComponent as StepOneIconSVG } from '../../assets/svgs/stepOne.svg';
import { ReactComponent as StepTwoIconSVG } from '../../assets/svgs/stepTwo.svg';
import { ReactComponent as StepThreeIconSVG } from '../../assets/svgs/stepThree.svg';


export const SignUp = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [validation, setValidation] = useState('');
    const [username, setUsername] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');
    const [registrationState, setRegistrationState] = useState('stepOne');

    const handleValidationCode = e => {
        setValidation(e.currentTarget.value);
    }
    const handleEmail = e => {
        setEmail(e.currentTarget.value);
    }
    const handleUsername = e => {
        setUsername(e.currentTarget.value);
    }
    const handleFirstName = e => {
        setFirstName(e.currentTarget.value);
    }
    const handleLastname = e => {
        setLastName(e.currentTarget.value);
    }
    const handlePassword = e => {
        setPassword(e.currentTarget.value);
    }
    const handlePasswordRepeat = e => {
        setPasswordRepeat(e.currentTarget.value);
    }

    
    const stepOneHandler = async e => {
        e.preventDefault();        
        const re = /\S+@\S+\.\S+/;
        
        if (re.test(email)) {
            const regResponse = await dispatch(regAction(email))
            if (regResponse.email === email) {
                setRegistrationState('stepTwo')
            } else {
                setMessage(regResponse)
            }
        } else {
            setMessage('Not a valid email address')
        }
    }

    const stepTwoHandler = e => {
        e.preventDefault();
        setMessage('')
        setRegistrationState('stepThree')
    }

    const stepThreeHandler = async e => {
        e.preventDefault();
        if (password !== passwordRepeat) {
            setPassword('')
            setPasswordRepeat('')
            setMessage('The passwords do not match.')
        } else if (password.length < 6) {
            setPassword('')
            setPasswordRepeat('')
            setMessage('The password must be at least 6 characters long.')
        } else if (username.length < 3) {
            setUsername('')
            setMessage('The username must be at least 3 characters long.')
        } else {
            const valiResponse = await dispatch(valiAction(validation, email, username, firstName, lastName, password))
            
            if (valiResponse.is_active === true) {
                setRegistrationState('stepFour')
            } else {
                setMessage(valiResponse)
            }
        }        
    }

    const renderSwitch = (registrationState) => {
        switch (registrationState) {
            case 'stepOne': {
                return (
                    <StepOneContainer>
                        <h2>Sign Up</h2>
                        <form onSubmit={stepOneHandler}>
                            <EmailSignUpContainer>
                                <p>Email</p>
                                <div>
                                    <label htmlFor="user"><EmailIconSVG /></label>
                                    <input type="text" id="user" name="user" value={email} onChange={handleEmail} placeholder="Email"></input>
                                </div>
                            </EmailSignUpContainer>
                            <p>{message}</p>
                            <BigPurpleButton id="submit" type="submit" value="Continue"></BigPurpleButton>
                        </form>
                        <StepOneIconSVG id='stepOneIcon'/>
                    </StepOneContainer>
                )}    
            
            case 'stepTwo': {
                const el = document.querySelector('header');
                el.remove();
                return (
                    <StepTwoContainer>
                        <h2>Congratulations!</h2>
                        <img src={congrats} alt='Check mark' />
                        <form onSubmit={stepTwoHandler}>
                            <p>We’ve sent a confirmation code to your email<br/>{email}</p>
                            <BigPurpleButton id="submit" type="submit" value="Continue"></BigPurpleButton>
                        </form>
                        <StepTwoIconSVG id='stepTwoIcon'/>
                    </StepTwoContainer>
                )}

            case 'stepThree': {
                return (<>
                    <StepThreeContainer>
                        <h2>Verification</h2>
                        <form onSubmit={stepThreeHandler}>
                            <FormWrapper>
                                <ValidationCodeContainer>
                                    <input type="text" id="validation" name="validation" value={validation} onChange={handleValidationCode} placeholder="Validation code"></input>
                                </ValidationCodeContainer>
                                <LayoutContainerForm>
                                    <LayoutContainerLeft>
                                        <EmailInputContainer>
                                            <p>Email</p>
                                            <input type="text" id="email" name="email" value={email} onChange={handleEmail} placeholder="Email"></input>
                                        </EmailInputContainer>
                                        <FirstnameInputContainer>
                                            <input type="text" id="firstName" name="firstName" value={firstName} onChange={handleFirstName} placeholder="First name"></input>
                                        </FirstnameInputContainer>
                                        <PasswordInputContainer>
                                            <input type="password" id="password" name="password" value={password} onChange={handlePassword} placeholder="Password"></input>
                                        </PasswordInputContainer>
                                    </LayoutContainerLeft>
                                    <LayoutContainerRight>
                                        <UsernameInputContainer>
                                            <p>Username</p>
                                            <input type="text" id="user" name="user" value={username} onChange={handleUsername} placeholder="Username"></input>
                                        </UsernameInputContainer>
                                        <LastnameInputContainer>
                                            <input type="text" id="lastName" name="lastName" value={lastName} onChange={handleLastname} placeholder="Last name"></input>
                                        </LastnameInputContainer>
                                        <PasswordRepeatInputContainer>
                                            <input type="password" id="passwordRepeat" name="passwordRepeat" value={passwordRepeat} onChange={handlePasswordRepeat} placeholder="Password repeat"></input>
                                        </PasswordRepeatInputContainer>
                                    </LayoutContainerRight>
                                </LayoutContainerForm>
                                <p>{message}</p>
                            </FormWrapper>
                            <BigPurpleButton id="submit" type="submit" value="Complete"></BigPurpleButton>
                        </form>
                        <StepThreeIconSVG id='stepThreeIcon'/>
                    </StepThreeContainer>
                </>)
            }

            case 'stepFour': { 
                return (<>
                    <SignIn newEmail={email}/> 
                </>)
            }
            
            default:
                history.push("/home/feed");                
                break;
        }
    }
 
    return (<>
        {renderSwitch(registrationState)}            
    </>)
}