import React from "react";
import { Msg } from "./style";

const Message = ({ type }) => {
  const obj = {
    error: <Msg type={"error"}>Error!</Msg>,
    loading: <Msg type={"loading"}>Loading!</Msg>,
    success: <Msg type={"success"}>Success!</Msg>,
  };
  return obj[type];
};

export default Message;
