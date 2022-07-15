import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as Go from 'react-icons/go';
import './Header.scss'

import AnimatedLogo from '../AnimatedLogo/AnimatedLogo'

function Header() {
  const [overlay, setOverlay] = useState<boolean>(false);
  const overlaySetter = () => setOverlay(!overlay);

  return (
    <div id='headerContainer'>
      <div className={overlay ? 'menuOverlay active' : 'menuOverlay'}>
        <span><Go.GoThreeBars className='hamMenu' onClick={overlaySetter} /></span>
        <ul>
          <Link to='/' onClick={overlaySetter}>Home</Link>
          <Link to='/werk' onClick={overlaySetter}>Werk</Link>
          <Link to='/aanpak' onClick={overlaySetter}>Aanpak</Link>
          <Link to='/over-ons' onClick={overlaySetter}>Over Ons</Link>
          <Link to='/contact' onClick={overlaySetter}>Contact</Link>
          <Link to='/vacatures' onClick={overlaySetter}>Vacatures</Link>
        </ul>
      </div>
      <header id='cHeader'>
        <Link to='/' id='headerLogo'><AnimatedLogo /></Link>
        <div className='headerLinkWrapper'>
          <Link to='/werk'>Werk</Link>
          <Link to='/aanpak'>Aanpak</Link>
          <Link to='/over-ons'>Over Ons</Link>
          <Link to='/contact'>Contact</Link>
          <Link to='/vacatures'>Vacatures</Link>
        </div>
        <Go.GoThreeBars className='hamMenu' onClick={overlaySetter} />
      </header>
    </div>
  )
}

export default Header;
