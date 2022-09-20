import React, { useEffect, useState } from "react";
import "./MainStyle.css";

const MainCadastro = () => {
  const [ route, setRoute ] = useState("");



  useEffect(() => console.log(route), [route])
  return (
    <div className="main_cadastro">
      <div className="cadastro_div">
        <div className="select_route_div">
          <p>Rota:</p>
          <select
            className="select_route"
            onChange={ (event) => { setRoute(event.target.value)}}
          >
          <option></option>
            {["Clientes", "Funcionários", "Vendas", "Remedios"].map((item, index) => {
              return <option key={index}>{item}</option>;
            })}
          </select>
        </div>
        <div className="input_data"></div>
      </div>
    </div>
  );
};

export default MainCadastro;
