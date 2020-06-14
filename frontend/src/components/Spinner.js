import React from 'react'
import Styled from '@emotion/styled'

const Spinner = () => {
    return(
        <SpinnerStyled>
            <div className="container loader-container">
                <div className="loader"></div>
            </div>
        </SpinnerStyled>
    )
}

const SpinnerStyled = Styled.div`
    .loader-container{
        display:flex;
        justify-content:center;
        padding-top:50px;
        align-items:center;
    }
`

export default Spinner;