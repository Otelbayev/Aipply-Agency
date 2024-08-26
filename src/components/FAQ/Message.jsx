import React from "react";
import { Msg } from "./style";
import loading from "../../assets/loading.gif";
import err from "../../assets/error.png";
import succ from "../../assets/success.png";

const Message = ({ type }) => {
  const obj = {
    error: (
      <Msg type={"error"}>
        <img src={err} />
        Error!
      </Msg>
    ),
    loading: (
      <Msg type={"loading"}>
        <img src={loading} alt="error" /> Loading!
      </Msg>
    ),
    success: (
      <Msg type={"success"}>
        <img src={succ} /> Success!
      </Msg>
    ),
  };
  return obj[type];
};

export default Message;
