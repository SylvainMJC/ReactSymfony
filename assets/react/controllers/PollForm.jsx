import React, { useState } from "react";
import Button from "./components/Button";
import Input from "./components/Input";

export default function PollForm(props) {
  // Les deux premiers champs de réponse par défaut
  const [answers, setAnswers] = useState([
    { id: 0, value: "" },
    { id: 1, value: "" },
  ]);

  // Fonction pour ajouter une réponse, mais avec un maximum de 2 réponses supplémentaires
  const handleAddAnswer = () => {
    if (answers.length < 7) {
      // 2 réponses par défaut + 2 réponses supplémentaires max
      const newAnswer = { id: answers.length, value: "" };
      setAnswers([...answers, newAnswer]);
    }
  };

  const handleInputChange = (id, event) => {
    const newAnswers = answers.map((answer) =>
      answer.id === id ? { ...answer, value: event.target.value } : answer
    );
    setAnswers(newAnswers);
  };

  const handleRemoveAnswer = (id) => {
    if (answers.length > 2) {
      const newAnswers = answers.filter((answer) => answer.id !== id);
      setAnswers(newAnswers);
    }
  };

  return (
    <div>
      <h2 className="mt-12 text-3xl font-extrabold text-center">
        Créer un <span className="text-primary">Sondage</span>
      </h2>
      <p className="text-center text-customGrey text-sm mt-2">
        Créez votre propre sondage !
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

        <div className="hidden">
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
            {answers.map((answer, index) => (
              <li key={answer.id} className="flex items-center">
                <Input
                  id={`poll_answers_${answer.id}_answerText`}
                  name={`poll[answers][${answer.id}][answerText]`}
                  required="required"
                  placeholder={`Réponse ${index + 1}`}
                  value={answer.value}
                  onChange={(event) => handleInputChange(answer.id, event)}
                />
                {/*  Display red cross */}
                {index >= 2 && (
                  <button
                    type="button"
                    className="ml-2 text-red-500"
                    onClick={() => handleRemoveAnswer(answer.id)}
                  >
                    X
                  </button>
                )}
              </li>
            ))}
          </ul>
          <div className="flex justify-center mt-2">
            <button
              type="button"
              className={`text-primary border-2 border-primary bg-primary/10 rounded-full p-1 ${
                answers.length >= 7 ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={handleAddAnswer}
              disabled={answers.length >= 7}
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

        <div className="flex justify-end mt-4">
          <Button title="Soumettre" />
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
