import React from 'react'
import ShareIcon from '../../../assets/svgs/share.svg'
import { SocialButton } from '../../../style/Buttons'

export const Share = props => {

    //TODO WIP
    const shareHandler = async () => {
        //const postToShare = await dispatch(postAction(`/social/posts/${props.id}/`, 'GET'))
        //setBody(`{ "content": "${postToShare.content}" }`)
        //dispatch(postAction(`/social/posts/`, 'POST', body));        
    }

    return (<>
        <SocialButton onClick={shareHandler}>
            <img src={ShareIcon} alt="Share Icon" />
            <p>Share</p>
        </SocialButton>
    </>)
}