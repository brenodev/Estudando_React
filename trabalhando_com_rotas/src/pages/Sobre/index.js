import React, { Component } from "react";
import { Link } from "react-router-dom";

class Sobre extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h3>Página Sobre</h3>
        <br />
        <Link to="/">Ir para Home</Link>
      </div>
    );
  }
}

export default Sobre;
