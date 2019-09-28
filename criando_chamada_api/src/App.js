import React, { Component } from "react";
import URL from "./Api";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nutri: []
    };
  }
  componentDidMount = () => {
    fetch(URL)
      .then(resp => resp.json())
      .then(json => {
        const state = this.state;

        state.nutri = json;
        this.setState({
          state
        });
        console.log(json);
      });
  };

  render() {
    return (
      <div className="container">
        <header>
          <strong> React NUTRI</strong>
        </header>
        {this.state.nutri.map(item => {
          return (
            <article className="post" key={item.id}>
              <strong className="titulo">{item.titulo}</strong>
              <img className="capa" src={item.capa} alt="Imagens" />
              <p className="subtitulo">{item.subtitulo}</p>
              <a href="" className="botao">
                Acessar
              </a>
            </article>
          );
        })}
      </div>
    );
  }
}

export default App;
