import React, { Component } from 'react';
import * as actions from './client.js';
import logo from './logo.svg';
import './App.css';

import { CardComponent } from './components/Card'

class App extends Component {
  constructor(props) {
    super(props)
    let cards = cardValues();
    this.state = {
      cards: cards,
      numPlayers: 0,
      selectedCard: '',
      playerTurn: '',
      history: {} 
    }
  }
  

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Somerset</h2>
        </div>
        <button onClick={actions}>Start Game</button>
        <h2>Selected Card:{this.state.selectedCard}</h2>
          <div>
            {this.state.cards.map(card => <CardComponent card={card} handleCurrentCard={this.handleCurrentCard} key={card.id} className="card" />)}
          </div>
      </div>
    );
  }
}

class BoardComponent extends Component {
  // renderCard(i){
  //   const cards = this.props.cards;

  //   // return <Square value={squares[i]} onClick={() => this.props.onClick(i)} />;
  //   return (
  //     <CardComponent value={cards[i]} onClick={() => console.log(i)}/>
  //   ); 
//  }
  
  render() {
    return (
      <div className="board">
        <CardComponent props={this.props}></CardComponent>
        <ScoreComponent></ScoreComponent>
      </div>
    );
  }
}

function cardValues() {
      return [
       {id: 1, value: 'S', suit: 'S'},
        {id: 2, value: 0, suit: 0},
        {id: 3, value: 0, suit: 2},
        {id: 4, value: 1, suit: 2},
        {id: 5, value: 2, suit: 2},
        {id: 6, value: 0, suit: 4},
        {id: 7, value: 1, suit: 4},
        {id: 8, value: 2, suit: 4},
        {id: 9, value: 3, suit: 4},
        {id: 10, value: 4, suit: 4},
        {id: 11, value: 0, suit: 6},
        {id: 12, value: 1, suit: 6},
        {id: 13, value: 2, suit: 6},
        {id: 14, value: 3, suit: 6},
        {id: 15, value: 4, suit: 6},
        {id: 16, value: 5, suit: 6},
        {id: 17, value: 6, suit: 6},
        {id: 18, value: 0, suit: 8},
        {id: 19, value: 1, suit: 8},
        {id: 20, value: 2, suit: 8},
        {id: 21, value: 3, suit: 8},
        {id: 22, value: 4, suit: 8},
        {id: 23, value: 5, suit: 8},
        {id: 24, value: 6, suit: 8},
        {id: 25, value: 7, suit: 8},
        {id: 26, value: 8, suit: 8},
        {id: 27, value: 0, suit: 10},
        {id: 28, value: 1, suit: 10},
        {id: 29, value: 2, suit: 10},
        {id: 30, value: 3, suit: 10},
        {id: 31, value: 4, suit: 10},
        {id: 32, value: 5, suit: 10},
        {id: 33, value: 6, suit: 10},
        {id: 34, value: 7, suit: 10},
        {id: 35, value: 8, suit: 10},
        {id: 36, value: 9, suit: 10},
        {id: 37, value: 10, suit: 10},
        {id: 38, value: 0, suit: 12},
        {id: 39, value: 1, suit: 12},
        {id: 40, value: 2, suit: 12},
        {id: 41, value: 3, suit: 12},
        {id: 42, value: 4, suit: 12},
        {id: 43, value: 5, suit: 12},
        {id: 44, value: 6, suit: 12},
        {id: 45, value: 7, suit: 12},
        {id: 46, value: 8, suit: 12},
        {id: 47, value: 9, suit: 12},
        {id: 48, value: 10, suit: 12},
        {id: 49, value: 11, suit: 12},
        {id: 50, value: 12, suit: 12}
      ];
    }

const ScoreComponent = () => (
  <div className="score">
    <h2>Score TEST!</h2>
  </div>
)

export default App;
