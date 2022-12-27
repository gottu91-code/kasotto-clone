import { Header } from "./components/Header";
import "./css/reset.css";
import "./css/base.css";
import { SectionNewRealtor } from "./components/SectionNewRealtor";
import { Loading } from "./components/Loading";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import { SectionMain } from "./components/SectionMain";
import { Realtor } from "./components/Realtor";

export const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <BrowserRouter>
        <Header />
        <SectionMain>
          <Routes>
            <Route
              path={"/"}
              element={<SectionNewRealtor setIsLoading={setIsLoading} />}
            />
            <Route
              path={"/"}
              element={<Loading isLoading={isLoading} />}
            ></Route>
            <Route path={"/realtor"} element={<Realtor />} />
          </Routes>
        </SectionMain>
        <Footer />
      </BrowserRouter>
    </>
  );
};
