import React from "react";
import Button from "./components/Button";
import Input from "./components/Input";
export default function PollForm(props) {
  return (
    <div>
      <h2 className="mt-12 text-3xl font-extrabold text-center">
        Créer un <span className="text-primary">Sondage</span>
      </h2>
      <p className="text-center text-customGrey text-sm mt-2">
        Créer votre propre sondage !
      </p>
      <form
        name="poll"
        method="post"
        className="max-w-md mx-auto bg-white p-8 rounded-lg border mt-6"
      >
        <div>
          <label htmlFor="poll_title" className="block text-sm font-medium">
            Titre
          </label>
          <Input
            type="text"
            id="poll_title"
            name="poll[title]"
            required="required"
            maxLength="255"
            placeholder="Entrez votre titre"
          />
        </div>

        <div>
          <label
            htmlFor="poll_description"
            className="block text-sm font-medium mt-4"
          >
            Description
          </label>
          <Input
            id="poll_description"
            name="poll[description]"
            placeholder="Entrer une description"
          />
        </div>

        <div>
          <label htmlFor="poll_type" className="block text-sm font-medium mt-4">
            Type
          </label>
          <select
            id="poll_type"
            name="poll[type]"
            className="mt-1 p-2 w-full text-customGrey border border-customGrey/30 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="1">Unique</option>
            <option value="2">Multiple</option>
          </select>
        </div>

        <div>
          <h3 className="text-base font-medium mt-4">Réponses</h3>
          <ul className="space-y-2 mt-2">
            <li>
              <Input
                id="poll_answers_0_answerText"
                name="poll[answers][0][answerText]"
                required="required"
                placeholder="Réponse"
              />
            </li>
            <li>
              <Input
                id="poll_answers_1_answerText"
                name="poll[answers][1][answerText]"
                required="required"
                placeholder="Réponse"
              />
            </li>
          </ul>
          <div className="flex justify-center mt-2">
            <button
              type="button"
              className="text-primary border-2 border-primary bg-primary/10 rounded-full p-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="flex justify-end">
          <Button title="Soumettre" className="w-full" />
        </div>

        <Input
          type="hidden"
          id="poll__token"
          name="poll[_token]"
          value={props.csrfToken}
        />
      </form>
    </div>
  );
}
