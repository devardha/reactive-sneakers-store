import React from 'react'
import Styled from '@emotion/styled'

const Button = (props)=> {
    return(
        <ButtonStyled {...props}/>
    )
}

const ButtonStyled = Styled.button`
    background-color:#000;
    color:#fff;
    padding: .75rem 1.5rem;
    border-radius:4px;
    border:1px solid #eee;
    font-size:1rem;

    &:disabled{
        background-color:#f6f6f6;
        color:#999;

        &:hover{
        background-color:#f6f6f6;
    }
    }
    &:focus{
        outline:none;
    }
    &:hover{
        background-color:#666;
    }
    &:active{
        background-color:#777;
    }
`

export default Button;