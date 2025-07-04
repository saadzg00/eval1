import React, { Component } from "react";
import { Button, Select } from "semantic-ui-react";
import "./App.css";

class Recherche extends Component {
  state = {
    TypeAlcool: ""
  };

  onAlcoolChange = (e, data) => {
    this.setState({ TypeAlcool: data.value });
  };

  vider = () => {
    this.setState({ TypeAlcool: "" });
  };

  render() {
    const optionsAlcool = [
      { value: "Alcoholic", key: "Alcoholic", text: "Alcoholic" },
      { value: "Non_Alcoholic", key: "Non_Alcoholic", text: "Non alcoholic" },
      { value: "Optional_alcohol", key: "Optional_alcohol", text: "Optional alcohol" }
    ];

    return (
      <div style={{ padding: "30px", backgroundColor: "#fff176", minHeight: "100vh" }}>
        <h2 style={{ textAlign: "center" }}>Choisissez un type d'alcool</h2>

        <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
          <Select
            placeholder="Choisis ton type d'alcool"
            options={optionsAlcool}
            value={this.state.TypeAlcool}
            onChange={this.onAlcoolChange}
          />

          <Button
            primary
            style={{ backgroundColor: "rgb(0, 181, 252)", borderRadius: 25, color: "white" }}
            onClick={() => this.props.onPropagateToParent(this.state.TypeAlcool)}
          >
            Trouve ton alcool
          </Button>

          <Button
            secondary
            style={{ backgroundColor: "#000", borderRadius: 25, color: "white" }}
            onClick={this.vider}
          >
            Vider la recherche
          </Button>
        </div>
      </div>
    );
  }
}

export default Recherche;
