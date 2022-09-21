import { useState } from "react";
import { BrowserRouter, Routes, Link, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer.jsx";
import SecondHeader from "./components/Home/SecondHeader/SecondHeader";
import HomeMain from "./components/Home/HomeMain/HomeMain";
import Visualizar from "./components/Visualizacao/Visualizar.jsx";
import TitleCadastro from "./components/Cadastros/Title/Title";
import MainCadastro from "./components/Cadastros/Main/Main";

function App() {
  return (
    <div className="App">
  <Header/>      
      <Visualizar/>
    <Footer/>
    </div>
  );
}

export default App;
