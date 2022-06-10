import React, { useRef } from 'react';
import Cookies from 'cookies-js';
import { Link } from 'react-router-dom';
import './Cookies.scss';


function CookiesNotice() {
  const cookiesSet = Cookies.get('cookies-accepted') ? Cookies.get('cookies-accepted') : false
  const el = useRef<HTMLDivElement>(null);
  const setCookiesAccepted = () => {
    Cookies.set('cookies-accepted', true);
    if (el.current) { el.current.style.display = 'none' }
  }

  return (
    <>
      {
        !cookiesSet ? (
          <div className='cookiesNotice' ref={el}>
            <span className='cookiesInfo'>
              Secid is using cookies to ensure a satisfying experience. Click <Link to='/privacy'>here</Link> for the privacy policy.
            </span >
            <button onClick={setCookiesAccepted}>Ok, got it!</button>
          </div >
        ) : null
      }
    </>
  )
}

export default CookiesNotice;
