import React, { Component } from 'react';
import OptionsPanel from '../OptionsPanel'
import Board from '../Board'
import { createTiles } from '../../misc/utils'

import './App.css';

class App extends Component{
  constructor(props) {
    super(props)

    this.state = {
      numTiles: 36,
      playing: false,
      previousTileIndex: null,
      tiles: [],
      toBeCleared: null
    }
  }

  startGame = (numTiles) => {
    this.setState((state) => ({
      playing: true,
      previousTileIndex: null,
      toBeCleared: null,
      tiles: createTiles(state.numTiles)
    }))
  }

  render() {
  return (
    <div className="App">
      <header className="App-header">
        Turbo-Matcher
      </header>
        <OptionsPanel playing={this.state.playing} numTiles={this.state.numTiles} startGame={this.startGame} />
        <Board numTiles={this.state.numTiles} tiles={this.state.tiles} />
      }
    </div>
  );

  }
}

export default App;
