import React from 'react'
import Styled from '@emotion/styled'
import ProductList from '../components/ProductList'
import ContentHeader from '../components/ContentHeader'
import Hero from '../components/Hero'

const Home = ()=> {
    return(
        <HomeStyled>
            <div className="container">
            <Hero/>
                <ContentHeader gender={'MEN'} sort={false}/>
                <ProductList gender={'MEN'} limit={true}/>
                <ContentHeader gender={'WOMEN'} sort={false}/>
                <ProductList gender={'WOMEN'} limit={true}/>
            </div>
        </HomeStyled>
    )
}

const HomeStyled = Styled.div`
    .container{
        display:flex;
        flex-direction:column;
        padding:50px 48px;
        min-height:70vh;
    }
`

export default Home;