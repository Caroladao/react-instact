import React, { Component } from 'react';
import FotoItem from './Foto';

export default class Timeline extends Component {

  constructor(){
    super()
    this.state = { fotos:[] }
  }

  componentDidMount(){
    fetch( "https://instalura-api.herokuapp.com/api/public/fotos/rafael" )
    .then( response => response.json() )
    .then( photos => {
      this.setState({ fotos: photos })
    })
  }

  render(){
      return (
        <div className="fotos container">
          
          {
            this.state.fotos.map( foto => <FotoItem foto={foto} />)
          }
          {/* <FotoItem/>
          <FotoItem/> */}
        </div>            
      );
  }
}