import React from "react";
import { Container } from "./style";
import { Button } from "../Generics";
import { useTranslation } from "react-i18next";

const Notfound = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <div className="title">{t("404.title")}</div>
      <Button to="/">{t("404.btn")}</Button>
    </Container>
  );
};

export default Notfound;
