import React from 'react'
import Styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import Banner from './Banner'
import { Search } from 'react-feather'

const Navbar = ()=> {
    return(
        <>
        <Banner/>
        <NavbarStyled>
            <ul className="nav-links">
                <Link to="/"><li>Home</li></Link>
                <Link to="/mens"><li>Mens</li></Link>
                <Link to="/womens"><li>Womens</li></Link>
                <Link to="/"><li>Outwear</li></Link>
                <Link to="/"><li>Blog</li></Link>
            </ul>
            <Search className="search-icon"/>
            <input type="text" placeholder="Search" className="search-input"/>
        </NavbarStyled>
        </>
    )
}

const NavbarStyled = Styled.header`
    display:flex;
    padding:0 10%;
    height:70px;
    width:100%;
    align-items:center;
    justify-content:center;
    font-size:.9rem;
    z-index:5;
    background-color:#fff;
    border-bottom:1px solid #ddd;
    border-top:1px solid #ddd;

    .search-icon{
        position:absolute;
        right:220px;
        z-index:1;
        width:1rem;
    }
    .search-input{
        position:absolute;
        right:20px;
        border:1px solid #aaa;
        height:40px;
        border-radius:.25rem;
        padding:0 .5rem 0 2.75rem;
    }
    .nav-links{
        display:flex;

        li{
            letter-spacing:1px;
            padding:.75rem 1.25rem;
            text-transform:uppercase;
            font-weight:700;
            color:#000;
            position:relative;

            display:flex;
            justify-content:center;

            &:hover{
                &::before{
                display:block;
                content:'';
                width:100%;
                height:2px;
                background-color:#111;
                bottom:-14px;
                position:absolute;
            }
            }
        }
    }
`

export default Navbar