import React from "react";


class Pokemon extends React.Component {
    render() {
    return (
      <div className="card-container">
        <img className="card-image" src={this.props.url}></img>
        <h2 className="card-title">{this.props.name}</h2>
        <ul className="card-list">{this.props.types.map((type,index) => return(<li key={index} className="card-type">{type}</li>);
        })}
        </ul>
      </div>
    );
  }
}


export default Pokemon;

