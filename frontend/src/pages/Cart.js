import React from 'react'
import Styled from '@emotion/styled'
import CartItem from '../components/CartItem'

const Cart = () => {
    return(
        <CartStyled>
            <div className="container">
                <div className="cart">
                    <h2>Cart</h2>
                    <CartItem/>
                    <CartItem/>
                </div>
                <div className="checkout">
                    
                </div>
            </div>
        </CartStyled>
    )
}

const CartStyled = Styled.div`
    .container{
        display:flex;
        padding:50px 48px;
        min-height:100vh;
        justify-content:center;
        max-width:1100px;
        margin: 0 auto;
    }

    .cart{
        width:70%;
        margin-right:2rem;

        h2{
            font-size:1.5rem;
            margin-bottom:2rem;
        }
    }
    .checkout{
        width:30%;
    }
`

export default Cart;