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
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState( {name: event.target.value} );
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch(`/api/greeting?name=${encodeURIComponent(this.state.name)}`)
      .then(response => response.json())
      .then(state => this.setState(state));
  }

  componentDidMount() {
    fetch('/api/game/config?id=1')
      .then(response => response.json())
      .then(response => this.setState({ boardConfig: response, isLoaded: true }));
  }

  render() {
    let content;
    if (!this.state.isLoaded) {
      content = (
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <ChessBoard id="chessBoard" />
          <div className="loading">Loading...</div>    
        </header>
      );
    } else {
      content = (
        <main className="App-main">
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

  generateHeaders() {
      let indexHelper = new AlphabeticIndex();
      return [" "].concat(indexHelper.getIndexArray(8) );
  }

  generateTable() {
    var tableData = {
      columns: this.generateHeaders(),
      rows: [
        [ "1", "" , "", "", "", "", "", "", "" ],
        [ "2", "" , "", "", "", "", "", "", "" ],
        [ "3", "" , "", "", "", "", "", "", "" ],
        [ "4", "" , "", "", "", "", "", "", "" ],
        [ "5", "" , "", "", "", "", "", "", "" ],
        [ "6", "" , "", "", "", "", "", "", "" ],
        [ "7", "" , "", "", "", "", "", "", "" ],
        [ "8", "" , "", "", "", "", "", "", "" ],
        [ "9", "" , "", "", "", "", "", "", "" ]
      ]
    };

    return tableData;
  }
}

export default App;
