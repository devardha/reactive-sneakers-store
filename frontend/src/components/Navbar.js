import React from 'react'
import Styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import Banner from './Banner'
import {  ShoppingCart } from 'react-feather'
import { connect } from 'react-redux'

const Navbar = ({cart})=> {

    return(
        <>
        <Banner/>
        <NavbarStyled>
            <div className="navbar-secondary">
                <div className="nav-icons">
                    <Link to="/cart">
                    <ShoppingCart className="cart-icon"/>
                    {
                        cart.length ?
                        <div className="cart-counter">{cart.length}</div>
                        : ''
                    }
                    </Link>
                </div>
                <li>Login</li>
                <li>Sign Up</li>
            </div>
            <div className="navbar-main">
                <ul className="nav-links">
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/mens"><li>Mens</li></Link>
                    <Link to="/womens"><li>Womens</li></Link>
                    <Link to="/"><li>Outwear</li></Link>
                    <Link to="/"><li>Blog</li></Link>
                </ul>
            </div>
        </NavbarStyled>
        </>
    )
}

const NavbarStyled = Styled.header`
    display:flex;
    flex-direction:column;
    z-index:5;
    position:relative;

    li{
        list-style:none;
        margin-left:.75rem;
    }

    .navbar-secondary{
        height:40px;
        width:100%;
        border-top:1px solid #ddd;
        background-color:#fff;
        display:flex;
        justify-content:flex-end;
        align-items:center;
        padding:0 48px;
        color:#888;

        .nav-icons{
            position:relative;
            transform:translateY(2px);

            .cart-counter{
                width:15px;
                height:15px;
                background-color:red;
                border-radius:50%;
                position:absolute;
                display:flex;
                justify-content:center;
                align-items:center;
                font-size:10px;
                color:#fff;
                font-weight:bold;
                top:-2px;
                right:8px;
            }
        }
        .cart-icon{
            width:1rem;
            margin-right:1rem;
            color:#888;

            &:hover{
                color:#000;
            }
        }

        li{
            font-size:.9rem;
            cursor:pointer;
            
            &:hover{
                color:#000;
            }
        }
    }
    
    .navbar-main{
        display:flex;
        padding:0 10%;
        height:70px;
        width:100%;
        align-items:center;
        justify-content:center;
        font-size:.9rem;
        background-color:#fff;
        border-bottom:1px solid #ddd;
        border-top:1px solid #ddd;

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
    }
`

const mapStateToProps = state => ({
    cart: state.cart.cart
})

export default connect(mapStateToProps)(Navbar);