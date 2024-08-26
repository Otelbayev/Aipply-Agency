import React from "react";
import { Container } from "./style";
import Accordion from "./Accordion";
import FaqForm from "./FaqForm";
const FAQ = () => {
  return (
    <Container>
      <div className="container">
        <div className="title">FAQ's</div>
        <div className="desc">Ko’p beriladigan savollarga javob oling.</div>
        <div className="accardion-content">
          <Accordion
            title="Do you have specific princing plans to show?"
            desc="Donec rutrum, mauris at blandit convallis, orci nulla volutpat sapien, id pulvinar leo ligula eget nunc. In quis magna magna. Nullam mattis eget."
          />
          <Accordion
            title="Do you have specific princing plans to show?"
            desc="Donec rutrum, mauris at blandit convallis, orci nulla volutpat sapien, id pulvinar leo ligula eget nunc. In quis magna magna. Nullam mattis eget.Donec rutrum, mauris at blandit convallis, orci nulla volutpat sapien, id pulvinar leo ligula eget nunc. In quis magna magna. Nullam mattis eget.Donec rutrum, mauris at blandit convallis, orci nulla volutpat sapien, id pulvinar leo ligula eget nunc. In quis magna magna. Nullam mattis eget.Donec rutrum, mauris at blandit convallis, orci nulla volutpat sapien, id pulvinar leo ligula eget nunc. In quis magna magna. Nullam mattis eget.Donec rutrum, mauris at blandit convallis, orci nulla volutpat sapien, id pulvinar leo ligula eget nunc. In quis magna magna. Nullam mattis eget.Donec rutrum, mauris at blandit convallis, orci nulla volutpat sapien, id pulvinar leo ligula eget nunc. In quis magna magna. Nullam mattis eget.Donec rutrum, mauris at blandit convallis, orci nulla volutpat sapien, id pulvinar leo ligula eget nunc. In quis magna magna. Nullam mattis eget.Donec rutrum, mauris at blandit convallis, orci nulla volutpat sapien, id pulvinar leo ligula eget nunc. In quis magna magna. Nullam mattis eget.Donec rutrum, mauris at blandit convallis, orci nulla volutpat sapien, id pulvinar leo ligula eget nunc. In quis magna magna. Nullam mattis eget.Donec rutrum, mauris at blandit convallis, orci nulla volutpat sapien, id pulvinar leo ligula eget nunc. In quis magna magna. Nullam mattis eget.Donec rutrum, mauris at blandit convallis, orci nulla volutpat sapien, id pulvinar leo ligula eget nunc. In quis magna magna. Nullam mattis eget.Donec rutrum, mauris at blandit convallis, orci nulla volutpat sapien, id pulvinar leo ligula eget nunc. In quis magna magna. Nullam mattis eget."
          />
          <Accordion
            title="Do you have specific princing plans to show?"
            desc="Donec rutrum, mauris at blandit convallis, orci nulla volutpat sapien, id pulvinar leo ligula eget nunc. In quis magna magna. Nullam mattis eget."
          />
          <Accordion
            title="Do you have specific princing plans to show?"
            desc="Donec rutrum, mauris at blandit convallis, orci nulla volutpat sapien, id pulvinar leo ligula eget nunc. In quis magna magna. Nullam mattis eget."
          />
          <FaqForm />
        </div>
      </div>
    </Container>
  );
};

export default FAQ;
