import React from 'react'
import searchBarSVG from '../../assets/svgs/search_icon.svg'
import { InputContainer, SearchbarContainer, FilterContainer, SearchbarWrapper } from '../../style/Searchbar';

export const Searchbar = () => {

    return (<>
        <SearchbarContainer>
            <SearchbarWrapper>

            <InputContainer>
                    <img src={searchBarSVG} alt="Search"/><input type="text" placeholder="Search posts..." />
            </InputContainer>
            <FilterContainer>
                <ul>
                    <li>Liked</li>
                    <li>Friends</li>
                    <li>Follow</li>
                </ul>
            </FilterContainer> 
            </SearchbarWrapper>
        </SearchbarContainer>
    </>)
}