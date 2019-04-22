import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TableComponent from './TableComponent.js';
import AlphabeticIndex from './AlphabeticIndex.js';
import ChessBoard from './ChessBoard';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      greeting: '',
      boardConfig: null,
      isLoaded: false
    };
  }

  componentDidMount() {
    this.newBoard();
  }

  newBoard(){
    fetch('/api/game/config?id=1')
      .then(response => response.json())
      .then(response => this.setState({ boardConfig: response, isLoaded: true }));
  }

  refreshLayout(e){
    this.setState( {isLoaded: false} );
    this.newBoard();
  }

  render() {
    let content;
    if (!this.state.isLoaded) {
      content = (
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="loading">Loading...</div>
        </header>
      );
    } else {
      content = (
        <main className="App-main">
          <div><button onClick={(e) => this.refreshLayout(e)}>New Game</button></div>
          <ChessBoard id="chessBoard" config={this.state.boardConfig} />
        </main>
      );
    }

    return (
      <div className="App">
        {content}
      </div>
    );
  }

}

export default App;
