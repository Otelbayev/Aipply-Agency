import React, { useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import Showcase from "../Showcase";
import FAQ from "../FAQ";
import Brand from "../Brand";
import Services from "../Services";

const Home = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Header open={open} setOpen={setOpen} />
      <Showcase />
      <div style={{ display: open ? "none" : "block" }}>
        <Brand />
        <Services />
        <FAQ />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
