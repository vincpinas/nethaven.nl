import { useEffect } from 'react'
import { useLocation } from 'react-router-dom';

function Helmet() {
  const location = useLocation();
  useEffect(() => {
    document.title = (() => {
      let returnValue = 'Nethaven';

      const locations = [
        { url: `/work`, title: `Some of our work` },
        { url: `/approach`, title: `How we go to work` },
        { url: `/about-us`, title: `Nethaven • A little bit about us` },
        { url: `/contact`, title: `Nethaven • Contact us` },
        { url: `/vacancies`, title: `Work with us!` },
        { url: `/`, title: `Nethaven` },
      ]

      locations.forEach(loc => {
        if (loc.url.includes(location.pathname)) returnValue = loc.title
      });

      return returnValue ? returnValue : 'Nethaven'
    })();
  }, [location]);

  return null;
}

export default Helmet;
