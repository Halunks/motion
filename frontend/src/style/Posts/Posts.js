import styled from 'styled-components'


export const GridContainer = styled.div`
    display: flex;
    width: calc(560px * 2 + 4 * 16px);
    flex-direction: row;
    margin-top: calc(40.5px - 16px);
    flex-wrap: wrap;

    img {
        background: transparent;
    }
`

export const GridElement = styled.div`
    background: white;
    width: 560px;
    max-height: 750px;
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2), 0px 10px 20px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start; 
    font-size: 1.6rem;
    padding: 30px 30px 30px 30px;
    margin: 16px 16px 16px 16px;
    background: #FFFFFF;
    border-radius: 4px;

    &#new-post {
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: row;
        height: 120px;

        input {
            border: none;
        }
        img#avatar {
            border-radius: 100%;
        }
        
    }

    #content {
        margin-top: 18px;
        margin-bottom: 21px;
        text-overflow: ellipsis;
        overflow: hidden;
        min-height: 52px;
        align-self: flex-start;
    }
`

export const TopContainer = styled.div`
    width: calc(560px - 2 * 30px);
    display: flex;
    height: 46px;
    flex-direction: row;
    align-content: center;
    justify-content: space-between;

    #avatar {
        display: flex;
        flex-direction: row;

        img {
            width: 45px;
            height: 45px;
            border-radius: 100%;
        }

        #shared {
            margin-left: 12px;
            color: rgba(0, 0, 0, 0.5)
        }
    }

    #name {
        display: flex;
        justify-self: flex-start;
        align-self: flex-start;
        flex-direction: column;
        margin-left: 12px;
        margin-bottom: 10px; 

        #created {
            color: rgba(0, 0, 0, 0.5)
        }   
    }
`

export const BottomContainer = styled(TopContainer)`
    align-items: center;
    margin-top: 17px;
    height: 23px;

    p {
        color: rgba(0, 0, 0, 0.5);
    }

    #socials {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        p {
            margin-left: 18px;
        }
    }
`

export const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    width: calc(2 * 240px + 4 * 10px);
    height: calc(2 * 240px + 4 * 10px);

    img {
        margin: 10px 10px 10px 10px;
        width: 240px;
        height: 240px;
    }
`

export const LargeImageContainer = styled(ImageContainer)`
    width: calc(467px + 2 * 10px);
    padding: 0 0 0 0;
    align-items: flex-start;
    justify-content: flex-start;
    height: 100%;

    img {
        width: 467px;
        height: 250px;
        margin: 0 0 0 0;
    }
`

export const SharedContainer = styled.div`
    padding-left: 27px;
    display: block;
    padding-right: 27px;
    height: 100%;
    width: 500px;
    border-left: 1px solid rgba(0, 0, 0, 0.1);
`

export const DefaultAvatar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 45px;
    height: 45px;
    background: rgba(0, 0, 0, 0.3);
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.07);
    border-radius: 100%;

    p {
        color: white;
        font-size: 1.2rem;
    }
`

export const DefaultAvatarHeader = styled(DefaultAvatar)`
    width: 40px;
    height: 40px;
    margin-right: 10px;
`






//behavior bny reaching at end of site: scroll event
