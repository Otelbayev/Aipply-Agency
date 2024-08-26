import React, { useRef, useState } from "react";
import { FormContainer } from "./style";
import Message from "./Message";

const FaqForm = () => {
  const token = "7256007186:AAEBOv_fzh82M_iA1tGyvSPWlCBrlPu4DhI";
  const textRef = useRef();
  const [type, setType] = useState("");
  const [errorStyle, setErrorStyle] = useState({});

  async function sentToBot(botToken, chatId) {
    const message = ` \n📫⏳ Aipply Agency \n\n📨📥 Text: ${textRef.current?.value}`;

    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
    const data = {
      chat_id: chatId,
      text: message,
    };

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response;
  }

  const handleSubmit = async (e) => {
    setType("loading");
    e.preventDefault();
    if (!textRef.current?.value) {
      setErrorStyle({
        border: "none",
        boxShadow: "1px 1px 10px red",
      });
      setType("error");
      setTimeout(() => {
        setType("");
      }, 2000);
      return;
    }
    await sentToBot(token, "5942455501");
    textRef.current.value = "";
    setType("success");

    setTimeout(() => {
      setType("");
    }, 1000);
  };
  return (
    <FormContainer>
      <form className="faq-form" onSubmit={handleSubmit}>
        <textarea
          className="faq-form__input"
          placeholder="Ask us what you want to know..."
          ref={textRef}
          style={errorStyle}
          onFocus={() => setErrorStyle({})}
        />
        <div className="faq-form__content">
          <div className="faq-form__content--txt">
            We will answer your questions via email within 48 hours.
          </div>
          <button className="faq-form__content--btn active-btn">Send</button>
        </div>
      </form>
      <Message type={type} />
    </FormContainer>
  );
};

export default FaqForm;
