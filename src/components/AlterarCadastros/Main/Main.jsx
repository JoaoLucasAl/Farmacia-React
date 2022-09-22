import React, { useEffect, useState } from "react";
import API_Fetch from "../../../hooks/API-Fetch";
import {
  ClientesDataInput,
  FuncionariosDataInput,
  RemediosDataInput,
  VendasDataInput,
} from "../../DataInput/DataInput";
import "./MainStyle.css";

const MainAlterarCadastro = () => {
  const [route, setRoute] = useState("");
  const [data_input, setData_input] = useState();
  const [id, setId] = useState("");
  const [data, setData] = useState({});
  const childToParent = (childData) => {
    setData(childData);
  };

  useEffect(() => {
    if (data.telefone != "") {
      console.log(data);
    }
  }, [data]);
  const API = new API_Fetch();

  useEffect(() => {
    switch (route) {
      case "Clientes":
        setData_input(
          <ClientesDataInput id={id} childToParent={childToParent} />
        );
        break;
      case "Funcionários":
        setData_input(
          <FuncionariosDataInput id={id} childToParent={childToParent} />
        );
        break;
      case "Vendas":
        setData_input(
          <VendasDataInput id={id} childToParent={childToParent} />
        );
        break;
      case "Remédios":
        setData_input(
          <RemediosDataInput id={id} childToParent={childToParent} />
        );
        break;
      default:
        setData_input(<h1>Selecione uma rota</h1>);
    }
  }, [route]);
  return (
    <div className="main_cadastro">
      <div className="cadastro_div">
        <div className="input_id_div">
          <label>ID:</label>
          <input
            type="text"
            onChange={(event) => {
              setId(event.target.value);
            }}
          />
        </div>
        <div className="select_route_div">
          <p>Rota:</p>
          <select
            className="select_route"
            onChange={(event) => {
              setRoute(event.target.value);
            }}
          >
            <option></option>
            {["Clientes", "Funcionários", "Vendas", "Remédios"].map(
              (item, index) => {
                return <option key={index}>{item}</option>;
              }
            )}
          </select>
        </div>
        {data_input}
      </div>
    </div>
  );
};

export default MainAlterarCadastro;
