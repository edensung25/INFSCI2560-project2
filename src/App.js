import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import Game from './Components/game.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import * as firebase from "firebase";
import config from './Components/Firebase/firebase.js';

class App extends React.Component {
  constructor() {
    super();

    // Initialize Firebase
    firebase.initializeApp(config);
    this.state = {games: []};
  }

  componentDidMount() {
    const path = 'games/'
    firebase.database().ref(path).orderByChild('/vote').once("value", e => {
      console.log(e.val())
      this.setState({ games: e.val() })

      // e.forEach(function(child) {
      //     console.log(child.val()) // NOW THE CHILDREN PRINT IN ORDER
      // });
    });
  }

  actionVote(idx) {
    this.state.games[idx].vote = this.state.games[idx].vote + 1;
    firebase.database().ref('games/' + idx).set({
      id: this.state.games[idx].id,
      title: this.state.games[idx].title,
      image: this.state.games[idx].image,
      vote:this.state.games[idx].vote,
    });
    this.setState({ games: this.state.games })
  }

  render() {
    return (
      <div class="App">
        <h2> Vote for your favorite game on Nintendo Switch</h2>
        <div class="container">
          <div class="row">
            {this.state.games.map(game => <Game key={game.id} firebase={firebase} onClick={() => {
            this.actionVote(game.id-1);
            }} id={game.id} title={game.title} image={game.image} vote={game.vote}/>)}
          </div>
        </div>
      </div>);
  }
}

export default App;
