import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { PageContainer, HeaderContainer, MainContainer } from '../style/Home'
import { Header } from '../components/Header/index'
import { Searchbar } from '../components/Searchbar/index'
import { Posts } from '../components/Posts/index'
import { userAction } from '../store/actions/userAction'
import { FindFriends } from '../components/FindFriends/index'
import { useLocation } from 'react-router-dom';
import { Loading } from '../components/Loading';
import { SET_USER } from '../helpers/constants'
import { Profile } from './Profile';


export const Home = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const [currentPath, setCurrentPath] = useState(location.pathname); 
    const [isLoading, setIsLoading] = useState(true) 

    useEffect(() => {
        const fetchUserData = async () => {
            await dispatch(userAction('users/me/', 'GET', SET_USER));
            setIsLoading(false);
        }
        fetchUserData(); 
        
        return function cleanup() {};
    },[dispatch]);

    useEffect(() => {
        setCurrentPath(location.pathname);
    },[location]);

    const renderSwitch = (currentPath) => {
        switch(true) {
            case currentPath.includes('/home/feed'):
                return <Posts />;
            case currentPath.includes('/home/friends'):
                return <FindFriends />;
            case currentPath.includes('/home/users'):
                return <Profile />
            default:
                return <Posts/>;
        }
    }

   
    return (<>
        <PageContainer>
            <HeaderContainer>
                <Header />               
            </HeaderContainer>
            {currentPath === '/home/feed' ? 
                <Searchbar/>
                : null 
            }
            <MainContainer>
            {isLoading ? (                
                <Loading />
                ) : (
                renderSwitch(currentPath)                
            )}
            </MainContainer> 
        </PageContainer>
    </>
    )
}