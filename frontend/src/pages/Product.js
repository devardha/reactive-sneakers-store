import React, { useEffect, useState } from 'react'
import Styled from '@emotion/styled'
import Button from '../components/Button'
import Spinner from '../components/Spinner'
import { connect } from 'react-redux'
import { addItem } from '../redux/actions/addActions'
import {Helmet} from 'react-helmet'

const Product = (props)=> {

    let [ data, setData ] = useState();
    const [ loading, setLoading ] = useState(true);
    const [ size, setSize ] = useState()
    const [ imageIndex, setImageIndex ] = useState(0);

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
                <Helmet>
                    <title>{data[0].product_name} - Reactive Sneaker Store</title>
                </Helmet>
                <div className="container">
                    <div className="product-image">
                        <img src={data[0].photo[imageIndex]} alt=""/>
                    </div>
                    <div className="product-details">
                        <div className="detail-header">
                            <h1 className="product-name">{data[0].product_name}</h1>
                            <h2 className="product-categories">{data[0].category[0]}</h2>
                            <div className="image-select">
                                <li><img src={data[0].photo[0]} alt="product preview" onClick={() => setImageIndex(0)}/></li>
                                <li><img src={data[0].photo[1]} alt="product preview" onClick={() => setImageIndex(1)}/></li>
                                <li><img src={data[0].photo[2]} alt="product preview" onClick={() => setImageIndex(2)}/></li>
                                <li><img src={data[0].photo[3]} alt="product preview" onClick={() => setImageIndex(3)}/></li>
                            </div>
                            <div className="size-select">
                                <div className={`option ${size === 37 ? 'selected' : ''} ${data[0].available_size.includes(37) ? '' : 'disabled'}`} onClick={ data[0].available_size.includes(37) ? () => setSize(37) : {} }>EUR 37</div>
                                <div className={`option ${size === 38 ? 'selected' : ''} ${data[0].available_size.includes(38) ? '' : 'disabled'}`} onClick={ data[0].available_size.includes(38) ? () => setSize(38) : {} }>EUR 38</div>
                                <div className={`option ${size === 39 ? 'selected' : ''} ${data[0].available_size.includes(39) ? '' : 'disabled'}`} onClick={ data[0].available_size.includes(39) ? () => setSize(39) : {} }>EUR 39</div>
                                <div className={`option ${size === 40 ? 'selected' : ''} ${data[0].available_size.includes(40) ? '' : 'disabled'}`} onClick={ data[0].available_size.includes(40) ? () => setSize(40) : {} }>EUR 40</div>
                                <div className={`option ${size === 41 ? 'selected' : ''} ${data[0].available_size.includes(41) ? '' : 'disabled'}`} onClick={ data[0].available_size.includes(41) ? () => setSize(41) : {} }>EUR 41</div>
                                <div className={`option ${size === 42 ? 'selected' : ''} ${data[0].available_size.includes(42) ? '' : 'disabled'}`} onClick={ data[0].available_size.includes(42) ? () => setSize(42) : {} }>EUR 42</div>
                            </div>
                        </div>
                        <Button disabled={ size ? false : true } onClick={() => props.addItemToCart({product_id: data[0]._id, product_name: data[0].product_name, product_category: data[0].category[0] , item: 1, default_price: data[0].price, total_price: data[0].price, photo: data[0].photo, size: size})}>Add to Cart</Button>
                    </div>
                </div>
            </ProductStyled>
        )
    }else{
        return(
            <>
            <ProductStyled>
                <Spinner/>
            </ProductStyled>
            </>
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
        .size-select{
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 7px;
            margin-top:1rem;

            .option{
                display:flex;
                align-items:center;
                justify-content:center;
                padding:0.5rem 1rem;
                border:1px solid #ddd;
                font-size:1.2rem;
                cursor:pointer;
                user-select:none;

                &:hover{
                    border-color:#000;
                }
            }
            .disabled{
                background-color:#f6f6f6;
                color:#999;
                cursor:unset;

                &:hover{
                    border-color:#f6f6f6;
                    border:1px solid #ddd;
                }
            }
            .selected{
                background-color:#000;
                color:#fff;
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
