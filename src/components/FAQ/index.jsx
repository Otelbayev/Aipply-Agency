import React, { useState } from "react";
import { Container, Accardion, Arrow } from "./style";

const FAQ = () => {
  const [open, setOpen] = useState(null);
  const data = [
    {
      title: "Do you have specific princing plans to show?",
      desc: "Donec rutrum, mauris at blandit convallis, orci nulla volutpat sapien, id pulvinar leo ligula eget nunc. In quis magna magna. Nullam mattis eget.",
    },
    {
      title: "Do you have specific princing plans to show?",
      desc: "Donec rutrum, mauris at blandit convallis, orci nulla volutpat sapien, id pulvinar leo ligula eget nunc. In quis magna magna. Nullam mattis eget.",
    },
    {
      title: "Do you have specific princing plans to show?",
      desc: "Donec rutrum, mauris at blandit convallis, orci nulla volutpat sapien, id pulvinar leo ligula eget nunc. In quis magna magna. Nullam mattis eget.",
    },
    {
      title: "Do you have specific princing plans to show?",
      desc: "Donec rutrum, mauris at blandit convallis, orci nulla volutpat sapien, id pulvinar leo ligula eget nunc. In quis magna magna. Nullam mattis eget.",
    },
    {
      title: "Do you have specific princing plans to show?",
      desc: "Donec rutrum, mauris at blandit convallis, orci nulla volutpat sapien, id pulvinar leo ligula eget nunc. In quis magna magna. Nullam mattis eget.",
    },
  ];

  return (
    <Container>
      <div className="container">
        <div className="title dark">FAQ's</div>
        <div className="desc dark">
          Ko’p beriladigan savollarga javob oling.
        </div>
        <div className="content">
          {data.map((e, index) => (
            <Accardion open={open === index}>
              <div onClick={() => setOpen(index)} className="accardion-header">
                <div className="accardion-title">{e.title}</div>
                <Arrow open={open === index} />
              </div>
              <div className="accardion-content">{e.desc}</div>
            </Accardion>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default FAQ;
