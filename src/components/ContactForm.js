import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { init } from "@emailjs/browser";
init(process.env.ID);

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const formMess = document.querySelector(".formMessage");

    emailjs
      .sendForm(
        "service_qz2yt49", //service id
        "template_l15fu2n", //template id
        form.current,
        process.env.REACT_APP_ID //clé public
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset(); // remet a zéro tout les inputs
          formMess.innerHTML = "<p className='success'>Message envoyé !</p>";

          // efface le message aprés 2500ms
          setTimeout(() => {
            formMess.innerHTML = "";
          }, 2500);
        },
        (error) => {
          console.log(error.text);
          formMess.innerHTML =
            "<p className='error'>Une erreur s'est produite veuillez réessayer</p>";

          // efface le message aprés 2500ms
          setTimeout(() => {
            formMess.innerHTML = "";
          }, 2500);
        }
      );
  };

  return (
    <div className="form-container">
      <h2>contactez-moi</h2>
      <form ref={form} onSubmit={sendEmail} className="form-content">
        <label>Nom</label>
        <input type="text" name="name" required autoComplete="off" id="name" />
        <label>Email</label>
        <input
          type="email"
          name="email"
          required
          autoComplete="off"
          id="email"
        />
        <label>Message</label>
        <textarea name="message" id="mess" />
        <input type="submit" value="Envoyer" className="hover button" />
      </form>
      <div className="formMessage"></div>
    </div>
  );
};

export default ContactForm;
