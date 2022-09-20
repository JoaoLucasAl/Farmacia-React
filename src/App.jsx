import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer.jsx";

import TitleCadastro from "./components/Cadastros/Title/Title";
import MainCadastro from "./components/Cadastros/Main/Main";
function App() {
  return (
    <div className="App">
      {/* Homepage */}
      {/* <Header />
      <Footer /> */}

      {/* Cadastros */}
      <Header />
      <TitleCadastro />
      <MainCadastro />
      <Footer />
    </div>
  );
}

export default App;
