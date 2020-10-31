import React from 'react'
import { Like } from '../Like/index'
import { Share } from '../Share/index'
import { Edit } from '../Edit/index'
import { BottomContainer, TopContainer, ImageContainer, SharedContainer, DefaultAvatar, LargeImageContainer } from '../../../style/Posts/Posts'

export const Post = ({ post, viaShared }) => {

    const formatDate = (date) => {
        let d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear(),
            hour = '' + d.getHours(),
            minutes = '' + d.getMinutes();
    
        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;
        if (hour.length < 2)
            hour = '0' + hour;
        if (minutes.length < 2)
            minutes = '0' + minutes;
    
        return [year, month, day].join('-') + ' ' + hour + ":" + minutes;
    }

    let date = post.created
    if (post.created.length > 8) {
        date = formatDate(post.created)
    }

    return (
        <>  
            <TopContainer>
                <div id="avatar">
                    {post.author.avatar ? (
                        <img src={post.author.avatar} alt="Avatar" />
                    ) : ( 
                        <DefaultAvatar><p>{post.author.first_name[0]}</p></DefaultAvatar>
                    )}
                
                    <div id="name">
                        <h4>{post.author.first_name + ' ' + post.author.last_name}</h4>
                        <p id="created">{date}</p>
                    </div>
                    {post.shared ? <p id="shared">Shared a post</p> : <p></p> }
                </div>
                <div id="menu">
                    {post.is_from_logged_in_user ? (
                        <Edit id={post.id} /> 
                    ) : null }
                </div>    
            </TopContainer>
            <p id="content">{post.text_content}</p>
            {post.fk_image_post.length > 1 ? (
                <ImageContainer>
                    {post.fk_image_post.map((image) => <img src={image.image} key={image.id} alt="Small View Pictures"/>)}
                </ImageContainer>
            ) : null }
            {post.fk_image_post.length === 1 ? (
                <LargeImageContainer>
                    <img src={post.fk_image_post[0].image} key={post.fk_image_post[0].id}alt="Large View" />
                </LargeImageContainer>
            ) : null }
            {post.shared ? (
                <SharedContainer>
                    <Post post={post.shared} viaShared={true} key={post.id} />
                </SharedContainer>
            ) : null }
            <BottomContainer>
                {viaShared ? (<>
                    <p></p>
                </>) 
                : (<>
                <div id="socials">
                    <Like liked={post.logged_in_user_liked} id={post.id} />
                    <Share id={post.id} />
                </div>
                <p>{post.likes_counter} likes</p>
                </>)}                
            </BottomContainer>
        </> 
    )
}