import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import Game from './Components/game.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

class App extends React.Component {
  constructor() {
    super();
    console.log("Constructor");
    this.state = null;
  }

  componentDidMount() {
    fetch('https://luck-titanoceratops.glitch.me/games')
      .then(result => {
        return result.json();
      })
      .then(data => {
        console.log(data);
      })
  }

  render() {
    function createContent() {
      return <Game title="Zelda" />
    }

    return (
      <div className="App">
        <h2> Vote for your favorite game on Nintendo Switch</h2>
        <div class="container">
          <div class="row">
            <Game title="Zelda111" image="https://m.media-amazon.com/images/I/511M6ML2t7L._AC_UY218_ML3_.jpg" vote="0"/>
          </div>
        </div>

      </div>);

  }
}

export default App;
// <Game brand="Ford"/>
