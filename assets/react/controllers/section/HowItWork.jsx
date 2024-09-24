import React from "react";

const steps = [
  {
    id: 1,
    title: "Inscription rapide",
    description:
      "Créez un compte en quelques clics pour accéder à des sondages anonymes. Vos informations restent confidentielles à 100 %.",
  },
  {
    id: 2,
    title: "Choix du Sondage",
    description:
      "Explorez une variété de sondages adaptés à vos intérêts. Sélectionnez le sujet qui vous parle et commencez à donner votre avis !",
  },
  {
    id: 3,
    title: "Participation Anonyme",
    description:
      "Explorez une variété de sondages adaptés à vos intérêts. Sélectionnez le sujet qui vous parle et commencez à donner votre avis !",
  },
  {
    id: 4,
    title: "Suivi des Résultats",
    description:
      "Recevez des mises à jour sur les résultats globaux une fois le sondage terminé. Obtenez des informations intéressantes sans compromettre votre anonymat.",
  },
];

export default function HowItWork() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 my-12">
      {steps.map((step) => (
        <div
          key={step.id}
          className="bg-primary text-white p-6 rounded-lg shadow-lg"
        >
          <h2 className="font-bold text-xl mb-4">
            {step.id}. {step.title}
          </h2>
          <p className="text-xs">{step.description}</p>
        </div>
      ))}
    </div>
  );
}
