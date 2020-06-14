import React, { useEffect, useState } from 'react'
import Styled from '@emotion/styled'
import Button from '../components/Button'
import Spinner from '../components/Spinner'
import { connect } from 'react-redux'
import { addItem } from '../redux/actions/addActions'

const Product = (props)=> {

    let [ data, setData ] = useState();
    const [ loading, setLoading ] = useState(true);

    // Get Slug Params
    const {slug} = props.match.params

    useEffect(() => {
        let mounted = true;

        async function fetchData(){
                await fetch(`http://localhost:5000/api/products/${slug}`).then(res => res.json()).then(data => {
                    if(mounted){
                        setData(data)
                    }
                });
                setLoading(false)
        }
        fetchData();
        
        return () => mounted = false;

    })    

    if(!loading){
        return(
            <ProductStyled>
                <div className="container">
                    <div className="product-image">
                        <img src={data[0].photo} alt=""/>
                    </div>
                    <div className="product-details">
                        <div className="detail-header">
                            <h1 className="product-name">{data[0].product_name}</h1>
                            <h2 className="product-categories">{data[0].category[0]}</h2>
                            <div className="image-select">
                                <li><img src={data[0].photo} alt=""/></li>
                                <li><img src={data[0].photo} alt=""/></li>
                                <li><img src={data[0].photo} alt=""/></li>
                                <li><img src={data[0].photo} alt=""/></li>
                            </div>
                        </div>
                        <Button onClick={() => props.addItemToCart({product_id: data[0]._id, product_name: data[0].product_name, product_category: data[0].category[0] , item: 1, total_price: data[0].price, photo: data[0].photo})}>Add to Cart</Button>
                    </div>
                </div>
            </ProductStyled>
        )
    }else{
        return(
            <ProductStyled>
                <Spinner/>
            </ProductStyled>
        )
    }
}

const ProductStyled = Styled.div`
    .container{
        display:flex;
        padding:50px 48px;
        min-height:100vh;
        justify-content:center;
    }

    .product-image{
        width:40%;
        margin-right:2rem;
    }

    .detail-header{
        margin-bottom:2rem;

        .image-select{
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
            grid-gap: 1rem;
            margin-top:1rem;

            li{
                height:100px;
                cursor:pointer;
                list-style:none;

                img{
                    width:100%;
                    height:100%;
                    object-fit:cover;
                }
            }
        }
    }
    .product-details{
        width:40%;

        .product-name{
            font-size:2rem;
            margin-bottom:.5rem;
        }
        .product-categories{
            font-size:1.2rem;
            color:#aaa;
            margin-bottom:.5rem;
        }
    }
`
const mapDispatchToProps = dispatch => ({
    addItemToCart: cart => dispatch(addItem(cart)),
});


const mapStateToProps = state => ({
    cart: state.cart.cart
})

export default connect(mapStateToProps, mapDispatchToProps )(Product);
