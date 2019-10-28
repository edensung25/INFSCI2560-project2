import React from 'react';
import ReactDOM from 'react-dom';
import '../App.css';

let count = -1;
class Game extends React.Component {
  constructor(props) {
    super(props);
  }

  renderTitle() {
    let length = 25;
    let trimmedString = this.props.title.length > length ?
                        this.props.title.substring(0, length - 3) + "..." :
                        this.props.title;
    return trimmedString;
  }

  render() {
    return (
      <div class="col-lg-2 col-md-4 col-sm-4 col-6 cell">
      <div class="card">
      <img src={this.props.image} alt={this.props.title} className="img-responsive"/>
        <div class="card-body">
          <h6 class="card-title">{this.renderTitle()}</h6>
          <p><span>{this.props.vote}</span> like</p>
          <button type="button" class="btn btn-primary" onClick={this.props.onClick}>Like!</button>
        </div>
      </div>
    </div>);
  }
}

export default Game;
