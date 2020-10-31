import styled from 'styled-components'


export const DropdownContainer = styled.div`
    display: flex;
    position: relative;
    margin-left: 3vw;
    z-index: 44;
    cursor: pointer;

    img {

        display: flex;
        margin-right: 3vw;
        padding: 0 1vw;
    }

    :hover #dropdown-content,
    .show #dropdown-content {
        display: block;
    }
`

export const DropdownContent = styled.div`
        display: none;
        position: absolute;
        top: 100%;
        right: 10px;
        background-color: #f9f9f9;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 45;
        border-radius: 6px;

        div:hover {
            background-color: rgba(236, 240, 241, 1);
        }

        div {
            transition: all 0.3s ease;
        }
`

export const DropProfile = styled.div`
    display: flex;
    justify-content: flex-start;
    padding-top: 20px;
    padding-bottom: 10px;
    align-items: center;

    img {
        object-fit: contain;
        margin: 0;
        padding: 0;
        margin-left: 25px;
    }

    p {
        text-decoration: none;
        margin-left: 20px;
    }
`

export const DropLogout = styled.div`
    display: flex;
    justify-content: flex-start;
    padding-top: 10px;
    padding-bottom: 15px;
    align-items: center;

    img {
        margin: 0;
        padding: 0;
        object-fit: contain;
        margin-left: 25px;
    }

    span {
        margin-left: 20px;
    }

    p {
        text-decoration: none;
    }
`
