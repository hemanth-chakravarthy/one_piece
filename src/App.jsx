import React from "react";
import Navbar from "./components/Navbar";
import Center from "./components/Center";
import CharacterScroll from "./components/CharacterScroll";
import AlphabetPowers from "./components/AlphabetPowers";
import GodFight from "./components/GodFight";
import CrewSection from "./components/CrewSection";
import Marquee from "./components/Marquee";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div id="main">
      <Navbar />
      <Center />
      <CharacterScroll />
      <AlphabetPowers />
      <GodFight />
      <CrewSection />
      <Marquee />
      <Footer />
    </div>
  );
}
