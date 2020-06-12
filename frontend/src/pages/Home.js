import React from 'react'
import Styled from '@emotion/styled'
import ProductList from '../components/ProductList'
import ContentHeader from '../components/ContentHeader'

const Home = ()=> {
    return(
        <HomeStyled>
            <div className="container">
                <ContentHeader/>
                <ProductList/>
            </div>
        </HomeStyled>
    )
}

const HomeStyled = Styled.div`
    .container{
        display:flex;
        flex-direction:column;
        padding:70px 48px;
    }
`

export default Home;