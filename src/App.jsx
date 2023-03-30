import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import 'aos/dist/aos.css';
import './css/style.css';

import AOS from 'aos';

// import Home from './pages/Home';
// import UnderConstruction from './pages/UnderConstruction';
// import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';
import favicon from './images/Favicon_v1.png'

function App() {

  const location = useLocation();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 600,
      easing: 'ease-out-sine',
    });
  });

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <head>
        <link rel="icon" type="image/png" href={favicon} />
      </head>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
