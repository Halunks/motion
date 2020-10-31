import React from 'react'
import { ExternalContainerLoader, Loader } from '../../style/Posts/Modals'

export const Loading = () => {

    return (
        <ExternalContainerLoader>
            <Loader id="loader" />
        </ExternalContainerLoader>        
    )
}