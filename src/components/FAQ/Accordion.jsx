import React, { useState } from "react";
import { AccordionContainer, Icon } from "./style";

const Accordion = ({ title, desc }) => {
  const [open, setOpen] = useState(false);
  return (
    <AccordionContainer open={open}>
      <div className="accordion">
        <div className="accordion__top" onClick={() => setOpen(!open)}>
          <div className="accordion__top--title">{title}</div>
          <div className="accordion__top__icons">
            <div className="accordion__top__icons--icon">
              <Icon />
            </div>
          </div>
        </div>
        <div className="accordion__desc">{desc}</div>
      </div>
    </AccordionContainer>
  );
};

export default Accordion;
