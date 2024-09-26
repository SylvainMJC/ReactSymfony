import React from "react";
import Footer from "./section/Footer";
import Hero from "./section/Hero";
import HowItWork from "./section/HowItWork";
import { Nav } from "./section/Nav";

export default function App({ user }) {
  return (
    <div>
      <Nav user={user} />
      <div className="max-w-5xl mx-auto px-7">
        <Hero user={user} />
        <HowItWork />
        <Footer />
      </div>
    </div>
  );
}
