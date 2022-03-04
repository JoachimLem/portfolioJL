import React, { useRef, useState } from 'react';
import './contact.css';
import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';

import Fade from 'react-reveal/Fade';

import MiniLogo from '../DesignComponents/MiniLogo/miniLogo';

//import Scroll to top
import ScrollToTop from '../ScrollToTop';

//Text for MiniLogo
const textLogo = {
  text: "Contact",
  abv: "C"
};


// DOTENV variables
const service = process.env.REACT_APP_EMAILJS_SERVICE;
const template = process.env.REACT_APP_EMAILJS_TEMPLATE;
const user = process.env.REACT_APP_EMAILJS_USER;


const Contact = ({ id }) => {
  const { register, handleSubmit } = useForm();
  //ref for emailjs 
  const form = useRef();

  const [messageSuccess, setMessageSuccess] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const onSubmit = () => {
    emailjs.sendForm(service, template, form.current, user)
      .then((result) => {
        console.log(result.text);
        setMessageSuccess(true);
        setMessageError(false);
      
        setTimeout(() => {
          window.location.href = '/';
        }, 1500);

      }, (error) => {
        console.log(error.text);
        setMessageError(true);
        console.log(error);
      });
  };






  return (
    <section className="contact-container" id={id}>
      <Fade left delay={800}>
        <MiniLogo
          textLogo={textLogo}
        />
      </Fade>


      <Fade bottom delay={1500} duration={1500}>
        <div className="form-container">
          <form ref={form} className="form" onSubmit={handleSubmit(onSubmit)}>
            <input required className="input_style" type="text" placeholder="Prénom" {...register("firstName", { required: true, maxLength: 80, pattern: /[A-Za-z]/ })} />
            <input required className="input_style" type="text" placeholder="Nom" {...register("lastName", { required: true, maxLength: 100, pattern: /[A-Za-z]/ })} />
            <input required className="input_style" type="email" placeholder="Email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
            <textarea required className="input_style" placeholder="Message" {...register("message", { required: true, maxLength: 250 })} />
            <select required className="input_style" {...register("what", { required: true })}>
              <option value="" >Veuillez préciser l'objet de votre message</option>
              <option value="Offre d'emploi">Offre d'emploi</option>
              <option value="Commentaires">Commentaires</option>
              <option value="Signaler un bug">Signaler un bug</option>
              <option value="Autres">Autres</option>
            </select>
            <input className="submitButton" type="submit" value="Envoyer" />

            {messageSuccess && <p className='form_success'>Merci, votre message a été envoyé</p>}
            {messageError && <p className='form_error'>Une erreur a été rencontrée.</p>}
          </form>

        </div>
      </Fade>
     
      <ScrollToTop />
    

    </section>
  );

};

export default Contact;

