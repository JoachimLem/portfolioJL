import React, {useRef} from 'react';
import './contact.css';
import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';

import MiniLogo from '../DesignComponents/MiniLogo/miniLogo';

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

        <MiniLogo
        textLogo={textLogo}
        />
        <div className="form-container">
        <form ref={form} className="form" onSubmit={handleSubmit(onSubmit)}>
          <input  className="input" type="text" placeholder="Prénom" {...register("firstName", { required: true, maxLength: 80 })} />
          <input  className="input" type="text" placeholder="Nom" {...register("lastName", { required: true, maxLength: 100 })} />
          <input  className="input" type="email" placeholder="Email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
          <textarea  className="input" placeholder="Message" {...register("message", { required: true, maxLength: 250 })} />
          <select  className="input" {...register("what", { required: true })}>
            <option value="" >Veuillez préciser l'objet de votre message</option>
            <option value="Offre d'emploi">Offre d'emploi</option>
            <option value="Commentaires">Commentaires</option>
            <option value="Signaler un bug">Signaler un bug</option>
            <option value="Autres">Autres</option>
          </select>

          <input className="submitButton" type="submit" value="Send" />
        </form>

        </div>

    </section>
  );

};

export default Contact;

