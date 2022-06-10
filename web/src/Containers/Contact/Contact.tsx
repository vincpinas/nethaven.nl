import React from 'react';
import * as FA from 'react-icons/fa'
import ContactForm from './ContactForm';
import './Contact.scss';

function Contact() {
  return (
    <div id='contactContainer'>
      <h1>Contact Ons</h1>
      <h3 className='contactHeading'>Enige vragen of opmerkingen? Schrijf even snel een berichtje!</h3>
      <div id='contactFormWrapper'>
        <div className='contactInfo'>
          <h3>Contact Informatie</h3>
          <p>Vul het contact formulier in en ons team zal <br /> zo snel mogelijk op u terug komen!</p>
          <ul>
            <li>
              <a href="tel:+31 (0)641509165" target='_blank' rel='noreferrer'>
                <FA.FaPhoneAlt />
                +31 (0) 641509165
              </a>
            </li>
            <li>
              <a href="mailto:info@nethaven.nl" target='_blank' rel='noreferrer'>
                <FA.FaMailBulk />
                Info@nethaven.nl
              </a>
            </li>
            <li>
              <a href="https://www.google.nl/maps" target='_blank' rel='noreferrer'>
                <FA.FaCompass />
                Coudehovenflat 81, 1167 VK Uithoorn
              </a>
            </li>
          </ul>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;
