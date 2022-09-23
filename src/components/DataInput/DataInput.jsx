import React, { useState, useEffect } from "react";
import "./DataInputStyle.css";
import { useForm } from "react-hook-form";

const ClientesDataInput = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (date) =>
    props.childToParent({
      NOME: date.NOME,
      EMAIL: date.EMAIL,
      TELEFONE: date.TELEFONE,
      CPF: date.CPF,
    });

  return (
    <form className="data_input" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Nome:</label>
        <input
          name="NOME"
          {...register("NOME", { required: true, minLength: 10 })}
          type="text"
        />
        {errors.NOME && <span>Esse campo é obrigatório.</span>}
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="EMAIL"
          {...register("EMAIL", {
            required: true,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "Enter a valid e-mail address",
            },
          })}
        />
        {errors.EMAIL && <span>Esse campo é obrigatório.</span>}
      </div>
      <div>
        <label>Telefone:</label>
        <input
          type="text"
          name="TELEFONE"
          {...register("TELEFONE", {
            required: true,
            // pattern: {
            //   value:
            //     /^(?:\+)[0-9]{2}\s?(?:\()[0-9]{2}(?:\))\s?[0-9]{4,5}(?:-)[0-9]{4}$/,
            //   message: "Enter a valid cell phone number",
            // },
          })}
        />
        {errors.TELEFONE && <span>Esse campo é obrigatório.</span>}
      </div>
      <div>
        <label>CPF:</label>
        <input
          type="text"
          name="CPF"
          {...register("CPF", {
            required: true,
            pattern: {
              value: /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/,
              message: "CPF inválido ",
            },
          })}
        />
        {errors.CPF && <span>Esse campo é obrigatório.</span>}
      </div>
      <button className="cadastrar_btn">CADASTRAR</button>
    </form>
  );
};

const FuncionariosDataInput = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (date) =>
    props.childToParent({
      NOME: date.NOME,
      EMAIL: date.EMAIL,
      TELEFONE: date.TELEFONE,
      CARGO: date.CARGO,
      CPF: date.CPF,
    });

  return (
    <form className="data_input" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Nome:</label>
        <input
          type="text"
          name="NOME"
          {...register("NOME", { required: true, minLength: 10 })}
        />
        {errors.NOME && <span>Esse campo é obrigatório.</span>}
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="EMAIL"
          {...register("EMAIL", {
            required: true,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "Enter a valid e-mail address",
            },
          })}
        />
        {errors.EMAIL && <span>Esse campo é obrigatório.</span>}
      </div>
      <div>
        <label>Telefone:</label>
        <input
          type="text"
          name="TELEFONE"
          {...register("TELEFONE", {
            required: true,
            // pattern: {
            //   value:
            //     /^(?:\+)[0-9]{2}\s?(?:\()[0-9]{2}(?:\))\s?[0-9]{4,5}(?:-)[0-9]{4}$/,
            //   message: "Enter a valid cell phone number",
            // },
          })}
        />
        {errors.TELEFONE && <span>Esse campo é obrigatório.</span>}
      </div>
      <div>
        <label>Cargo:</label>
        <input
          type="text"
          name="CARGO"
          {...register("CARGO", { required: true, minLength: 10 })}
        />
        {errors.CARGO && <span>Esse campo é obrigatório.</span>}
      </div>
      <div>
        <label>CPF:</label>
        <input
          type="text"
          name="CPF"
          {...register("CPF", {
            required: true,
            pattern: {
              value: /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/,
              message: "CPF inválido ",
            },
          })}
        />
        {errors.CPF && <span>Esse campo é obrigatório.</span>}
      </div>

      <button className="cadastrar_btn">CADASTRAR</button>
    </form>
  );
};

const RemediosDataInput = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (date) =>
    props.childToParent({
      NOME: date.NOME,
      PRINCIPIO_ATIVO: date.PRINCIPIO_ATIVO,
      LABORATORIO: date.LABORATORIO,
      PRECO: parseFloat(date.PRECO),
      ESTOQUE: parseInt(date.ESTOQUE),
    });

  return (
    <form className="data_input" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Nome:</label>
        <input
          type="text"
          name="NOME"
          {...register("NOME", { required: true, minLength: 10 })}
        />
        {errors.NOME && <span>Esse campo é obrigatório.</span>}
      </div>
      <div>
        <label>Princípio ativo:</label>
        <input
          type="text"
          name="PRINCIPIO_ATIVO"
          {...register("PRINCIPIO_ATIVO", { required: true, minLength: 5 })}
        />
        {errors.PRINCIPIO_ATIVO && <span>Esse campo é obrigatório.</span>}
      </div>
      <div>
        <label>Laboratório:</label>
        <input
          type="text"
          name="LABORATORIO"
          {...register("LABORATORIO", { required: true, minLength: 5 })}
        />
        {errors.LABORATORIO && <span>Esse campo é obrigatório.</span>}
      </div>
      <div>
        <label>Preço:</label>
        <input
          type="float"
          name="PRECO"
          {...register("PRECO", {
            required: true,
            pattern: {
              value: /[0-9]/,
              message: "Insira um preço válido",
            },
          })}
        />
        {errors.PRECO && <span>Esse campo é obrigatório.</span>}
      </div>
      <div>
        <label>Estoque:</label>
        <input
          type="number"
          name="ESTOQUE"
          {...register("ESTOQUE", {
            required: true,
            pattern: {
              value: /[0-9]/,
              message: "Insira um valor válido",
            },
          })}
        />
        {errors.ESTOQUE && <span>Esse campo é obrigatório.</span>}
      </div>

      <button className="cadastrar_btn">CADASTRAR</button>
    </form>
  );
};

const VendasDataInput = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (date) =>
    props.childToParent({
      REMEDIO_ID: date.REMEDIO_ID,
      QUANTIDADE: parseInt(date.QUANTIDADE),
      PRECO: parseFloat(date.PRECO),
      DESCONTO: date.DESCONTO,
      FUNCIONARIO_ID: date.FUNCIONARIO_ID,
      CLIENTE_ID: date.CLIENTE_ID,
    });

  return (
    <form className="data_input" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Remédio ID:</label>
        <input
          type="text"
          name="REMEDIO_ID"
          {...register("REMEDIO_ID", {
            required: true,
          })}
        />
        {errors.REMEDIO_ID && <span>Esse campo é obrigatório.</span>}
      </div>
      <div>
        <label>Quantidade:</label>
        <input
          type="number"
          name="QUANTIDADE"
          {...register("QUANTIDADE", {
            required: true,
            pattern: {
              value: /[0-9]/,
              message: "Insira um preço válido",
            },
          })}
        />
        {errors.QUANTIDADE && <span>Esse campo é obrigatório.</span>}
      </div>
      <div>
        <label>Preço:</label>
        <input
          type="float"
          name="PRECO"
          {...register("PRECO", {
            required: true,
            pattern: {
              value: /[0-9]/,
              message: "Insira um preço válido",
            },
          })}
        />
        {errors.PRECO && <span>Esse campo é obrigatório.</span>}
      </div>
      <div>
        <label>Desconto:</label>
        <input
          type="text"
          name="DESCONTO"
          {...register("DESCONTO", {
            required: true,
            pattern: {
              value: /[0-9]/,
              message: "Insira um desconto válido",
            },
          })}
        />
        {errors.DESCONTO && <span>Esse campo é obrigatório.</span>}
      </div>
      <div>
        <label>Funcionário ID:</label>
        <input
          type="text"
          name="FUNCIONARIO_ID"
          {...register("FUNCIONARIO_ID", {
            required: true,
          })}
        />
        {errors.FUNCIONARIO_ID && <span>Esse campo é obrigatório.</span>}
      </div>
      <div>
        <label>Cliente ID:</label>
        <input
          type="text"
          name="CLIENTE_ID"
          {...register("CLIENTE_ID", {
            required: true,
          })}
        />
        {errors.CLIENTE_ID && <span>Esse campo é obrigatório.</span>}
      </div>
      <button className="cadastrar_btn">CADASTRAR</button>
    </form>
  );
};

export {
  ClientesDataInput,
  FuncionariosDataInput,
  RemediosDataInput,
  VendasDataInput,
};
