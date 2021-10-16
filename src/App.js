import React, { useState, useEffect, useLayoutEffect } from 'react';
import Dropdown from './components/Dropdown';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import GlobalStyle from './globalStyles';
import { Switch, Route, useLocation } from 'react-router-dom';
import Home from './pages';
import About from './pages/About';
import Homes from './pages/Homes';
import Rentals from './pages/Rentals';
import Enter from './pages/Agent';
import Agent from './pages/Agent';
import Sales from './pages/Sales';
import Contact from './pages/Contact';
import Login from './containers/Admin/login';

import Aos from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  console.log(location.pathname);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useLayoutEffect(
    () => {
      window.scrollTo(0, 0);
    },
    [location.pathname]
  );

  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/homes' component={Homes} />
        <Route path='/rentals' component={Rentals} />
        <Route path='/sales' component={Sales} />
        <Route path='/enter' component={Enter} />
        <Route path='/signup' component={Contact} />
        <Route path='/login' component={Login} />
        <Route path='/agent' component={Agent} />


      </Switch>
      <Footer />
    </>
  );
}

export default App;
