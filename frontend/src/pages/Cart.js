import React from 'react'
import Styled from '@emotion/styled'
import CartItem from '../components/CartItem'
import { connect } from 'react-redux'

const Cart = ({cart}) => {

    let shippingCost = 8.00;
    let taxCost = 0;

    // Finding the damn price of each product
    function getPrice(item){
        return item.total_price
    }
    console.log(cart)

    // Calculation
    const foundPrice = cart.map(getPrice);
    const sumPrice = foundPrice.reduce((a, b) => a + b, 0);
    
    const totalPrice = sumPrice + shippingCost + taxCost;

    return(
        <CartStyled>
            <div className="container">
                <div className="cart">
                    <h2>Cart</h2>
                    {
                        cart.length ?
                        cart.map((item, index) => {
                            return(
                                <CartItem key={index} index={index} id={item.product_id} name={item.product_name} quantity={item.item} category={item.product_category} photo={item.photo} price={item.default_price}/>
                            )
                        })
                        : <div>There are no items in your cart</div>
                    }
                </div>
                <div className="checkout">
                    <div className="checkout-box">
                        <h2>Summary</h2>
                        <div className="subtotal">
                            <span>Subtotal</span>
                            <span className="detail-count">${totalPrice}</span>
                        </div>
                        <div className="shipping">
                            <span>Estimated Shipping</span>
                            <span className="detail-count">${shippingCost}</span>
                        </div>
                        <div className="tax">
                            <span>Estimated tax</span>
                            <span className="detail-count">{taxCost === 0 ? '-' : `$${taxCost}`}</span>
                        </div>
                        <div className="total-cost">
                            <span>Total</span>
                            <span className="detail-count">${totalPrice}</span>
                        </div>
                    </div>
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
    h2{
        font-size:1.5rem;
        margin-bottom:2rem;
    }
    .cart{
        width:70%;
        margin-right:2rem;

    }
    .checkout{
        width:30%;

        .subtotal, .shipping, .tax, .total-cost{
            display:flex;
            justify-content:space-between;
            margin-bottom:1rem;
        }
        .total-cost{
            margin-top:2rem;
            padding: 1rem 0;
            border-top:1px solid #ddd;
            border-bottom:1px solid #ddd;

            span{
                font-size:1.1rem;
            }
        }
    }
`
const mapStateToProps = state => ({
    cart: state.cart.cart
})

export default connect(mapStateToProps)(Cart);