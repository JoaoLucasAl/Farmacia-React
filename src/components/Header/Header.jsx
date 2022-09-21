import React from "react";
import logo from "../../assets/logo.png";
import "./HeaderStyle.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        {" "}
        <div className="div-logo">
          <img src={logo} className="logo" />
          <h1 className="logo_text">farmareact</h1>
        </div>
      </Link>
      <nav className="nav">
        <ul className="lista">
          <li className="lista-item"> Cadastros</li>
          <Link to="/NovoCadastros">
            <li className="lista-item">Novo cadastro</li>
          </Link>
          <Link to="/AlterarCadastros">
            <li className="lista-item">Modificar</li>
          </Link>
          <li className="lista-item">Contato</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
