import React from 'react';
import './contact.css';
import { useForm } from "react-hook-form";

const Contact = ({id}) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Prénom" {...register("Prénom", {required: true, maxLength: 80})} />
      <input type="text" placeholder="Nom" {...register("Nom", {required: true, maxLength: 100})} />
      <input type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
      <select {...register("Type de demande", { required: true })}>
        <option value="Offre d'emploi">Offre d'emploi</option>
        <option value="Signaler un bug">Signaler un bug</option>
        <option value="Commentaires">Commentaires</option>
        <option value="Autres">Autres</option>
      </select>
      <textarea {...register("Message", {required: true, maxLength: 250})} />

      <input type="submit" />
    </form>
  );
  
};

export default Contact;

