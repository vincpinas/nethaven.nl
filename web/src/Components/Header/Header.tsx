import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as Go from 'react-icons/go';
import './Header.scss'

import AnimatedLogo from '../AnimatedLogo/AnimatedLogo'

function Header() {
  const [overlay, setOverlay] = useState<boolean>(false);
  const overlaySetter = () => setOverlay(!overlay);

  return (
    <header id='cHeader'>
      <div className={overlay ? 'menuOverlay active' : 'menuOverlay'}>
        <span><Go.GoThreeBars className='hamMenu' onClick={overlaySetter} /></span>
        <ul>
          <Link to='/' onClick={overlaySetter}>Home</Link>
          <Link to='/work' onClick={overlaySetter}>Werk</Link>
          <Link to='/approach' onClick={overlaySetter}>Aanpak</Link>
          <Link to='/about-us' onClick={overlaySetter}>Over Ons</Link>
          <Link to='/contact' onClick={overlaySetter}>Contact</Link>
          <Link to='/vacancies' onClick={overlaySetter}>Vacatures</Link>
        </ul>
      </div>
      <Link to='/' id='headerLogo'><AnimatedLogo /></Link>
      <div className='headerLinkWrapper'>
        <Link to='/work'>Werk</Link>
        <Link to='/approach'>Aanpak</Link>
        <Link to='/about-us'>Over Ons</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/vacancies'>Vacatures</Link>
      </div>
      <Go.GoThreeBars className='hamMenu' onClick={overlaySetter} />
    </header>
  )
}

export default Header;
