import React, { Component } from 'react'
import Styled from '@emotion/styled'
import { connect } from 'react-redux'
import { fetchPosts } from '../redux/actions/postActions'
import { Link } from "react-router-dom";

class ProductList extends Component{

    componentDidMount(){
        this.props.fetchPosts();
    }

    render(){

        const data = this.props.posts
        const sortby = this.props.sortby

        function sortByPriceHigh( a, b ) {
            if ( a.price < b.price ){
              return 1;
            }
            if ( a.price > b.price ){
              return -1;
            }
            return 0;
        }
        function sortByPriceLow( a, b ) {
            if ( a.price < b.price ){
              return -1;
            }
            if ( a.price > b.price ){
              return 1;
            }
            return 0;
        }

        // Sort Conditioning
        function sorting(e){
            let result;

            if(e === 'PRICE_HIGH'){
                result = sortByPriceHigh;
            }
            else if(e === 'PRICE_LOW'){
                result = sortByPriceLow;
            }
            else{
                result = sortByPriceLow;
            }

            return result;
        }

        const sorted = data.sort( sorting(sortby) );

        const {gender} = this.props;

        // Filtering Men/Women
        function filtering(e){
            let result;

            if(e === 'MEN'){
                result = sorted.filter(function (item){
                    return item.category.includes('Men');
                })
            }
            else if(e === 'WOMEN'){
                result = sorted.filter(function (item){
                    return item.category.includes('Women');
                })
            }
            else{
                result = sorted.filter(function (item){
                    return item.category.includes('');
                })
            }

            return result;
        }

        function limitItem(e){
            let result;

            if(e){
                result = 4
            }
            else{
                result = undefined
            }

            return result;
        }

        return(
            <ProductListStyled>
                <ul className="grid-wrap">
                    {
                        filtering(gender).slice(0, limitItem(this.props.limit)).map((product, index) => {
                            return(
                                <li key={index}>
                                    <img src={product.photo} alt="product"/>
                                    <div className="product-details">
                                        <Link to={`/product/${product.slug}`} className="product-name">{product.product_name}</Link>
                                        <span className="product-category">{product.category[0]}</span>
                                        <span className="product-price">${product.price}</span>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </ProductListStyled>
        )

    }
}

const ProductListStyled = Styled.div`
    .grid-wrap{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        grid-gap: 1rem;

        li{
            height:300px;
            margin-bottom:1.5rem;

            img{
                width:100%;
                height:80%;
                object-fit:cover;
                margin-bottom:.25rem;
            }
            .product-details{
                display:flex;
                flex-direction:column;
                position:relative;

                .product-name{
                    font-size:1.2rem;
                    color:#000;
                    margin-bottom:4px;
                }
                .product-category{
                    font-size:1.2rem;
                    color:#aaa;
                }
                .product-price{
                    font-size:1.2rem;
                    color:#000;
                    position:absolute;
                    top:0;
                    right:0;
                }
            }
        }
    }
`

const mapStateToProps = state => ({
    posts: state.posts.items,
    sortby: state.sortby.sortby
})

export default connect(mapStateToProps, { fetchPosts })(ProductList);