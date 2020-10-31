import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { postAction } from '../../store/actions/postAction'
import { CreatePost } from './CreatePost/index'
import { SET_POSTS_ALL } from '../../helpers/constants'
import { GridElement, GridContainer } from '../../style/Posts/Posts'
import { Post } from './Post';
import { Loading } from '../Loading/index'

export const Posts = () => {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.postReducer.postsAllChron)
    const [isLoading, setIsLoading] = useState(true) 

    useEffect(() => {
        const fetchPostsData = async () => {
            await dispatch(postAction('social/posts/', 'GET', SET_POSTS_ALL));
            setIsLoading(false) 
        }
        fetchPostsData();

        return function cleanup() {};
    }, [dispatch]);

   
    return (<>
        {isLoading ? (    
                <Loading />
        ) : ( 
            <GridContainer>
                <GridElement id="new-post" height="120px"><CreatePost key="0" /></GridElement>
                {posts.map(post => <GridElement key={post.id}><Post post={post} key={post.id}/></GridElement>)}
            </GridContainer>
        )}
    </>)
}
