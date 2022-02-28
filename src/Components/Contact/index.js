import React, { useRef } from 'react';
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


const Contact = ({ id }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  //ref for emailjs 
  const form = useRef();

  const onSubmit = () => {


    emailjs.sendForm('contact', 'template_eks5mqv', form.current, 'user_Ox708skvp8Fq1Tnhi5YPB')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };
  console.log(errors);

  return (
    <section className="contact-container" id={id}>
      <Fade left delay={800}>
        <MiniLogo
          textLogo={textLogo}
        />
      </Fade>


      <div className="form-container">
        <Fade bottom delay={1500} duration={1500}>
          <form ref={form} className="form" onSubmit={handleSubmit(onSubmit)}>
            <input className="input_style" type="text" placeholder="Prénom" {...register("firstName", { required: true, maxLength: 80 })} />
            <input className="input_style" type="text" placeholder="Nom" {...register("lastName", { required: true, maxLength: 100 })} />
            <input className="input_style" type="email" placeholder="Email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
            <textarea className="input_style" placeholder="Message" {...register("message", { required: true, maxLength: 250 })} />
            <select className="input_style" {...register("what", { required: true })}>
              <option value="" >Veuillez préciser l'objet de votre message</option>
              <option value="Offre d'emploi">Offre d'emploi</option>
              <option value="Commentaires">Commentaires</option>
              <option value="Signaler un bug">Signaler un bug</option>
              <option value="Autres">Autres</option>
            </select>
            <input className="submitButton" type="submit" value="Envoyer" />
          </form>
        </Fade>


      </div>
      <ScrollToTop />

    </section>
  );

};

export default Contact;

