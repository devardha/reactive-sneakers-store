import React from 'react'
import Styled from '@emotion/styled'
import ContentHeader from '../components/ContentHeader'
import ProductList from '../components/ProductList'

const WomenShoes = ()=> {
    return(
        <WomenShoestyled>
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
    }
`

export default WomenShoes;