import styled from 'styled-components';

export const WhiteFlexBox = styled.div`
    position: absolute;
    z-index: 1;
    width: 1152px;
    height: 400px;
    background: #FFFFFF;
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2), 0px 10px 20px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    margin-top: 120px;
    display: flex;
`;

export const LeftProfile = styled.div`
    display: flex;
    height: 100%; 
    width: 319px;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-direction: column;
    border-right: 1px solid rgba(0,0,0,0.05);

    img {
        display: flex;
        justify-self: center;
        align-self: center;
        height: 90px;
        width: 90px;
        top: 82px;
        border-radius: 0px;
        border-radius: 50%;
    }

    h3 {
        display: flex;
        justify-self: center;
        align-self: center;
        font-family: Roboto;
        font-size: 22px;
        font-style: normal;
        font-weight: 400;
        line-height: 26px;
        letter-spacing: 0px;
        text-align: center;
        margin-top: 90px;
    }
    
    p {
        display: flex;
        justify-self: center;
        align-self: center;
        font-family: Roboto;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 16px;
        letter-spacing: 0px;
        text-align: center;
        margin-top: 8px;

    }

    button {
        display: flex;
        background: transparent;
        border: 1px solid rgba(200, 200, 200, 0.45);
        justify-content: center;
        align-items: center;
        align-self: center;
        color: #000000;
        text-transform: uppercase;
        font-size: 10px;
        font-style: normal;
        letter-spacing: 1px;
        outline: none;
        height: 40px;
        width: 133px;
        border-radius: 30px;
        margin-top: 30px;

        :hover {
            background: rgba(0, 0, 0, 0.07);
        }
    }`;

// import styled from 'styled-components';
// export const WhiteFlexBox = styled.div`
//     position: absolute;
//     z-index: 1;
//     width: 1152px;
//     height: 400px;
//     background: #FFFFFF;
//     box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2), 0px 10px 20px rgba(0, 0, 0, 0.05);
//     border-radius: 4px;
//     margin-top: 120px;
//     display: flex;
// `;
//
// export const LeftProfile = styled.div`
//     display: flex;
//     height: 100%;
//     width: 319px;
//     justify-content: center;
//     align-content: center;
//     flex-direction: column;
//     border-right: 1px solid rgba(0,0,0,0.05);
//     svg {
//         display: flex;
//         justify-self: center;
//         align-self: center;
//         height: 90px;
//         width: 90px;
//         top: 82px;
//         border-radius: 0px;
//         border-radius: 50%;
//     }
//     h3 {
//         display: flex;
//         justify-self: center;
//         align-self: center;
//         font-family: Roboto;
//         font-size: 22px;
//         font-style: normal;
//         font-weight: 400;
//         line-height: 26px;
//         letter-spacing: 0px;
//         text-align: center;
//         margin-top: 20px;
//     }
//     p {
//         display: flex;
//         justify-self: center;
//         align-self: center;
//         font-family: Roboto;
//         font-size: 14px;
//         font-style: normal;
//         font-weight: 400;
//         line-height: 16px;
//         letter-spacing: 0px;
//         text-align: center;
//         margin-top: 8px;
//     }
//     button {
//         display: flex;
//         background: transparent;
//         border: 1px solid rgba(200, 200, 200, 0.45);
//         justify-content: center;
//         align-items: center;
//         align-self: center;
//         color: #000000;
//         text-transform: uppercase;
//         font-size: 10px;
//         font-style: normal;
//         letter-spacing: 1px;
//         outline: none;
//         height: 40px;
//         width: 133px;
//         border-radius: 30px;
//         margin-top: 30px;
//         :hover {
//             background: rgba(0, 0, 0, 0.07);
//         }
//     }`;