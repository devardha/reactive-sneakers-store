import React from 'react'
import Styled from '@emotion/styled'

const Banner = ()=> {
    return(
        <BannerStyled>
            <p>Source code available on GitHub</p>
        </BannerStyled>
    )
}

const BannerStyled = Styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    font-weight:300;
    height:50px;
    width:100%;
    background-color: rgb(247, 247, 247);
`

export default Banner;