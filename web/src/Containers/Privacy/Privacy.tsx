import React, { useEffect } from 'react';
import './Privacy.scss';

function Privacy() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <div id='privacyContainer' >
      <h1>Privacy Policy </h1>
      <section id='data-protection' >
        <h2>1. An overview of data protection</h2>
        <div>
          <h3>General information</h3>
          <p>The following information will provide you with an easy to navigate overview of what will happen with your personal data when you visit this website. The term „personal data“
            comprises all data that can be used to personally identify you. For detailed information about the subject matter of data protection, please consult our Data Protection Declaration, which we have included beneath this copy.
          </p>
          <h3>Data recording on this website</h3>
          <ul>
            <li>
              <h4>Who is the responsible party for the recording of data on this website (i.e. the „controller“)?</h4>
              <p>The data on this website is processed by the operator of the website, whose contact information is available under section „Information Required by Law“ on this website.</p>
            </li>
            <li>
              <h4>How do we record your data?</h4>
              <p>We collect your data as a result of your sharing of your data with us. This may, for instance be information you enter into our contact form.
                Our IT systems automatically record other data when you visit our website. This data comprises primarily technical information (e.g. web browser, operating system or time the site was accessed). This information is recorded automatically when you access this website.
              </p>
            </li>
            <li>
              <h4>What are the purposes we use your data for?</h4>
              <p>A portion of the information is generated to guarantee the error free provision of the website. Other data may be used to analyse your user patterns.</p>
            </li>
            <li>
              <h4>What rights do you have as far as your information is concerned?</h4>
              <p>You have the right to receive information about the source, recipients and purposes of your archived personal data at any time without having to pay a fee for such disclosures. You also have the right to demand that your data are rectified or eradicated.
                Please do not hesitate to contact us at any time under the address disclosed in section „Information Required by Law“ on this website if you have questions about this or any other data protection related issues. You also have the right to log a complaint with the competent supervising agency.
                <br /><br />
                Moreover, under certain circumstances, you have the right to demand the restriction of the processing of your personal data. For details, please consult the Data Protection Declaration under section „Right to Restriction of Data Processing.“
              </p>
            </li>
          </ul>
        </div>
      </section >
      <section id='data-protection' >
        <h2>2. Hosting</h2>
        <div>
          <h3>External Hosting</h3>
          <p>This website is hosted by an external service provider (host). Personal data collected on this website are stored on the servers of the host. These may include, but are not limited to, IP addresses, contact requests, metadata and communications, contract information, contact information, names, web page access, and other data generated through a web site.
            <br /><br />
            The host is used for the purpose of fulfilling the contract with our potential and existing customers <a href='https://gdpr-info.eu/art-6-gdpr/' target='_blank' rel='noreferrer'>(Art. 6 para. 1 lit. b GDPR)</a> and in the interest of secure, fast and efficient provision of our online services by a professional provider <a href='https://gdpr-info.eu/art-6-gdpr/' target='_blank' rel='noreferrer'>(Art. 6 para. 1 lit. f GDPR)</a>.
            <br /><br />
            Our host will only process your data to the extent necessary to fulfil its performance obligations and to follow our instructions with respect to such data.</p >
          <ul>
            <li>
              <h4>Execution of a contract data processing agreement</h4>
              <p>In order to guarantee processing in compliance with data protection regulations, we have concluded an order processing contract with our host.</p>
            </li>
          </ul>
        </div >
      </section >
    </div >
  )
}

export default Privacy;
