import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postAction } from '../../../store/actions/postAction'
import { CREATE_NEW_POST } from '../../../helpers/constants'
import { PurpleSendButton } from '../../../style/Buttons'
import { ModalContainerCreatePost, ExternalContainer, CloseButtonContainer } from '../../../style/Posts/Modals'
import ImageIcon from '../../../assets/svgs/image.svg'
import SendIcon from '../../../assets/svgs/send_button.svg'
import { DefaultAvatar } from '../../../style/Posts/Posts';
import Jennifer from '../../../assets/images/users/jennifer.png'

export const CreatePost = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.userReducer.user)
    const [newPost, setNewPost] = useState('');
    const [images, setImages] = useState();

    const [show, setShow] = useState(false);  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const textInputHandler = e => {
        setNewPost(e.currentTarget.value);
    }

    const imageInputHandler = e => {
        setImages(e.currentTarget.value);
    }


    const onSubmitHandler = async e => {
        e.preventDefault();
        const body = `{ "text_content": "${newPost}" }`;
        dispatch(postAction('social/posts/', 'POST', CREATE_NEW_POST, body));
        handleClose();
        // TODO fetch all the new posts, websocket would also solve the chellenge if any other user creates a post
    }

 
    return (
    <>
        {user.avatar ? (
            <DefaultAvatar><p>{user.first_name[0]}</p></DefaultAvatar>
        ) : (
            <img id="avatar" width="60px" height="60px" src={Jennifer} alt="Avatar" />
        )}
        <input type="text" style={{"width": "300px"}} onClick={handleShow} placeholder={`What's on your mind, ${user.first_name}?`}></input>
        <PurpleSendButton onClick={handleShow}><img src={SendIcon} alt="Add Post" /></PurpleSendButton>
        
        {show ? (
        <ExternalContainer >
            <CloseButtonContainer>
                <button id="closeButton" onClick={handleClose}>X</button>
                <ModalContainerCreatePost>
                    <form onSubmit={onSubmitHandler}>
                        {user.avatar ? (
                            <DefaultAvatar><p>{user.first_name[0]}</p></DefaultAvatar>
                        ) : (
                            <img id="avatar" width="60px" height="60px" src={Jennifer} alt="Avatar" />
                        )}
                        <input type="text" style={{"width": "300px"}} name="newPost" value={newPost} onChange={textInputHandler} placeholder={`What's on your mind, ${user.first_name}?`}></input> 
                        <input type="file" multiple={true} onChange={imageInputHandler}></input><img src={ImageIcon} alt="Add"></img>                    
                        <PurpleSendButton type="submit" ><img src={SendIcon} alt="Add Post" /></PurpleSendButton>
                    </form >
                </ModalContainerCreatePost>
            </CloseButtonContainer>
        </ExternalContainer>  
        ) : null}
    </>
    );
}