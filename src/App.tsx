import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Protfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

type Props = {};

const App = (props: Props) => {
  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Protfolio />
      <Experience />
      <Contact />
      <SocialLinks />
    </>
  );
};

export default App;
