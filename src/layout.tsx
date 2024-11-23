import React, { PropsWithChildren } from "react";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { BrowserRouter } from "react-router-dom";
// import { Header } from "./components/header";
// import { Footer } from "./components/footer";
// import { DroughtPrediction } from "./components/drought-prediction";

function Layout({ children }: PropsWithChildren) {
  return (
    <div className="flex w-full flex-col">
      <BrowserRouter>
        <Header />
        <main className="flex">{children}</main>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default Layout;
