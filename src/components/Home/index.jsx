import React, { useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import Showcase from "../Showcase";
import FAQ from "../FAQ";

const Home = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Header open={open} setOpen={setOpen} />
      <Showcase />
      <div style={{ display: open ? "none" : "block" }}>
        <FAQ />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
