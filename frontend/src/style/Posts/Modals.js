import styled from 'styled-components'

export const ExternalContainer = styled.div`
    display: flex;
    background: rgba(0, 0, 0, 0.8);
    height: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    justify-content: center;
    align-items: center;
`

export const ModalContainerMenu = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background: #FFFFFF;
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2), 0px 10px 20px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    z-index: 42;
    width: 180px;
    height: 96px;

    :hover {
        background: #F2F2F2;
    }
`

export const CloseButtonContainer = styled.div`
    background: transparent;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-around;
    align-items: flex-start;
    z-index: 41;
    width: calc(560px + 11.5px);
    height: calc(406px + 11.5px);  

    #closeButton {
        border: none;
        background: transparent;
        color: white;
        font-size: 1.6rem;
    }  
`

export const ModalContainerCreatePost = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background: #FFFFFF;
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2), 0px 10px 20px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    z-index: 42;
    width: 560px;
    height: 100%;
    
    form {
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      justify-content: space-evenly;
      width: 100%;
      height: 100%;
      padding: 30px;
      
      input {
        text-decoration: none;
        background: none;
        border: none;
        margin-bottom: 30px;
        margin-top: 30px;
      }
      input[type="file"] {
        visibility: hidden;      
      }
    }


`

export const ModalContainerDetails = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2), 0px 10px 20px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    z-index: 43;
    width: 900px;
    height: 560px;
`

export const ExternalContainerLoader = styled(ExternalContainer)`

    top: 80px;
    background: #F2F2F2;
`

export const Loader = styled.div`    
    background: transparent;
    z-index: 43;
    opacity: 0.2;

    &#loader {
    font-size: 8px;
    margin: 50px auto;
    text-indent: -9999em;
    width: 11em;
    height: 11em;
    border-radius: 50%;
    background: #0a0a0a;
    background: -moz-linear-gradient(left, #0a0a0a 10%, #F2F2F2 42%);
    background: -webkit-linear-gradient(left, #0a0a0a 10%, #F2F2F2 42%);
    background: -o-linear-gradient(left, #0a0a0a 10%, #F2F2F2 42%);
    background: -ms-linear-gradient(left, #0a0a0a 10%, #F2F2F2 42%);
    background: linear-gradient(to right, #0a0a0a 10%, white 42%);
    position: relative;
    -webkit-animation: load3 1.4s infinite linear;
    animation: load3 1.4s infinite linear;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
    }
    &#loader:before {
    width: 50%;
    height: 50%;
    background: #0a0a0a;
    border-radius: 100% 0 0 0;
    position: absolute;
    top: 0;
    left: 0;
    content: '';
    }
    &#loader:after {
    background: white;
    width: 75%;
    height: 75%;
    border-radius: 50%;
    content: '';
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    }
    @-webkit-keyframes load3 {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
    }
    @keyframes load3 {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
    }

`

