import React from "react";
import Button from "../components/Button";
import ButtonGray from "../components/ButtonGray";

export const Nav = ({ user }) => {
  return (
    <div className="flex flex-row justify-between items-center py-4 md:px-8 px-4">
      <h1 className="text-2xl text-primary font-bold">Easy Poll</h1>

      {user ? (
        <div className="flex items-center space-x-4">
          <a href="/logout">
            <ButtonGray title="Déconnexion" />
          </a>
          <a href="/poll/new">
            <Button title="Créer un sondage" />
          </a>
        </div>
      ) : (
        <a href="/login">
          <Button title="Se connecter" />
        </a>
      )}
    </div>
  );
};
