import React from "react";

export default function (props) {
  return (
    <form name="registration_form" method="post">
      <div>
        <label htmlFor="registration_form_email" className="required">
          Email
        </label>
        <input
          type="text"
          id="registration_form_email"
          name="registration_form[email]"
          required="required"
          maxLength="180"
        ></input>
      </div>
      <div>
        <label htmlFor="registration_form_plainPassword" className="required">
          Mot de passe
        </label>
        <input
          type="password"
          id="registration_form_plainPassword"
          name="registration_form[plainPassword]"
          required="required"
          autoComplete="new-password"
        ></input>
      </div>
      <div>
        <label htmlFor="registration_form_agreeTerms" className="required">
          Accepter les termes d'utilisation
        </label>
        <input
          type="checkbox"
          id="registration_form_agreeTerms"
          name="registration_form[agreeTerms]"
          required="required"
          checked="checked"
        ></input>
      </div>
      <input
        type="hidden"
        id="registration_form__token"
        name="registration_form[_token]"
        value={props.csrfToken}
      ></input>
      <button type="submit" className="btn">
        S'inscrire
      </button>
    </form>
  );
}
