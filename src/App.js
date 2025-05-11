import React, { Component } from 'react';

class Equipe extends Component{
  render(){
    return(
      <div>
        <Sobre nome={this.props.nome} cargo={this.props.cargo} idade={this.props.idade}/>
        <Social />
      <hr/>
      </div>
    );
  }
}

class Sobre extends Component{
  render(){
    return(
        <div>
          <h2>Sou o {this.props.nome}</h2>
          <h2>Cargo: {this.props.cargo}</h2>
          <h2>Idade: {this.props.idade}</h2>
        </div>
    );
  }
}

const Social = () => {
  return(
    <div>
    <a>Facebook</a>
    <a>Linkedin</a>
    </div>
  )
}

function App(){
  return(
    <div>
      <h1>Conheça nosso equipe</h1>
      <Equipe nome="Matheus" cargo="Programador" idade="24"/>
      <Equipe nome="Matheus" cargo="Programador" idade="24"/>
    </div>
  );
}

export default App;