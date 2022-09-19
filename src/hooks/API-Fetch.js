class API_Fetch {
  constructor(url) {
    this.url = url;
  }

  // Rota -> Clientes

  async getAllClientes() {
    try {
      let resp = await fetch(`${url}/clientes`);
      resp = await resp.json();
      return resp;
    } catch (e) {
      console.error(e);
    }
  }

  async getClienteByID(id) {
    try {
      let resp = await fetch(`${url}/clientes/:${id}`);
      resp = await resp.json();
      return resp;
    } catch (e) {
      console.error(e);
    }
  }

  async postNovoCliente(data) {
    try {
      let resp = await fetch(`${url}/clientes`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      });
      resp = await resp.json();
      return resp;
    } catch (e) {
      console.error(e);
    }
  }

  async deleteCliente(id) {
    try {
      let resp = await fetch(`${url}/clientes/:${id}`, {
        method: "DELETE",
        headers: { "Content-type": "application/json; charset=UTF-8" },
      });
      resp = await resp.json();
      return resp;
    } catch (e) {
      console.error(e);
    }
  }

  async putCliente(data, id) {
    try {
      let resp = await fetch(`${url}/clientes/:${id}`, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      });
      resp = await resp.json();
      return resp;
    } catch (e) {
      console.error(e);
    }
  }

  // Rota -> Funcionarios

  async getAllFuncionarios() {
    try {
      let resp = await fetch(`${url}/funcionarios`);
      resp = await resp.json();
      return resp;
    } catch (e) {
      console.error(e);
    }
  }

  async getFuncionarioByID(id) {
    try {
      let resp = await fetch(`${url}/funcionarios/:${id}`);
      resp = await resp.json();
      return resp;
    } catch (e) {
      console.error(e);
    }
  }

  async postNovoFuncionario(data) {
    try {
      let resp = await fetch(`${url}/funcionarios`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      });
      resp = await resp.json();
      return resp;
    } catch (e) {
      console.error(e);
    }
  }

  async deleteFuncionario(id) {
    try {
      let resp = await fetch(`${url}/funcionarios/:${id}`, {
        method: "DELETE",
        headers: { "Content-type": "application/json; charset=UTF-8" },
      });
      resp = await resp.json();
      return resp;
    } catch (e) {
      console.error(e);
    }
  }

  async putFuncionario(data, id) {
    try {
      let resp = await fetch(`${url}/funcionarios/:${id}`, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      });
      resp = await resp.json();
      return resp;
    } catch (e) {
      console.error(e);
    }
  }

  // Rota -> Vendas

  async getAllVendas() {
    try {
      let resp = await fetch(`${url}/vendas`);
      resp = await resp.json();
      return resp;
    } catch (e) {
      console.error(e);
    }
  }

  async getVendaByID(id) {
    try {
      let resp = await fetch(`${url}/vendas/:${id}`);
      resp = await resp.json();
      return resp;
    } catch (e) {
      console.error(e);
    }
  }

  async postNovaVenda(data) {
    try {
      let resp = await fetch(`${url}/vendas`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      });
      resp = await resp.json();
      return resp;
    } catch (e) {
      console.error(e);
    }
  }

  async deleteVenda(id) {
    try {
      let resp = await fetch(`${url}/vendas/:${id}`, {
        method: "DELETE",
        headers: { "Content-type": "application/json; charset=UTF-8" },
      });
      resp = await resp.json();
      return resp;
    } catch (e) {
      console.error(e);
    }
  }

  async putVenda(data, id) {
    try {
      let resp = await fetch(`${url}/vendas/:${id}`, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      });
      resp = await resp.json();
      return resp;
    } catch (e) {
      console.error(e);
    }
  }
}
