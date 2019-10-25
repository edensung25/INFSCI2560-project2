import React from 'react';
import ReactDOM from 'react-dom';

class Game extends React.Component {
  render() {
    return (
      <div class="col-md-2 col-sm-6 col-12">
      <div class="card">
      <img src={this.props.image} alt={this.props.title} className="img-responsive"/>
        <div class="card-body">
          <h4 class="card-title">{this.props.title}</h4>
          <p><span>{this.props.vote}</span> like</p>
          <button type="button" class="btn btn-primary" onClick={() => alert('hello')}>Like!</button>
        </div>
      </div>
    </div>);
  }
}

export default Game;
//return <h2>Hi, I am a {this.props.brand}!</h2>;
