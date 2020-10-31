import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { authAction } from '../../store/actions/authAction';
import { useDispatch } from 'react-redux';
import { FormContainer, PasswordSignInContainer, UsernameSignInInputContainer, StepLoginContainer } from '../../style/Login'
import { BigPurpleButton } from '../../style/Buttons'
import { ReactComponent as UserIconSVG} from '../../assets/svgs/avatar.svg';
import { ReactComponent as PasswordIconSVG} from '../../assets/svgs/password.svg';


export const SignIn = ({ newEmail }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [email, setEmail] = useState(newEmail);
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleEmail = e => {
        setEmail(e.currentTarget.value);
    }

    const handlePassword = e => {
        setPassword(e.currentTarget.value);
    }

    const handleSubmit = async e => {
        e.preventDefault();
        const authResponse = await dispatch(authAction(email, password));
        //TODO debbug the part where the user tried a wrong password and trys again, but fails even with the right credentials
        if (authResponse.access) {
            history.push('/home/feed');
        } else if (authResponse.detail) {
            setMessage(authResponse.detail)
        }
    } 

    return (<>
        <StepLoginContainer>
            <form onSubmit={handleSubmit}>
            <h2>Sign In</h2>
                <FormContainer>
                    <UsernameSignInInputContainer>
                        <label htmlFor="user"><UserIconSVG /></label>
                        <input type="text" id="user" name="user" value={email} onChange={handleEmail} placeholder="Email address"></input>
                    </UsernameSignInInputContainer>
                    <PasswordSignInContainer>
                        <label htmlFor="password"><PasswordIconSVG /></label>
                        <input type="password" id="password" name="password" value={password} onChange={handlePassword} placeholder="Password"></input>
                    </PasswordSignInContainer>
                    {<p>{message}</p>}
                </FormContainer>
                <BigPurpleButton id="submit" type="submit" value="Sign In"></BigPurpleButton>
            </form>
        </StepLoginContainer>
    </>)
}