import React from "react";
import Hero from "./section/Hero";
import { Nav } from "./section/Nav";

export default function App() {
  return (
    <div>
      <Nav />
      <div className="max-w-5xl mx-auto">
        <Hero />
      </div>
    </div>
  );
}
