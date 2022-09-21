import React from "react";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Visualizar.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import VisualizarRemedio from './VisualizarRemedios.jsx'
import VisualizarCliente from './VisualizarClientes.jsx'
import VisualizarFuncionario from './VisualizarFuncionario.jsx'
import VisualizarVenda from './VisualizarVenda.jsx'




class Visualizar extends React.Component{

    constructor(){
        super();
            this.state= {item: ""}
    }

    MudaItem = e => {
      this.setState({item: e.target.value});
    }

    render (){
        return (
          

          <Container className="container">
          <div className="title_div_visualizar">
Visualização de Dados:
        </div>
        <div className="innerContainer"> 
                    <Row>
            <Col className="coluna">  
            <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Exibição: </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Escolha quais dados quer visualizar:</Card.Subtitle>
        <Card.Text>
            <select value={this.state.item} onChange={this.MudaItem}>
                <option> Selecionar Tabela </option>
                <option value="Clientes"> Clientes </option>
                <option value="Funcionarios"> Funcionários </option>
                <option value="Remedios"> Remedios </option>
                <option value="Vendas"> Vendas </option>

            </select>
        </Card.Text>
      
      </Card.Body>
    </Card>
            
            
             </Col>
            <Col xs={8}> 
              {this.state.item == 'Clientes' && <VisualizarCliente/> /*Renderização condicional*/} 
              {this.state.item == 'Remedios' && <VisualizarRemedio/>}
              {this.state.item == 'Funcionarios' && <VisualizarFuncionario/>}
              {this.state.item == 'Vendas' && <VisualizarVenda/>}

          </Col>
          </Row>
          </div>
        </Container>

        )
    }



}

export default Visualizar;