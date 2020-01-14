import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Login from './components/login_page/login';
import Home from './components/home_page/home';
import Cart from './components/cart_page/cart';
import Header from './components/base/header';



function App() {

  return (
    <div className="App">
      <BrowserRouter>
          <Route path={'/'} component={ Header } />
            <Route path={'/login'} component={ Login } />
            <Route path={'/home'} component={ Home } />
            <Route path={'/cart'} component={ Cart } />
      </BrowserRouter>
    </div>
  );
}

export default App;
