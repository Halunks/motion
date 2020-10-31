import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SET_USER_ALL } from '../../helpers/constants'
import { User } from './User/index'
import { userAction } from '../../store/actions/userAction'
import { Loading } from '../Loading/index'
import { MainUserContainer } from '../../style/FindFriends'

export const FindFriends = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.userReducer.users)
    const [isLoading, setIsLoading] = useState(true) 

    useEffect(() => {
        const fetchPostsData = async () => {
            await dispatch(userAction('users/', 'GET', SET_USER_ALL));
            setIsLoading(false);
        }
        fetchPostsData();

        return function cleanup() {};
    },[dispatch]);

    return (<>
        {isLoading ? (
            <Loading />
        ) : (
            <MainUserContainer>
                {users.map(user => <User user={user} key={user.id}/>)}
            </MainUserContainer>
        )}
    </>)
}
