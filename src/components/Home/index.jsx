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
import News from "../News";
import styled from "styled-components";
import bg from "../../assets/bg.png";

const Bg = styled.div`
  background: url("${bg}");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const Home = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Bg>
        <Header open={open} setOpen={setOpen} />
        <Showcase />
      </Bg>
      <div style={{ display: open ? "none" : "block" }}>
        <Brand />
        <About />
        <Projects />
        <Services />
        <Our />
        <News />
        <FAQ />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
