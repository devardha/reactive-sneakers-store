import React, { useEffect } from 'react';
import './App.scss'
import { Switch, BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PublicRoute, LoginRoute } from './HOC/CustomRoutes'
import store from './redux/store'
import ScrollToTop from './components/ScrollToTop';

//Page Level Component
import Home from './pages/Home'
import Mens from './pages/Mens'
import WomenShoes from './pages/WomenShoes';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {

  useEffect(() => {
    const elem = document.getElementById('wrapper');

    window.onload = () => {
      if (elem) {
        elem.remove();
      }
    };
  })

  return (
    <Provider store={store}>
    <div className="App">
      <Router>
        <ScrollToTop>
        <Switch>
            <PublicRoute path="/" exact component={Home}/>
            <PublicRoute path="/mens" exact component={Mens}/>
            <PublicRoute path="/womens" exact component={WomenShoes}/>
            <PublicRoute path="/cart" exact component={Cart}/>
            <PublicRoute path="/product/:slug" exact component={Product}/>
            <LoginRoute path="/login" exact component={Login}/>
            <LoginRoute path="/signup" exact component={Signup}/>
        </Switch>
        </ScrollToTop>
      </Router>
    </div>
    </Provider>
  );
}

export default App;
