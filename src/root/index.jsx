import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../views/HomePage";
import NotfoundPage from "../views/NotfoundPage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotfoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Root;
