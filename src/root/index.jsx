import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../views/HomePage";
import NotfoundPage from "../views/NotfoundPage";

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
