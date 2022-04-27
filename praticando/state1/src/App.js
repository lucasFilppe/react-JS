
import React, { Component } from 'react'
    
class App extends Component { 
  constructor(props){ 
    super(props) 
        
    // definindo inicio do estado
    this.state = {saudacoes: 
          'Clique no botao para receber saudacoes'} 
        
    // Binding this keyword 
    this.updateState = this.updateState.bind(this) 
  } 
    
  updateState(){ 
    //mudando estado 
    this.setState({saudacoes: 
                 'Bem vindo Lucas !!'}) 
  } 
      
  render(){ 
    return ( 
      <div> 
       <h2>Greetings Portal</h2>   
       <p>{this.state.saudacoes}</p>
      
        {/* Set click handler */} 
        <button onClick={this.updateState}> 
          Click me!
        </button> 
      </div> 
    ) 
  } 
} 
    
export default App;
