import React from "react";
import SubscribeFrom from "react-mailchimp-subscribe";

const formProps = {
  action:
    "//burntfen.us9.list-manage.com/subscribe/post?u=54a70a2c82373a0980e031871&amp;id=7d8f2d8e40",
  messages: {
    inputPlaceholder: "Your email",
    btnLabel: "Subscribe",
    sending: "Envoi en cours...",
    success: "Merci de votre intérêt!",
    error: "Oops, impossible d'enregistrer cette adresse"
  },
  styles: {
    sending: {
      fontSize: 18,
      color: "auto"
    },
    success: {
      fontSize: 18,
      color: "green"
    },
    error: {
      fontSize: 18,
      color: "red"
    }
  }
};

const Form = () => <SubscribeFrom {...formProps} />;

export default Form;
