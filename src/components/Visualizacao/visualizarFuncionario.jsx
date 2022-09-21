import React from "react";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

class VisualizarFuncionario extends React.Component{

    constructor(props){
        super(props);
        this.state= {
            funcionarios : []
        }
    }

    componentDidMount(){
      fetch('http://api-farmacia-m4.herokuapp.com/funcionarios')
           .then (resposta => resposta.json())
               .then(dados => {
                 this.setState({funcionarios:dados.result})
                                  console.log(dados)
               } )
             
   }

   /* MudaItem = e => {
      this.setState({item: e.target.value});
    }
*/

    render (){ //Retorno da tabela remedio
        return (
            <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>ID Funcionário</th>
                <th>Nome Funcionário</th>
                <th>Cargo</th>
                <th>Telefone</th>
                <th>Email</th>
                <th>CPF</th>

              </tr>
            </thead>
            <tbody>
                 
                 {
                    this.state.funcionarios.map((funcionario) => 
                    <tr>
                    <td>{funcionario.ID}</td>
                    <td>{funcionario.NOME}</td>
                    <td>{funcionario.CARGO}</td>
                    <td>{funcionario.TELEFONE}</td>
                    <td>{funcionario.EMAIL}</td>
                    <td>{funcionario.CPF}</td>

                

                  </tr>
                    )}

             
              
            </tbody>
          </Table>
        

        )
    }



}

export default VisualizarFuncionario;