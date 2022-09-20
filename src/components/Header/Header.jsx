import React from "react";
import logo from "../../assets/logo.png";
import "./HeaderStyle.css";

const Header = () => {
  return (
    <header className="header">
      <div className="div-logo">
        <img src={logo} className="logo" />
        <h1 className="logo_text">farmareact</h1>
      </div>
      
      <nav className="nav">
        <ul className="lista">
            <li className="lista-item">Cadastros</li>
            <li className="lista-item">Novo cadastro</li>
            <li className="lista-item">Modificar</li>
            <li className="lista-item">Contato</li>
        </ul>
      </nav>
    </header>
    
  );
};

export default Header;
