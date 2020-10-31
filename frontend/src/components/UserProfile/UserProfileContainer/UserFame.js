import React from 'react';
import styled from 'styled-components'

export const RightProfile = () => {
    return (<>
            <RightContainer>
                <UserInfoDetails>
                    <RowDivOne>
                        <article> About
                            <p>Lorem ipsum dolor sit amet, vim ut quas<br/>
                                volumus probatus, has tantas laudem<br/>
                                iracundia et, ad per utamur ceteros apeirian</p>
                        </article>
                        <Hobbies>Things I like
                            <div id="Interests">
                                <p>Cooking</p><p>Travel</p><p>Reading</p>
                            </div>
                        </Hobbies>
                    </RowDivOne>
                    <RowDiv>
                        <article>Email
                            <p>jennifersmith@gmail.com</p>
                        </article>
                        <Phone>Phone
                            <p>+41 78 342 76 21</p>
                        </Phone>
                    </RowDiv>
                </UserInfoDetails>
                <UserFameDetails>
                    <ul>
                            <p>1</p>
                        <li>Posts</li>
                            <p>23</p>
                        <li>Likes</li>
                            <p>41</p>
                        <li>Friends</li>
                            <p>20</p>
                        <li>Followers</li>
                            <p>9</p>
                        <li>Following</li>
                    </ul>
                </UserFameDetails>
            </RightContainer>
          </>
    )
}
export const RightContainer = styled.div`
        display: flex;
        align-items: center;
        width: 833px;
        height: 100%;
`
export const UserFameDetails = styled.div`
        display: flex;
        position: absolute;
        align-self: flex-end;
        width: 833px;
        justify-content: center;
ul {   
        display: flex;
        text-align: center;
        width: 833px;
        height: 135px;
        border-top: 1px solid rgba(0,0,0,0.05);
}
p {
     display: flex;
     justify-self: flex-start;
     height: 28px;
     font-size: 24px;
     margin-top: 20px;
     margin-left: 30px;
   } 
li  {
        text-decoration: none;
        display: flex;
        text-align: center;
        cursor: pointer;
        opacity: 0.5;
        width: 833px;
        border-bottom: 3px solid white;
        transition: all 0.3s ease 0s;
        margin-top: 70px;
        margin-right: 60px;
        justify-content: center;
        :hover {
            border-bottom: 3px solid #AD73FD;
            opacity: 1;
        }
    }
`;
export const UserInfoDetails = styled.div`
    margin-bottom: 150px;
    width: 100%;
article {
    height: 100px;
    width: 320px;
    font-size: 14px;
    margin-bottom: 37px;
    margin-left: 60px;
}
p {
    width: 320px;
    height: 78px;
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: 0px;
    text-align: left;
}
section {
    font-size: 14px;
p {
    font-size: 16px;
}
}
`
export const RowDivOne = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    aside {
        display: flex;
        justify-content: center;
        flex-direction: row;
    }
`
export const Hobbies = styled.section`
    display: flex; 
    justify-items: flex-start;
    font-size: 14px;
    height: 40px;
    flex-direction: row;
    margin-left: 71px;
    max-width: 250px;
    flex-flow: row wrap;
    #Interests {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 100%;
        p {
            padding: 10px;
            width: 100px;
            height: 32px;
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
export const RowDiv = styled.div`
    display: flex;
    flex-direction: row;
    height: 26px;
`
export const Phone = styled.section` 
    display: flex; 
    font-size: 14px;
    height: 40px;
    flex-direction: column;
 p {
    font-size: 16px;
    height: 26px;
    width: 200px;
 }
`