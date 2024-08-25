import React, { useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import Showcase from "../Showcase";
import FAQ from "../FAQ";
import Brand from "../Brand";
import About from "../About";
import Projects from "../Projects";
import Services from "../Services";
import Our from "../Our";

const Home = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Header open={open} setOpen={setOpen} />
      <Showcase />
      <div style={{ display: open ? "none" : "block" }}>
        <Brand />
        <About />
        <Projects />
        <Services />
        <Our />
        <FAQ />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
