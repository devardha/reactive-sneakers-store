import React from 'react'
import Styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import {  ShoppingCart } from 'react-feather'
import { connect } from 'react-redux'

const Navbar = ({cart})=> {

    return(
        <>
        <NavbarStyled>
            <span className="navbar-brand">
                <Link to="/">Reactive</Link>
            </span>
            <ul className="nav-links">
                <Link to="/"><li>Home</li></Link>
                <Link to="/mens"><li>Mens</li></Link>
                <Link to="/womens"><li>Womens</li></Link>
                <Link to="/"><li>Outwear</li></Link>
                <Link to="/"><li>Blog</li></Link>
            </ul>
            <div className="nav-right">
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
                <li>Signup</li>
            </div>
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
    background-color:#fff;
    border-bottom:1px solid #ddd;
    border-top:1px solid #ddd;

    .navbar-brand{
        font-weight:800;
        text-transform:uppercase;
        position:absolute;
        left:48px;
        z-index:1;
        font-size:1.5rem;
        font-style:italic;
        color:#000;

    }
    .nav-right{
        position:absolute;
        right:48px;
        align-items:center;
        display:flex;

        li{
            list-style:none;
            padding: .5rem 1rem;
            color:#fff;
            background-color:#000;
            margin-left:.5rem;

            &:hover{
                background-color:#666;
                color:#fff;
            }
        }
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
        width:1.2rem;
        margin-right:1rem;
        color:#000;

        &:hover{
            color:#666;
        }
    }

    li{
        font-size:.9rem;
        cursor:pointer;

        &:hover{
            color:#000;
        }
    }
`

const mapStateToProps = state => ({
    cart: state.cart.cart
})

export default connect(mapStateToProps)(Navbar);