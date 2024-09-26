import React from "react";

export default function (props) {
  // console.log(props.htmlForm);
  return (
    <form name="vote_poll" method="post">
      <div>
        <label class="required">Answer choice</label>
        <div id="poll_vote_answerChoice">
          {/* todo : foreach answer as answer */}
          {/* todo : typage multiple ou unique (radio ou checkbox) */}
          <input
            id="poll_vote_answerChoice_0"
            name="poll_vote[answerChoice]"
            required="required"
            value="9"
            type="radio"
          />
          <label for="poll_vote_answerChoice_0" class="required">
            Rouge
          </label>

          <input
            type="radio"
            id="poll_vote_answerChoice_1"
            name="poll_vote[answerChoice]"
            required="required"
            value="10"
          />
          <label for="poll_vote_answerChoice_1" class="required">
            Bleu
          </label>

          <input
            type="radio"
            id="poll_vote_answerChoice_2"
            name="poll_vote[answerChoice]"
            required="required"
            value="11"
          />
          <label for="poll_vote_answerChoice_2" class="required">
            Vert
          </label>

          <input
            type="radio"
            id="poll_vote_answerChoice_3"
            name="poll_vote[answerChoice]"
            required="required"
            value="12"
          />
          <label for="poll_vote_answerChoice_3" class="required">
            Jaune
          </label>
        </div>
      </div>
      <button class="btn">Voter</button>
      <input
        type="hidden"
        id="poll_vote__token"
        name="poll_vote[_token]"
        value={props.csrfToken}
      ></input>
    </form>
  );
}
