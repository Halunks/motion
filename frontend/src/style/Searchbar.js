import styled from 'styled-components'

export const SearchbarContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #eee;
    height: 80.5px;
    border-bottom: 1px solid rgba(0,0,0,0.05);
    background-color: #F2F2F2;
`;

export const SearchbarWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    width: 1152px;
`

export const InputContainer = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    input[type=text] {
        border: 0;
        background-color: #F2F2F2;   
    }

    input:focus {
        outline: none;
    }

    img { 
        margin-right: 20px;
        padding: 0;
    }
`;

export const FilterContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 225px;

    ul {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;
        width: 100%;
    }

    li {
        text-decoration: none;
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: 0.5;
        height: 100%;
        border-bottom: 2px solid #F2F2F2;
       
        :hover {
            opacity: 1;
            color: black;
            border-bottom: 2px solid black;
        }
    }
`;



