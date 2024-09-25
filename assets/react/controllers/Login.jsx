import React, { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a FormData object
    // const data = new FormData();
    // data.append('email', email);
    // data.append('password', password);

    // const data = {
    //   email: email,
    //   password: password
    // };
    console.log(JSON.stringify({ email, password }));
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
        credentials: "include",
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Server response:", response.status, errorData);
        throw new Error("Login failed");
      }

      const data = await response.json();
      console.log("Login successful", data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex flex-col min-h-svh justify-center items-center">
      <h1 className="text-3xl font-extrabold text-center mb-2">
        Se connecter à <br />
        <span className="text-primary font-extrabold">EasyPoll</span>
      </h1>
      <p className="text-center text-sm mb-6">
        Ou{" "}
        <a href="/register" className="text-primary">
          s'inscrire pour obtenir un compte
        </a>
      </p>
      <div className="p-6 mx-4 rounded-lg border shadow  max-w-md">
        <h3 className="text-customGrey font-normal">
          Entrez votre email et mot de passe ci dessous
        </h3>
        <form onSubmit={handleSubmit}>
          <div className="my-4">
            <label className="block text-sm mb-1" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-customGrey/50 rounded focus:outline-none focus:ring-1 focus:ring-primary"
              placeholder="m@exemple.com"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm mb-1" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-customGrey/50 rounded focus:outline-none focus:ring-1 focus:ring-primary"
              placeholder="******"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white p-2 rounded font-semibold hover:bg-primary/80 transition-all"
          >
            Se connecter
          </button>
        </form>
      </div>
    </div>
  );
}
