import React from "react";
import { Container } from "./style";
import Item from "./Item";

const News = () => {
  return (
    <Container>
      <div className="container">
        <div className="min">Yangiliklar</div>
        <div className="title">Yangiliklar va e’lonlar</div>
        <div className="news">
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
        <div className="button">
          <button className="active-button">Ko’proq o’qish</button>
        </div>
      </div>
    </Container>
  );
};

export default News;
