import React from 'react'
import Styled from '@emotion/styled'

const CartItem = ()=> {
    return(
        <CartItemStyled>
            <div className="item-image">
                <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b471b02a-767d-4ac0-bc96-c7a8c1f117e7/lebron-17-graffiti-basketball-shoe-DkNN8W.jpg" alt=""/>
            </div>
            <div className="item-details">
                <h2>Lebron 17 'Graffiti'</h2>
                <span className="item-price">$170</span>
                <h3>Men's Shoe</h3>
                <div className="select">
                    Quantity
                    <select>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                </div>
            </div>
        </CartItemStyled>
    )
}

const CartItemStyled = Styled.div`
    display:flex;
    padding-bottom:2rem;
    margin-bottom:2rem;
    border-bottom:1px solid #eee;

    .item-image{
        width:200px;
        margin-right:2rem;
    }
    .item-details{
        position:relative;
        width:100%;
        color:#aaa;

        .item-price{
            position:absolute;
            top:0;
            right:0
        }
        h2{
            font-size:1.2rem;
            margin-bottom:.5rem;
            color:#000;
        }
        h3{
            margin-bottom:.5rem;
        }
        .select{
            display:flex;

            select{
                margin-left:.5rem;
            }
        }
    }
`

export default CartItem;