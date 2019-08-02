import React, { Component } from 'react';

export default class Login extends Component {

  constructor(){
    super();
    this.state = {erro:''}
  }

  sendLogin( event ){
    event.preventDefault()
    const requestInfo = {
      method: 'POST',
      body: JSON.stringify({ login: this.login.value, senha: this.senha.value }),
      headers: new Headers({
        'Content-type': 'application/json'
      })
    }
    fetch( "https://instalura-api.herokuapp.com/api/public/login", requestInfo )
      .then( response => {
        if( response.ok ){
          this.setState({erro:''})
          return response.text()
        } else{
          throw new Error( "Não foi possível realizar o login!" )
        }
      })
      .then( token => {
        console.log( token )
      })
      .catch( error => {
        this.setState({erro: 'active'})
      })
  }

  render(){
    return(
      <div className="login-box">
        <h1 className="header-logo"> Instact </h1>
        <span className={this.state.erro+" error"}> Não foi possível realizar o login! </span>
        <form onSubmit={this.sendLogin.bind(this)}>
          <input type="text" ref={(input) => this.login = input} />
          <input type="password" ref={(input) => this.senha = input} />
          <input type="submit" value="Entrar" />
        </form>
      </div>
    )
  }
}