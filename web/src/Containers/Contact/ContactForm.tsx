import React, { useState, useEffect } from 'react'
import CustomRadio from '../../Components/CustomRadio/CustomRadio';
import { useFormik } from 'formik'
import * as Yup from 'yup';

function ContactForm() {
  const lAF = (e: any) => {
    const parent = e.target.parentElement;
    parent.classList.remove('iF-label'); parent.classList.remove('iFe-label');
    if (e.target.value) parent.classList.add('iF-label');
    else parent.classList.add('iFe-label');
  }
  const lAB = (e: any) => {
    const parent = e.target.parentElement;
    parent.classList.remove('iF-label'); parent.classList.remove('iFe-label');
  }
  const [selected, setSelected] = useState("rebranding");

  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      message: '',
      q_type: '',
    },
    validationSchema: Yup.object().shape({
      firstname: Yup.string().required('Voornaam is verplicht'),
      lastname: Yup.string().required('Achternaam is verplicht'),
      email: Yup.string().email('Email is niet geldig').required('Email is verplicht'),
      phone: Yup.string()
        .matches(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/g, 'Telefoon nummer is niet geledig')
        .required('Telefoon nummer is verplicht'),
      message: Yup.string()
        .required('Een bericht is verplicht om te versturen')
        .min(20, 'Een bericht moet minimaal 20 karakters zijn.'),
    }),
    validateOnChange: false,
    validateOnBlur: true,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const lOC = (e: any) => {
    formik.handleChange(e);
    lAF(e);
  }

  useEffect(() => {
    formik.values.q_type = selected
  }, [selected, formik.values])

  return (
    <form id='contactForm' onSubmit={formik.handleSubmit}>
      <span className='inputRow'>
        <label htmlFor='firstname' className={formik.errors.firstname ? 'iFerr-label' : ''}>
          Voornaam
          <input
            className={formik.errors.firstname ? 'iFerr-input' : ''}
            type='text' onFocus={lAF} onChange={lOC} onBlur={lAB}
            placeholder='Voornaam' id='firstname'
            defaultValue={formik.initialValues.firstname}
          />
          {formik.errors.firstname && <span className='errorMessage'>{formik.errors.firstname}</span>}
        </label>
        <label htmlFor='lastname' className={formik.errors.lastname ? 'iFerr-label' : ''}>
          Achternaam
          <input
            className={formik.errors.lastname ? 'iFerr-input' : ''}
            type='text' onFocus={lAF} onChange={lOC} onBlur={lAB}
            placeholder='Achternaam' id='lastname'
            defaultValue={formik.initialValues.lastname}
          />
          {formik.errors.lastname && <span className='errorMessage'>{formik.errors.lastname}</span>}
        </label>
      </span>
      <span className='inputRow'>
        <label htmlFor='email' className={formik.errors.email ? 'iFerr-label' : ''}>
          Email
          <input
            className={formik.errors.email ? 'iFerr-input' : ''}
            type='text' onFocus={lAF} onChange={lOC} onBlur={lAB}
            placeholder='example@gmail.com' id='email'
            defaultValue={formik.initialValues.email}
          />
          {formik.errors.email && <span className='errorMessage'>{formik.errors.email}</span>}
        </label>
        <label htmlFor='phone' className={formik.errors.phone ? 'iFerr-label' : ''}>
          Telefoon nummer
          <input
            className={formik.errors.phone ? 'iFerr-input' : ''}
            type='text' onFocus={lAF} onChange={lOC} onBlur={lAB}
            placeholder='+31 6 72 732 532' id='phone'
            defaultValue={formik.initialValues.phone}
          />
          {formik.errors.phone && <span className='errorMessage'>{formik.errors.phone}</span>}
        </label>
      </span>
      <div>
        <h4>Waar gaat uw vraag over?</h4>
        <div className='customRadioContainer'>
          <CustomRadio text="Rebranding" onChange={setSelected} selected={selected} value="rebranding" id="rebranding" />
          <CustomRadio text="Web Design" onChange={setSelected} selected={selected} value="webdesign" id="webdesign" />
          <CustomRadio text="Anders" onChange={setSelected} selected={selected} value="other" id="other" />
        </div>
      </div>
      <span className='inputRow' id='messageRow'>
        <label htmlFor='message' className={formik.errors.message ? 'iFerr-label' : ''}>
          Message
          <input
            className={formik.errors.message ? 'iFerr-input' : ''}
            type='text' onFocus={lAF} onChange={lOC} onBlur={lAB}
            placeholder='Schrijf uw bericht hier...' id='message'
          />
          {formik.errors.message && <span className='errorMessage'>{formik.errors.message}</span>}
        </label>
      </span>
      <button type='submit'>Stuur bericht</button>
    </form>
  )
}

export default ContactForm