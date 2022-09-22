import React, { useEffect, useState } from "react";
import {
  ClientesDataInput,
  FuncionariosDataInput,
  RemediosDataInput,
  VendasDataInput,
} from "../../DataInput/DataInput";
import "./MainStyle.css";

const MainNovoCadastro = () => {
  const [route, setRoute] = useState("");
  const [data_input, setData_input] = useState();
  const [data, setData] = useState({});
  const childToParent = (childData) => {
    setData(childData);
  };
  useEffect(() => console.log(data), [data]);
  useEffect(() => {
    switch (route) {
      case "Clientes":
        setData_input(<ClientesDataInput childToParent={childToParent} />);
        break;
      case "Funcionários":
        setData_input(<FuncionariosDataInput childToParent={childToParent} />);
        break;
      case "Vendas":
        setData_input(<VendasDataInput childToParent={childToParent} />);
        break;
      case "Remédios":
        setData_input(<RemediosDataInput childToParent={childToParent} />);
        break;
      default:
        setData_input(<h1>Selecione uma rota</h1>);
    }
  }, [route]);
  return (
    <div className="main_cadastro">
      <div className="cadastro_div">
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

export default MainNovoCadastro;
