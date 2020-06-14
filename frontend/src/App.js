import React from 'react';
import './App.scss'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

//Page Component
  import Home from './pages/Home'
import Mens from './pages/Mens'

//Shared Component
import Navbar from './components/Navbar'

import store from './redux/store'
import WomenShoes from './pages/WomenShoes';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Banner from './components/Banner'
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Router>
        <ScrollToTop>
        <div className="header">
          <Navbar/>
        </div>
        <Banner/>
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/mens" exact component={Mens}/>
            <Route path="/womens" exact component={WomenShoes}/>
            <Route path="/cart" exact component={Cart}/>
            <Route path="/product/:slug" exact component={Product}/>
        </Switch>
        </ScrollToTop>
      </Router>
      
      <style>{`
      
      .header{
        position:sticky;
        top:0;
        z-index:2;
      }
  
      `}</style>
    </div>
    </Provider>
  );
}

export default App;
