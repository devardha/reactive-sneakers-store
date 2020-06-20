import React from 'react'
import Styled from '@emotion/styled'
import { connect } from 'react-redux'
import Button from './Button'
import { updateQty } from '../redux/actions/updateQtyActions'
import { removeItem } from '../redux/actions/removeActions'

const CartItem = ({name, index, category, photo, price, updateQty, removeItem, id, cart})=> {

    const initialQty = cart[index].item
    const initialPrice = price * initialQty;

    return(
        <CartItemStyled>
            <div className="item-image">
                <img src={photo[0]} alt=""/>
            </div>
            <div className="item-details">
                <h2>{name}</h2>
                <span className="item-price">${initialPrice.toString().slice(0, 5)}</span>
                <h3>{category}</h3>
                <div className="select">
                    Quantity
                    <select onChange={(e) => updateQty({product_id: id, item: parseInt(e.target.value), product_index: index, total_price: parseInt(e.target.value*price)})}>
                        <option value="1" selected={ initialQty === 1 ? true: false } >1</option>
                        <option value="2" selected={ initialQty === 2 ? true: false } >2</option>
                        <option value="3" selected={ initialQty === 3 ? true: false } >3</option>
                        <option value="4" selected={ initialQty === 4 ? true: false } >4</option>
                        <option value="5" selected={ initialQty === 5 ? true: false } >5</option>
                        <option value="6" selected={ initialQty === 6 ? true: false } >6</option>
                        <option value="7" selected={ initialQty === 7 ? true: false } >7</option>
                        <option value="8" selected={ initialQty === 8 ? true: false } >8</option>
                        <option value="9" selected={ initialQty === 9 ? true: false } >9</option>
                        <option value="10" selected={ initialQty === 10 ? true: false } >10</option>
                    </select>
                </div>
                <Button className="checkout-btn" onClick={() => removeItem(index)}>Remove Item</Button>
            </div>
        </CartItemStyled>
    )
}

const CartItemStyled = Styled.div`
    display:flex;
    padding-bottom:2rem;
    margin-bottom:2rem;
    border-bottom:1px solid #eee;

    .checkout-btn{
        padding: .5rem 1rem;
        font-size: .8rem;
        position: absolute;
        bottom: 3px;
    }
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
const mapDispatchToProps = dispatch => ({
    updateQty: (product) => dispatch(updateQty(product)),
    removeItem: (content) => dispatch(removeItem(content))
});

const mapStateToProps = (state => {
    return {
        cart: state.cart.cart,
    };
});

export default connect(mapStateToProps, mapDispatchToProps )(CartItem);