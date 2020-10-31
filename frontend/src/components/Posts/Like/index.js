import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { postAction } from '../../../store/actions/postAction'
import LikeIcon from '../../../assets/svgs/heart.svg'
import UnlikedIcon from '../../../assets/svgs/heart2.svg'
import { SocialButton } from '../../../style/Buttons'
import { SET_LIKE } from '../../../helpers/constants'

export const Like = props => {
    const dispatch = useDispatch();
    const [likeState, setLikeState] = useState(props.logged_in_user_liked)
    const [ID] = useState(props.id)

    const likeHandler = () => {
        dispatch(postAction(`social/posts/toggle-like/${ID}/`, 'POST', SET_LIKE));
        setLikeState(!likeState);
    }

    return (<>
        <SocialButton onClick={() => likeHandler()}>
            <img id={props.liked} src={likeState ? LikeIcon : UnlikedIcon} alt="Like Icon" />
            <p>Like</p>
        </SocialButton>
    </>)
}