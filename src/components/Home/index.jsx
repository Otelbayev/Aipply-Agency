import React, { useRef, useState } from "react";
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
  const aboutRef = useRef();
  const serviceRef = useRef();
  const portfolioRef = useRef();
  const faqRef = useRef();
  return (
    <div>
      <Bg>
        <Header
          aboutRef={aboutRef}
          serviceRef={serviceRef}
          portfolioRef={portfolioRef}
          faqRef={faqRef}
          open={open}
          setOpen={setOpen}
        />
        <Showcase />
      </Bg>
      <div style={{ display: open ? "none" : "block" }}>
        <Brand />
        <About aboutRef={aboutRef} />
        <Projects portfolioRef={portfolioRef} />
        <Services serviceRef={serviceRef} />
        <Our />
        <News />
        <FAQ faqRef={faqRef} />
        <Footer
          aboutRef={aboutRef}
          serviceRef={serviceRef}
          portfolioRef={portfolioRef}
          faqRef={faqRef}
        />
      </div>
    </div>
  );
};

export default Home;
