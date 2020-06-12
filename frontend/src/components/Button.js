import React from 'react'
import Styled from '@emotion/styled'

const Button = (props)=> {
    return(
        <ButtonStyled {...props}/>
    )
}

const ButtonStyled = Styled.button`
    background-color:#f6f6f6;
    padding: .75rem 1.5rem;
    border-radius:4px;
    border:1px solid #eee;
    font-size:1rem;

    &:focus{
        outline:none;
        background-color:#eee;
    }
`

export default Button;