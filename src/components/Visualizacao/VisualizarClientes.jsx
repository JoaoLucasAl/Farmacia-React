import React from "react";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

class VisualizarClientes extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            clientes: []
        }
    }

    componentDidMount(){
       fetch('http://api-farmacia-m4.herokuapp.com/clientes')
            .then (resposta => resposta.json())
                .then(dados => {
                  this.setState({clientes:dados.result}) //Remedios sendo passados como dado
                  console.log(dados.result)
                } )
              
    }

   /* MudaItem = e => {
      this.setState({item: e.target.value});
    }
*/

    render (){
        return (
            <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>ID Cliente</th>
                <th>Nome Clinte</th>
                <th>Email Cliente</th>
                <th>Tel Cliente</th>
                <th>CPF Cliente</th>

                
              </tr>
            </thead>
            <tbody>
                 
                 {
                    this.state.clientes.map((cliente) => 
                    <tr>
                    <td>{cliente.ID}</td>
                    <td>{cliente.NOME}</td>
                    <td>{cliente.EMAIL}</td>
                    <td>{cliente.TELEFONE}</td>
                    <td>{cliente.CPF}</td>
                 

                  </tr>
                    )}

             
              
            </tbody>
          </Table>
        

        )
    }



}

export default VisualizarClientes;