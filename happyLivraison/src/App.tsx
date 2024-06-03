import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import { useTranslation, Trans } from "react-i18next";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./compements/shared/Layout";
import Dashboard from "./compements/Dashboard";
import New from "./compements/New";
import ManageOrder from "./compements/ManageOrder";
import Payement from "./compements/Payement";
import Review from "./compements/Review";
import Returns from "./compements/Returns";

const lngs: Record<string, { nativeName: string }> = {
  en: { nativeName: "English" },
  fr: { nativeName: "Français" },
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="new" element={<New />} />
          <Route path="manageOrder" element={<ManageOrder />} />
          <Route path="payement" element={<Payement />} />
          <Route path="review" element={<Review />} />
          <Route path="return" element={<Returns />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
