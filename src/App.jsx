import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer.jsx";
import SecondHeader from "./components/Home/SecondHeader/SecondHeader";
import HomeMain from "./components/Home/HomeMain/HomeMain";
import TitleCadastro from "./components/Cadastros/Title/Title";
import MainCadastro from "./components/Cadastros/Main/Main";
import Home from "./pages/Home";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Cadastros from "./pages/Cadastros";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
     <Routes>
    
      <Route path="/" element ={<Home/>}/>
      <Route path="/Cadastros" element ={<Cadastros/>}/>
     </Routes>
     <Footer/>
     </BrowserRouter>
      {/* Cadastros */}
      {/* <Header />
      <TitleCadastro />
      <MainCadastro />
      <Footer /> */}
    </div>
  );
}

export default App;
