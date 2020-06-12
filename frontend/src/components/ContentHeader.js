import React, { useState } from 'react'
import Styled from '@emotion/styled'
import Button from './Button'
import { connect } from 'react-redux'
import { sortByPriceLow, sortByPriceHigh } from '../redux/actions/sortActions'

const ContentHeader = (props) => {

    const [ open, setOpen ] = useState(false);

    return(
        <ContentHeaderStyled>
            <Button className="sort" onClick={() => setOpen(!open)}>
                Sort
                {
                    open
                    ?
                    <div className="sort-menu">
                        <ul>
                            <li value="Featured">Featured</li>
                            <li value="Newest">Newest</li>
                            <li value="priceHigh" onClick={props.priceHigh}>Price: High-Low</li>
                            <li value="priceLow" onClick={props.priceLow}>Price: Low-High</li>
                        </ul>
                    </div>
                    : ''
                }
            </Button>
        </ContentHeaderStyled>
    )
}

const mapStateToProps = (state => {
    return {
        sortby: state.sortby.sortby,
    };
});

const mapDispatchToProps = dispatch => ({
    priceLow: () => dispatch(sortByPriceLow()),
    priceHigh: () => dispatch(sortByPriceHigh()),
});

export default connect(mapStateToProps, mapDispatchToProps )(ContentHeader);

const ContentHeaderStyled = Styled.div`
    display:flex;
    margin-bottom:2rem;
    position:relative;
    font-size:1.2rem;

    .sort{
        margin-left:auto;

        &:focus{
            .sort-menu{
                display:block;
            }
        }
        .sort-menu{
        position:absolute;
        display:none;
        right:0;
        background:#fff;
        top:4rem;
        text-align:right;
        padding-left: 2.5rem;
        padding-bottom:1rem;
        border-radius:0rem 0rem 0rem 1.5rem;

        ul{
            li{
                margin-bottom:.5rem;

                &:hover{
                    color:#999;
                    cursor:pointer;
                }
            }
        }
    }

`