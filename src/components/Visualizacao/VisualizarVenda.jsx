import React from "react";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

class VisualizarVenda extends React.Component{

    constructor(props){
        super(props);
        this.state= {
            vendas : []
        }
    }

    componentDidMount(){
      fetch('http://api-farmacia-m4.herokuapp.com/vendas')
           .then (resposta => resposta.json())
               .then(dados => {
                 this.setState({vendas:dados.result})
                                  console.log(dados)
               } )
             
   }

    render (){ 
        return (
            <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>ID Venda</th>
                <th>ID Remedio</th>
                <th>Quantidade</th>
                <th>Preço</th>
                <th>Desconto</th>
                <th>ID Funcionario</th>
                <th>ID Cliente</th>
                <th>Total:</th>

              </tr>
            </thead>
            <tbody>
                 
                 {
                    this.state.vendas.map((venda) => 
                    <tr>
                    <td>{venda.ID}</td>
                    <td>{venda.REMEDIO_ID}</td>
                    <td>{venda.QUANTIDADE}</td>
                    <td>{venda.PRECO}</td>
                    <td>{venda.DESCONTO}</td>
                    <td>{venda.FUNCIONARIO_ID}</td>
                    <td>{venda.CLIENTE_ID}</td>
                  <td>{venda.QUANTIDADE * venda.PRECO}</td>

                

                  </tr>
                    )}

             
              
            </tbody>
          </Table>
        

        )
    }



}

export default VisualizarVenda;