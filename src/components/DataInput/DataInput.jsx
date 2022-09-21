import React, { useState, useEffect } from "react";
import "./DataInputStyle.css";
import { useForm } from "react-hook-form";

const ClientesDataInput = (props) => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cpf, setCpf] = useState("");
  const [data, setData] = useState({});

  useEffect( () => props.childToParent(data), [data])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (date) => props.childToParent(date);

  return (
    <form className="data_input" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Nome:</label>
        <input
          name="nome"
          {...register("nome", { required: true, minLength: 10 })}
          type="text"
          onChange={(event) => {
            setNome(event.target.value);
          }}
        />
        {errors.nome && <span>Esse campo é obrigatório.</span>}
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          name="email"
          {...register("email", {
            required: true,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "Enter a valid e-mail address",
            },
          })}
        />
        {errors.email && <span>Esse campo é obrigatório.</span>}
      </div>
      <div>
        <label>Telefone:</label>
        <input
          type="text"
          onChange={(event) => {
            setTelefone(event.target.value);
          }}
          name="telefone"
          {...register("telefone", {
            required: true,
            // pattern: {
            //   value:
            //     /^(?:\+)[0-9]{2}\s?(?:\()[0-9]{2}(?:\))\s?[0-9]{4,5}(?:-)[0-9]{4}$/,
            //   message: "Enter a valid cell phone number",
            // },
          })}
        />
        {errors.telefone && <span>Esse campo é obrigatório.</span>}
      </div>
      <div>
        <label>CPF:</label>
        <input
          type="text"
          onChange={(event) => {
            setCpf(event.target.value);
          }}
          name="cpf"
          {...register("cpf", {
            required: true,
            pattern: {
              value: /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/,
              message: "CPF inválido ",
            },
          })}
        />
        {errors.cpf && <span>Esse campo é obrigatório.</span>}
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
    </form>
  );
};

const FuncionariosDataInput = (props) => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cargo, setCargo] = useState("");
  const [cpf, setCpf] = useState("");
  const [data, setData] = useState({});

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (date) => console.log(date);

  return (
    <form className="data_input" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Nome:</label>
        <input
          type="text"
          onChange={(event) => {
            setNome(event.target.value);
          }}
          name="nome"
          {...register("nome", { required: true, minLength: 10 })}
        />
        {errors.nome && <span>Esse campo é obrigatório.</span>}
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          name="email"
          {...register("email", {
            required: true,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "Enter a valid e-mail address",
            },
          })}
        />
        {errors.email && <span>Esse campo é obrigatório.</span>}
      </div>
      <div>
        <label>Telefone:</label>
        <input
          type="text"
          onChange={(event) => {
            setTelefone(event.target.value);
          }}
          name="telefone"
          {...register("telefone", {
            required: true,
            pattern: {
              value:
                /^(?:\+)[0-9]{2}\s?(?:\()[0-9]{2}(?:\))\s?[0-9]{4,5}(?:-)[0-9]{4}$/,
              message: "Enter a valid cell phone number",
            },
          })}
        />
        {errors.telefone && <span>Esse campo é obrigatório.</span>}
      </div>
      <div>
        <label>Cargo:</label>
        <input
          type="text"
          onChange={(event) => {
            setCargo(event.target.value);
          }}
          name="cargo"
          {...register("cargo", { required: true, minLength: 10 })}
        />
        {errors.cargo && <span>Esse campo é obrigatório.</span>}
      </div>
      <div>
        <label>CPF:</label>
        <input
          type="text"
          onChange={(event) => {
            setCpf(event.target.value);
          }}
          name="cpf"
          {...register("cpf", {
            required: true,
            pattern: {
              value: /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/,
              message: "CPF inválido ",
            },
          })}
        />
        {errors.cpf && <span>Esse campo é obrigatório.</span>}
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
    </form>
  );
};

const RemediosDataInput = (props) => {
  const [nome, setNome] = useState("");
  const [principio_ativo, setPrincipio_ativo] = useState("");
  const [laboratorio, setLaboratorio] = useState("");
  const [preco, setPreco] = useState("");
  const [estoque, setEstoque] = useState("");
  const [data, setData] = useState({});

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (date) => console.log(date);

  return (
    <form className="data_input" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Nome:</label>
        <input
          type="text"
          onChange={(event) => {
            setNome(event.target.value);
          }}
          name="nome"
          {...register("nome", { required: true, minLength: 10 })}
        />
        {errors.nome && <span>Esse campo é obrigatório.</span>}
      </div>
      <div>
        <label>Princípio ativo:</label>
        <input
          type="email"
          onChange={(event) => {
            setPrincipio_ativo(event.target.value);
          }}
          name="princip"
          {...register("princip", { required: true, minLength: 5 })}
        />
        {errors.princip && <span>Esse campo é obrigatório.</span>}
      </div>
      <div>
        <label>Laboratório:</label>
        <input
          type="text"
          onChange={(event) => {
            setLaboratorio(event.target.value);
          }}
          name="lab"
          {...register("lab", { required: true, minLength: 5 })}
        />
        {errors.lab && <span>Esse campo é obrigatório.</span>}
      </div>
      <div>
        <label>Preço:</label>
        <input
          type="text"
          onChange={(event) => {
            setPreco(event.target.value);
          }}
          name="preco"
          {...register("preco", {
            required: true,
            pattern: {
              value: /[0-9]/,
              message: "Insira um preço válido",
            },
          })}
        />
        {errors.preco && <span>Esse campo é obrigatório.</span>}
      </div>
      <div>
        <label>Estoque:</label>
        <input
          type="text"
          onChange={(event) => {
            setEstoque(event.target.value);
          }}
          name="estoque"
          {...register("estoque", {
            required: true,
            pattern: {
              value: /[0-9]/,
              message: "Insira um valor válido",
            },
          })}
        />
        {errors.estoque && <span>Esse campo é obrigatório.</span>}
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
    </form>
  );
};

const VendasDataInput = (props) => {
  const [remedio_id, setRemedio_id] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [preco, setPreco] = useState("");
  const [desconto, setDesconto] = useState("");
  const [funcionario_id, setFuncionario_id] = useState("");
  const [cliente_id, setCliente_id] = useState("");
  const [data, setData] = useState({});

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form className="data_input" onSubmit={handleSubmit(onSubmit)}>
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
          name="qnt"
          {...register("qnt", {
            required: true,
            pattern: {
              value: /[0-9]/,
              message: "Insira um preço válido",
            },
          })}
        />
        {errors.qnt && <span>Esse campo é obrigatório.</span>}
      </div>
      <div>
        <label>Preço:</label>
        <input
          type="text"
          onChange={(event) => {
            setPreco(event.target.value);
          }}
          name="preco"
          {...register("preco", {
            required: true,
            pattern: {
              value: /[0-9]/,
              message: "Insira um preço válido",
            },
          })}
        />
        {errors.preco && <span>Esse campo é obrigatório.</span>}
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
    </form>
  );
};

export {
  ClientesDataInput,
  FuncionariosDataInput,
  RemediosDataInput,
  VendasDataInput,
};
