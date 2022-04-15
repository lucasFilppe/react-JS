import React, { Component } from 'react';
import Feed from './Feed';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      feed:[
        {id: 1, username:"Lucas", curtidads:10, comentarios:2},
        {id: 2, username:"Vinicius", curtidas: 23, comentarios:5}
      ]
    };
  }

  sair(){
    this.setState({status: false});
  }

  entrar(){
      this.setState({status: true});
    }

    render(){
    return(
      
        <div>
          {this.state.feed.map((item) => {
          return(
            <div>
              <Feed 
                kry={item.id} 
                username={item.username}
                curtidads={item.curtidads}
                comentarios={item.comentarios}
              />
            </div>
          );
        })}    
        </div>
      
      
    );
  }
}

export default App;
