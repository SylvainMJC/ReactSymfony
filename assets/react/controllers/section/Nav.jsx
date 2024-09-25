import React from "react";
import Button from "../components/Button";

export const Nav = () => {
  return (
    <div className="flex flex-row justify-between items-center py-4 md:px-8 px-4">
      <h1 className="text-2xl text-primary font-bold">Easy Poll</h1>
      <a href="/login">
        <Button title="Se connecter" />
      </a>
    </div>
  );
};
