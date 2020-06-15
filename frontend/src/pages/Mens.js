import React from 'react'
import Styled from '@emotion/styled'
import ContentHeader from '../components/ContentHeader'
import ProductList from '../components/ProductList'
import { Helmet } from 'react-helmet'

const Mens = ()=> {
    return(
        <MensStyled>
            <Helmet>
                <title>Men's Sneaker - Reactive Sneaker Store</title>
            </Helmet>
            <div className="container">
                <ContentHeader gender={'MEN'} sort={true}/>
                <ProductList gender={'MEN'}/>
            </div>
        </MensStyled>
    )
}

const MensStyled = Styled.div`
    .container{
        display:flex;
        flex-direction:column;
        padding:50px 48px;
        min-height:70vh;
    }
`

export default Mens;