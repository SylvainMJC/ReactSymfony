import React from "react";
import Button from "../components/Button";

export default function Hero({ user }) {
  return (
    <div className="mt-12 flex flex-col md:flex-row items-start justify-between">
      <div className="space-y-6 max-w-md">
        <h1 className="font-bold text-3xl md:text-5xl">
          Partagez Votre Avis en Toute{" "}
          <span className="text-primary">Anonymat</span>
        </h1>
        <p className="font-semibold md:text-lg">
          Répondez à des sondages en 30 secondes. C'est simple, rapide et
          anonyme.
        </p>

        {user ? (
          <div className="flex items-center space-x-4">
            <a href="/poll/new">
              <Button title="Commencez dès maintenant" />
            </a>
          </div>
        ) : (
          <a href="/register">
            <Button
              title="Inscrivez-vous dès maintenant"
              className="inline-block mt-6"
            />
          </a>
        )}
      </div>
      <img
        src="/img/HeroImg.png"
        alt="hero image"
        className="mt-6 md:-mt-10 max-w-full md:max-w-sm"
      />
    </div>
  );
}
