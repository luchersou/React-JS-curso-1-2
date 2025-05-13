import React, { Component } from 'react';
import Feed from './components/Feed';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
        feed: [
          {id: 1, username: 'Lucas', curtidas: 10, comentarios: 2},
          {id: 2, username: 'Matheus', curtidas: 5, comentarios: 24},
          {id: 3, username: 'Amanda', curtidas: 15, comentarios: 7},
          {id: 4, username: 'Ricardo', curtidas: 1, comentarios: 0},
        ]
    };
  }

  render(){
    return(
      <div>        
        {this.state.feed.map((item) => {
          return(            
            <Feed id={item.id} username={item.username} curtidas={item.curtidas} comentarios={item.comentarios} />
          );
        })}

      </div>
    );
  }
}

export default App;