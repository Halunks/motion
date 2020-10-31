import React, { useState } from 'react';
import { ModalContainerDetails, ExternalContainer, CloseButtonContainer } from '../../../style/Posts/Modals'


export const Details = ({ post }) => {

    const [show, setShow] = useState(true);  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
    <>  
        <p style={{position: "absolute"}}>hello modal {post.id}</p>        
        {show ? (
        <ExternalContainer>
            <CloseButtonContainer>
                <button onClick={handleClose}>X</button>
                <ModalContainerDetails>
                    <p>a modal </p>
                </ModalContainerDetails>
            </CloseButtonContainer>
        </ExternalContainer>  
        ) : null}
    </>
    );
}