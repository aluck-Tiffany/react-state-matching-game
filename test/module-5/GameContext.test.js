import React from 'react'

describe('Game Context', () => {
  React.createContext = jest.fn()
  const GameContext = require('../../refactor/GameContext')
 
  it('Creates the GameContext @create-game-context', () => {

    expect(React.createContext, 'Did you call React.createContext?').toHaveBeenCalled()
  })

  it('Sets default context values @set-default-context', () => {
    
    expect(React.createContext, 'Did you set the correct default values?').toHaveBeenCalledWith({
      numTiles: 36,
      playing: false,
      handleNumTileChange: expect.any(Function),
      startPlaying: expect.any(Function)
    })
  })
})
