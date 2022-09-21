import React from "react";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

class VisualizarRemedio extends React.Component{

    constructor(props){
        super(props);
        this.state= {
            remedios : []
        }
    }

    componentDidMount(){
      fetch('http://api-farmacia-m4.herokuapp.com/remedios')
           .then (resposta => resposta.json())
               .then(dados => {
                 this.setState({remedios:dados.result}) //Remedios sendo passados como dado
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
                <th>ID Remédio</th>
                <th>Nome Remédio</th>
                <th>Principio ativo</th>
                <th>Lab</th>
                <th>Preço</th>
                <th>Estoque</th>
              </tr>
            </thead>
            <tbody>
                 
                 {
                    this.state.remedios.map((remedio) => 
                    <tr>
                    <td>{remedio.ID}</td>
                    <td>{remedio.NOME}</td>
                    <td>{remedio.PRINCIPIO_ATIVO}</td>
                    <td>{remedio.LABORATORIO}</td>
                    <td>{remedio.PRECO}</td>
                    <td>{remedio.ESTOQUE}</td>

                  </tr>
                    )}

             
              
            </tbody>
          </Table>
        

        )
    }



}

export default VisualizarRemedio;