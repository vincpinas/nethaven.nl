import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Helmet from './Components/Helmet/Helmet';
import CookiesNotice from './Components/Cookies/Cookies';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Containers/Home/Home';
import Privacy from './Containers/Privacy/Privacy';
import './Scss/App.scss';
import Contact from './Containers/Contact/Contact';

function App() {
  return (
    <>
      <Helmet />
      <CookiesNotice />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/work" element={null} />
        <Route path="/approach" element={null} />
        <Route path="/about-us" element={null} /> */}
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/vacancies" element={null} /> */}
        <Route path='/privacy' element={<Privacy />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
