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

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Router>
        <div className="header">
                <Navbar/>  
        </div>
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/mens" exact component={Mens}/>
            <Route path="/womens" exact component={WomenShoes}/>
        </Switch>
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
