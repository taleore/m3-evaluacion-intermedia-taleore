import React from "react";
import Pokemon from "./Pokemon";

class PokeList extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ul className="Pokemon-list">
          {this.props.data.map(pokemon => {
            return (
              <li key={pokemon.id} className="Pokemon-list-item">
                <Pokemon
                  url={pokemon.url}
                  name={pokemon.name}
                  types={pokemon.types}
                />
              </li>
            );
          })}
        </ul>
      </React.Fragment>
    );
  }
}

export default PokeList;
