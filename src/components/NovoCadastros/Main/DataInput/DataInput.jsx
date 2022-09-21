import React, { useState, useEffect } from "react";
import "./DataInputStyle.css";

const ClientesDataInput = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cpf, setCpf] = useState("");
  const [data, setData] = useState({});

  return (
    <div className="data_input">
      <div>
        <label>Nome:</label>
        <input
          type="text"
          onChange={(event) => {
            setNome(event.target.value);
          }}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
      </div>
      <div>
        <label>Telefone:</label>
        <input
          type="text"
          onChange={(event) => {
            setTelefone(event.target.value);
          }}
        />
      </div>
      <div>
        <label>CPF:</label>
        <input
          type="text"
          onChange={(event) => {
            setCpf(event.target.value);
          }}
        />
      </div>
      <button
        className="cadastrar_btn"
        onClick={() => {
          setData({
            NOME: nome,
            EMAIL: email,
            TELEFONE: telefone,
            CPF: cpf,
          });
        }}
      >
        CADASTRAR
      </button>
    </div>
  );
};

const FuncionariosDataInput = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cargo, setCargo] = useState("");
  const [cpf, setCpf] = useState("");
  const [data, setData] = useState({});

  return (
    <div className="data_input">
      <div>
        <label>Nome:</label>
        <input
          type="text"
          onChange={(event) => {
            setNome(event.target.value);
          }}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
      </div>
      <div>
        <label>Telefone:</label>
        <input
          type="text"
          onChange={(event) => {
            setTelefone(event.target.value);
          }}
        />
      </div>
      <div>
        <label>Cargo:</label>
        <input
          type="text"
          onChange={(event) => {
            setCargo(event.target.value);
          }}
        />
      </div>
      <div>
        <label>CPF:</label>
        <input
          type="text"
          onChange={(event) => {
            setCpf(event.target.value);
          }}
        />
      </div>

      <button
        className="cadastrar_btn"
        onClick={() => {
          setData({
            NOME: nome,
            EMAIL: email,
            TELEFONE: telefone,
            CARGO: cargo,
            CPF: cpf,
          });
        }}
      >
        CADASTRAR
      </button>
    </div>
  );
};

const RemediosDataInput = () => {
  const [nome, setNome] = useState("");
  const [principio_ativo, setPrincipio_ativo] = useState("");
  const [laboratorio, setLaboratorio] = useState("");
  const [preco, setPreco] = useState("");
  const [estoque, setEstoque] = useState("");
  const [data, setData] = useState({});
  return (
    <div className="data_input">
      <div>
        <label>Nome:</label>
        <input
          type="text"
          onChange={(event) => {
            setNome(event.target.value);
          }}
        />
      </div>
      <div>
        <label>Princípio ativo:</label>
        <input
          type="email"
          onChange={(event) => {
            setPrincipio_ativo(event.target.value);
          }}
        />
      </div>
      <div>
        <label>Laboratório:</label>
        <input
          type="text"
          onChange={(event) => {
            setLaboratorio(event.target.value);
          }}
        />
      </div>
      <div>
        <label>Preço:</label>
        <input
          type="text"
          onChange={(event) => {
            setPreco(event.target.value);
          }}
        />
      </div>
      <div>
        <label>Estoque:</label>
        <input
          type="text"
          onChange={(event) => {
            setEstoque(event.target.value);
          }}
        />
      </div>

      <button
        className="cadastrar_btn"
        onClick={() => {
          setData({
            NOME: nome,
            PRINCIPIO_ATIVO: principio_ativo,
            LABORATORIO: laboratorio,
            PRECO: preco,
            ESTOQUE: estoque,
          });
        }}
      >
        CADASTRAR
      </button>
    </div>
  );
};

const VendasDataInput = () => {
  const [remedio_id, setRemedio_id] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [preco, setPreco] = useState("");
  const [desconto, setDesconto] = useState("");
  const [funcionario_id, setFuncionario_id] = useState("");
  const [cliente_id, setCliente_id] = useState("");
  const [data, setData] = useState({});

  return (
    <div className="data_input">
      <div>
        <label>Remédio ID:</label>
        <input
          type="text"
          onChange={(event) => {
            setRemedio_id(event.target.value);
          }}
        />
      </div>
      <div>
        <label>Quantidade:</label>
        <input
          type="email"
          onChange={(event) => {
            setQuantidade(event.target.value);
          }}
        />
      </div>
      <div>
        <label>Preço:</label>
        <input
          type="text"
          onChange={(event) => {
            setPreco(event.target.value);
          }}
        />
      </div>
      <div>
        <label>Desconto:</label>
        <input
          type="text"
          onChange={(event) => {
            setDesconto(event.target.value);
          }}
        />
      </div>
      <div>
        <label>Funcionário ID:</label>
        <input
          type="text"
          onChange={(event) => {
            setFuncionario_id(event.target.value);
          }}
        />
      </div>
      <div>
        <label>Cliente ID:</label>
        <input
          type="text"
          onChange={(event) => {
            setCliente_id(event.target.value);
          }}
        />
      </div>
      <button
        className="cadastrar_btn"
        onClick={() => {
          setData({
            REMEDIO_ID: remedio_id,
            QUANTIDADE: quantidade,
            PRECO: preco,
            DESCONTO: desconto,
            FUNCIONARIO_ID: funcionario_id,
            CLIENTE_ID: cliente_id,
          });
        }}
      >
        CADASTRAR
      </button>
    </div>
  );
};

export {
  ClientesDataInput,
  FuncionariosDataInput,
  RemediosDataInput,
  VendasDataInput,
};
