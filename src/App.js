import React, { Component } from 'react';
import './estilo.css'

class App extends Component{

  constructor(props){
    super(props);
    this.state ={
      textoFrase: ''
    };

    this.quebraBiscoito = this.quebraBiscoito.bind(this);

    this.frases = [
  'Acredite em você e tudo será possível.',
  'Grandes mudanças começam com pequenos passos.',
  'Você é mais forte do que imagina.',
  'A sorte favorece os corajosos.',
  'Confie no tempo, ele revela todas as verdades.',
  'A persistência é o caminho do êxito.',
  'Siga seu coração, ele conhece o caminho.',
  'Os desafios são oportunidades disfarçadas.',
  'Você é capaz de coisas incríveis.',
  'Cada dia é uma nova chance de recomeçar.',]
  }

  quebraBiscoito(){
    let state = this.state;
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
    state.textoFrase = '" ' + this.frases[numeroAleatorio] + ' "'
    this.setState(state);
  }

  render(){
    return(
      <div className="container">
        <img src={require('./assets/biscoito.png')} className="img"/>
        <Botao nome="Abrir biscoito" acaoBtn={this.quebraBiscoito}/>
        <div className="textoFrase">{this.state.textoFrase}</div>
      </div>
    );
  }
}

class Botao extends Component{
  render(){
    return(
      <div>
        <button onClick={this.props.acaoBtn}>{this.props.nome}</button>
      </div>
    );
  }
}

export default App;