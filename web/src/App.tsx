import React from 'react';
import './Scss/App.scss';
import { Routes, Route } from 'react-router-dom';
import Helmet from './Components/Helmet/Helmet';
import CookiesNotice from './Components/Cookies/Cookies';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Containers/Home/Home';
import Privacy from './Containers/Privacy/Privacy';
import Contact from './Containers/Contact/Contact';
import Vacancies from './Containers/Vacancies/Vacancies';

function App() {
  return (
    <>
      <Helmet />
      <CookiesNotice />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/werk" element={null} />
        <Route path="/aanpak" element={null} />
        <Route path="/over-ons" element={null} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/vacatures" element={<Vacancies />} />
        <Route path='/privacy' element={<Privacy />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
