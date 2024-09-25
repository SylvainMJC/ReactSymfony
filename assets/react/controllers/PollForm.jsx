import React from "react";

export default function (props) {
  return (
    <form name="poll" method="post">
      <div>
        <label htmlFor="poll_title" className="required">
          Title
        </label>
        <input
          type="text"
          id="poll_title"
          name="poll[title]"
          required="required"
          maxLength="255"
        ></input>
      </div>
      <div>
        <label htmlFor="poll_description">Description</label>
        <textarea id="poll_description" name="poll[description]"></textarea>
      </div>

      <div>
        <label htmlFor="poll_type" className="required">
          Type
        </label>
        <select id="poll_type" name="poll[type]">
          <option value="1">Unique</option>
          <option value="2">Multiple</option>
        </select>
      </div>
      <h3>Réponses</h3>
      <ul className="answers">
        <div>
          <label htmlFor="poll_answers_0_answerText" className="required">
            Answer text
          </label>
          <input
            id="poll_answers_0_answerText"
            name="poll[answers][0][answerText]"
            required="required"
          ></input>
        </div>
        <li>
          <div>
            <label htmlFor="poll_answers_1_answerText" className="required">
              Answer text
            </label>
            <input
              id="poll_answers_1_answerText"
              name="poll[answers][1][answerText]"
              required="required"
            ></input>
          </div>
        </li>
      </ul>

      <button className="btn">Enregistrer Sondage</button>
      <input
        type="hidden"
        id="poll__token"
        name="poll[_token]"
        value={props.csrfToken}
      ></input>
    </form>
  );
}
