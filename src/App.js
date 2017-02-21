import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    let cards = cardValues();
    this.state = {
      cards: cards
    }
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Somerset</h2>
        </div>
        <BoardComponent>
        </BoardComponent>
      </div>
    );
  }
}

class BoardComponent extends Component {
  renderCard(){
    return (
      <CardComponent />
    ); 
  }
  
  render() {
    return (
      <div className="board">
        <CardComponent></CardComponent>
        <ScoreComponent></ScoreComponent>
      </div>
    );
  }
}

class CardComponent extends Component {
  render() {
    return (
      <div className="card">
        <PointValueComponent></PointValueComponent>
        <CardValueComponent></CardValueComponent>
      </div>
    );
  }
}

class CardValueComponent extends Component {
  render() {
    return (
      <div className="card-value">
        <span></span> 
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

class PointValueComponent extends Component {
  render() {
    return (
      <div className="point-value">
        <h3>Point value TEST!</h3>
      </div>
    );
  }
}

class ScoreComponent extends Component {
  render() {
    return (
      <div className="score">
        <h2>Score TEST!</h2>
      </div>
    );
  }
}





export default App;
