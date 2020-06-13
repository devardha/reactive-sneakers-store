import React from 'react'
import Styled from '@emotion/styled'

const Hero = ()=> {
    return(
        <HeroStyled>
            <h1>REACTIVE</h1>
            <img alt="hero" src="https://www.wallpaperflare.com/static/1002/354/328/silver-surfer-comic-books-marvel-super-heroes-space-wallpaper.jpg"></img>
        </HeroStyled>
    )
}

const HeroStyled = Styled.div`
    width:100%;
    height:400px;
    background-color:#000;
    display:flex;
    justify-content:center;
    align-items:center;
    margin-bottom:2rem;
    position:relative;
    
    img{
        object-fit:cover;
        position:absolute;
        top:0;
        width:100%;
        height:100%;
    }
    
    h1{
        font-weight:800;
        text-transform:uppercase;
        position:relative;
        z-index:1;
        font-size:4rem;
        font-style:italic;

        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: #fff;

        text-shadow:
        4px 4px 0 #fff,
        -1px -1px 0 #fff,  
        1px -1px 0 #fff,
        -1px 1px 0 #fff,
        1px 1px 0 #fff;
    }

`

export default Hero;