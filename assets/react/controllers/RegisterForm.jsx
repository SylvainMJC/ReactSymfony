import React from "react";
import Button from "./components/Button";
import Input from "./components/Input";

export default function RegistrationForm(props) {
  return (
    <div>
      <h2 className="mt-12 text-center text-3xl font-extrabold">
        S'inscrire à <span className="text-primary">EasyPoll</span>
      </h2>
      <p className="text-center text-customGrey mt-2">
        Ou{" "}
        <a href="/login" className="text-primary">
          connectez-vous à votre compte
        </a>
      </p>
      <form
        name="registration_form"
        method="post"
        className="max-w-md mx-auto bg-white p-6 rounded-lg border mt-6"
      >
        <div className="rounded-md shadow-sm space-y-4">
          <div>
            <label htmlFor="registration_form_email" className="text-sm">
              Email
            </label>
            <Input
              type="email"
              id="registration_form_email"
              name="registration_form[email]"
              required="required"
              maxLength="180"
              placeholder="m@exemple.com"
            />
          </div>

          <div>
            <label
              htmlFor="registration_form_plainPassword"
              className="text-sm mt-8"
            >
              Mot de passe
            </label>
            <Input
              type="password"
              id="registration_form_plainPassword"
              name="registration_form[plainPassword]"
              required="required"
              autoComplete="new-password"
              placeholder="Mot de passe"
            />
          </div>
        </div>

        <div className="flex items-center mt-4">
          <input
            type="checkbox"
            id="registration_form_agreeTerms"
            name="registration_form[agreeTerms]"
            required="required"
            className="size-4 text-primary focus:ring-primary border border-customGrey/20 rounded"
          />
          <label
            htmlFor="registration_form_agreeTerms"
            className="ml-2 block text-sm text-gray-900"
          >
            Accepter les termes d'utilisation
          </label>
        </div>

        <Input
          type="hidden"
          id="registration_form__token"
          name="registration_form[_token]"
          value={props.csrfToken}
        />

        <Button title="S'inscrire" className="mt-4 w-full" />
      </form>
    </div>
  );
}
