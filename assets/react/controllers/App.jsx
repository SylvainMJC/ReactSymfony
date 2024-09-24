import React from "react";
import Hero from "./section/Hero";
import HowItWork from "./section/HowItWork";
import { Nav } from "./section/Nav";

export default function App() {
  return (
    <div>
      <Nav />
      <div className="max-w-5xl mx-auto px-7">
        <Hero />
        <HowItWork />
      </div>
    </div>
  );
}
