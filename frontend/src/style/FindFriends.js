import styled from 'styled-components'

export const MainUserContainer = styled.section`
    display: flex;
    flex-direction: row;
    width: 1214px;
    background: #F2F2F2;
    flex-wrap: wrap;
    padding-top: calc(41px - 16px);

`

export const UserContainer = styled.div`
    background: white;
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2), 0px 10px 20px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around; 
    height: 489px; 
    width: 362px;  
    margin: 16px 16px 16px 16px;
    font-size: 1.4rem;
    padding-left: 40px;
    padding-right: 40px;

    img {
        height: 80px;
        width: 80px;
        margin-top: 30px;
        border-radius: 100%;
    }

    #TitleContainer {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        h3 {
            font-family: Roboto;
            font-size: 2.2rem;
            font-style: normal;
            font-weight: 400;
            line-height: 26px;
            margin-bottom: 7px;
        }

        p {
            line-height: 16px;
        }
    }

    #SocialContainer {
        width: calc(272px + 6px);
    }

    #AboutMe {
        text-justify: center;
        text-align: center;
        
        p {
            height: 72px;
            text-overflow: ellipsis;
            overflow: hidden;
        }
    }

    #Interests {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        margin-bottom: 36px;

        p {
            height: 32px;
            padding-left: 16px;
            padding-right: 16px;
            margin: 6px 6px 6px 6px;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: rgba(0, 0, 0, 0.05);
            mix-blend-mode: normal;
            border: 1px solid rgba(0, 0, 0, 0.05);
            border-radius: 18px;

            :hover {
                background: white;
            }
        }
    }
`

export const DefaultAvatar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 80px;
    margin-top: 30px;
    background: rgba(0, 0, 0, 0.3);
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.07);
    border-radius: 100%;

    p {
        color: white;
        font-size: 2.2rem;
    }
`
