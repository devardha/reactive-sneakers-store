import React from 'react'
import Styled from '@emotion/styled'
import ContentHeader from '../components/ContentHeader'
import ProductList from '../components/ProductList'
import { Helmet } from 'react-helmet'

const WomenShoes = ()=> {
    return(
        <WomenShoestyled>
            <Helmet>
                <title>Women's Sneaker - Reactive Sneaker Store</title>
            </Helmet>
            <div className="container">
                <ContentHeader gender={'WOMEN'} sort={true}/>
                <ProductList gender={'WOMEN'}/>
            </div>
        </WomenShoestyled>
    )
}

const WomenShoestyled = Styled.div`
    .container{
        display:flex;
        flex-direction:column;
        padding:50px 48px;
        min-height:70vh;
    }
`

export default WomenShoes;