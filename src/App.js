import React from 'react';

const Equipe = (props) => {
  return(
    <div>
      <Sobre username={props.nome} cargo={props.cargo} idade={props.idade}/>
      <Social fb={props.Facebook}/>
    <hr/>
    </div>
  );
}

const Social = (props) =>{
  return(
    <div>
      <a href={props.fb}>Facebook</a>
      <a>Linkedin</a>
      <a>Youtube</a>
    </div>
  );
}

const Sobre = (props) => {
  return(
    <div>
        <h2>Olá, sou o {props.username}</h2>
        <h3>Cargo: {props.cargo}</h3>
        <h3>Idade: {props.idade}</h3>
    </div>
  );
}

function App(){
  return(
    <div>
      <h1>Conheça nosso equipe</h1>
      <Equipe nome ="Lucas" cargo="programador" idade="29" Facebook="https://www.facebook.com"/>
      <Equipe nome ="Matheus" cargo="designer" idade="18" Facebook="https://www.facebook.com"/>
    </div>
  );
}

export default App;