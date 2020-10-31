import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';

export default WrappedComponent => (props) => {
        const token = useSelector(state => state.authReducer.token)
        const authenticationError = useSelector(state => state.authReducer.authenticationError)
        const history = useHistory();
        const location = useLocation();

        useEffect(() => {
            const userRedirect = () => {
                const path = location.pathname;
                                
                if (path.includes('auth') && token) {
                    history.push('/home/feed');
                } else if (!path.includes('auth') && (token === "undefined" || token === "token_not_valid" || token === null)) {
                    history.push('/auth/login');
                } else if (authenticationError) {
                    history.push('/auth/login');
                }
            };

            userRedirect();
        }, [authenticationError, token, history, location]);

        return <WrappedComponent {...props} />
}