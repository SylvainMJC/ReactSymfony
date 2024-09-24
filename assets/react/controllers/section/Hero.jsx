import React from "react";
import Button from "../components/Button";

export default function Hero() {
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
        <a href="/login" className="">
          <Button
            title="Commencer dès maintenant"
            className="inline-block mt-6"
          />
        </a>
      </div>
      <img
        src="/img/HeroImg.png"
        alt="hero image"
        className="mt-6 md:-mt-10 max-w-full md:max-w-sm"
      />
    </div>
  );
}
