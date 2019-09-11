import React from "react";
import pokemons from "./Pokemons";
import Pokemon from "./components/Pokemon";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: pokemons
    };
    console.log(pokemons);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Mi Lista de Pokemon</h1>
        </header>
        <main className="App-main"></main>
        <Pokemon data={pokemons} />
      </div>
    );
  }
}

export default App;
