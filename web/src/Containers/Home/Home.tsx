import React from 'react';
import './Home.scss';
import { Link } from 'react-router-dom';
import RotatingWords from '../../Components/RotatingWords/RotatingWords';

import heroTop from '../../Assets/hero-top.svg';
import heroBottom from '../../Assets/waves/hero-bottom.svg';
import mixedWaveSeperator from '../../Assets/waves/mixed-wave-seperator1.svg';
import swave1 from '../../Assets/waves/swave-1.svg';
import swave2 from '../../Assets/waves/swave-2.svg';

function Home() {
  return (
    <div className='homeContainer'>
      <section className='homeHero'>
        <div className='heroWrapper'>
          <div className='heroText'>
            <h1 className='deskOnly'>Wij zijn de <RotatingWords wordsList={['moderne', 'lokale', 'goedkoopste']} duration={5} /> <br /> solutie.</h1>
            <h1 className='tabletDown'>Wij zijn de <span className='specialColor'>moderne</span> solutie.</h1>
            <h3>Bouw samen met ons naar een nieuwe toekomst. <br />
              Wij helpen jou bedrijf <br />
              een nieuwe online identiteit te vormen.
            </h3>
          </div>
          <div className='heroImages'>
            <img src={heroBottom} alt='hero bottom layer' />
            <img src={heroTop} id='heroTopImg' alt='hero top layer' />
          </div>
        </div>
        <img id='mixedWaveSeperator' src={mixedWaveSeperator} alt='' />
      </section>
      <section className='homeOfferings'>
        <h2>Wat hebben wij te bieden?</h2>
        <div className='offeringsWrapper'>
          <span className='offering'>
            <h3><Link to="/aanpak#rebranding">Rebranding</Link></h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore .</p>
            <img src={swave1} alt="" />
          </span>
          <span className='offering'>
            <h3><Link to="/aanpak#marketing">Marketing</Link></h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            <img src={swave2} alt="" />
          </span>
          <span className='offering'>
            <h3><Link to="/aanpak#onderhoud">Onderhoud</Link></h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore .</p>
            <img src={swave1} alt="" />
          </span>
        </div>
        <Link to='/contact' className='contactButton'>Neem contact op</Link>
      </section>
    </div>
  )
}

export default Home;
