import React from "react";
import pokemons from "./Pokemons";
import Pokelist from "./components/Pokelist";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: pokemons
    };
    console.log(pokemons);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Mi Lista de Pokemon</h1>
        </header>
        <main className="App-main">
          <Pokelist data={pokemons} />
        </main>
      </div>
    );
  }
}

export default App;
