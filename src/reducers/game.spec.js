import reducer from './game'

describe('Game reducer', () => {
  test('sub out a player', () => {
    const startState = {
      gameDetails: {},
      players: [{number:4,isPlaying:true, stats: [
      {
        type: 'offRebounds',
        value: 0,
      },
      {
        type: 'defRebounds',
        value: 0,
      },
      {
        type: 'ftAttempts',
        value: 0,
      },
      {
        type: 'ftMade',
        value: 0,
      },
      {
        type: 'fgAttempts',
        value: 0,
      },
      {
        type: 'fgMade',
        value: 0,
      },
      {
        type: '3ptAttempts',
        value: 0,
      },
      {
        type: '3ptMade',
        value: 0,
      },
      {
        type: 'steals',
        value: 0,
      },
      {
        type: 'turnovers',
        value: 0,
      },
    ]}
    ]
    }
   const expectedState = {
      gameDetails: {},
      players: [{number:4,isPlaying:false, stats: [
      {
        type: 'offRebounds',
        value: 0,
      },
      {
        type: 'defRebounds',
        value: 0,
      },
      {
        type: 'ftAttempts',
        value: 0,
      },
      {
        type: 'ftMade',
        value: 0,
      },
      {
        type: 'fgAttempts',
        value: 0,
      },
      {
        type: 'fgMade',
        value: 0,
      },
      {
        type: '3ptAttempts',
        value: 0,
      },
      {
        type: '3ptMade',
        value: 0,
      },
      {
        type: 'steals',
        value: 0,
      },
      {
        type: 'turnovers',
        value: 0,
      },
    ]}
    ]
    }
    const action = {type: 'TOGGLE_IS_PLAYING', payload: {number:4}}
    const result = reducer(startState, action);
    expect(result).toEqual(expectedState);
  })
  test('sub in a player', () => {
    const startState = {
      gameDetails: {},
      players: [{number:4,isPlaying:false, stats: [
      {
        type: 'offRebounds',
        value: 0,
      },
      {
        type: 'defRebounds',
        value: 0,
      },
      {
        type: 'ftAttempts',
        value: 0,
      },
      {
        type: 'ftMade',
        value: 0,
      },
      {
        type: 'fgAttempts',
        value: 0,
      },
      {
        type: 'fgMade',
        value: 0,
      },
      {
        type: '3ptAttempts',
        value: 0,
      },
      {
        type: '3ptMade',
        value: 0,
      },
      {
        type: 'steals',
        value: 0,
      },
      {
        type: 'turnovers',
        value: 0,
      },
    ]}
    ]
    }
   const expectedState = {
      gameDetails: {},
      players: [{number:4,isPlaying:true, stats: [
      {
        type: 'offRebounds',
        value: 0,
      },
      {
        type: 'defRebounds',
        value: 0,
      },
      {
        type: 'ftAttempts',
        value: 0,
      },
      {
        type: 'ftMade',
        value: 0,
      },
      {
        type: 'fgAttempts',
        value: 0,
      },
      {
        type: 'fgMade',
        value: 0,
      },
      {
        type: '3ptAttempts',
        value: 0,
      },
      {
        type: '3ptMade',
        value: 0,
      },
      {
        type: 'steals',
        value: 0,
      },
      {
        type: 'turnovers',
        value: 0,
      },
    ]}
    ]
    }
    const action = {type: 'TOGGLE_IS_PLAYING', payload: {number:4}}
    const result = reducer(startState, action);
    expect(result).toEqual(expectedState);
  })
  test('increase offensive rebounds', () => {
    const startState = {
      gameDetails: {},
      players: [{number:4,isPlaying:false, stats: [
      {
        type: 'offRebounds',
        value: 1,
      },
      {
        type: 'defRebounds',
        value: 0,
      },
      {
        type: 'ftAttempts',
        value: 0,
      },
      {
        type: 'ftMade',
        value: 0,
      },
      {
        type: 'fgAttempts',
        value: 0,
      },
      {
        type: 'fgMade',
        value: 0,
      },
      {
        type: '3ptAttempts',
        value: 0,
      },
      {
        type: '3ptMade',
        value: 0,
      },
      {
        type: 'steals',
        value: 0,
      },
      {
        type: 'turnovers',
        value: 0,
      },
    ]}
    ]
    }
   const expectedState = {
      gameDetails: {},
      players: [{number:4,isPlaying:false, stats: [
      {
        type: 'offRebounds',
        value: 2,
      },
      {
        type: 'defRebounds',
        value: 0,
      },
      {
        type: 'ftAttempts',
        value: 0,
      },
      {
        type: 'ftMade',
        value: 0,
      },
      {
        type: 'fgAttempts',
        value: 0,
      },
      {
        type: 'fgMade',
        value: 0,
      },
      {
        type: '3ptAttempts',
        value: 0,
      },
      {
        type: '3ptMade',
        value: 0,
      },
      {
        type: 'steals',
        value: 0,
      },
      {
        type: 'turnovers',
        value: 0,
      },
    ]}
    ]
    }
    const action = {type: 'INCREASE_STAT', payload: {number:4, type: 'offRebounds'}}
    const result = reducer(startState, action);
    expect(result).toEqual(expectedState);
  })
  test('decrease offensive rebounds', () => {
    const startState = {
      gameDetails: {},
      players: [{number:4,isPlaying:false, stats: [
      {
        type: 'offRebounds',
        value: 5,
      },
      {
        type: 'defRebounds',
        value: 0,
      },
      {
        type: 'ftAttempts',
        value: 0,
      },
      {
        type: 'ftMade',
        value: 0,
      },
      {
        type: 'fgAttempts',
        value: 0,
      },
      {
        type: 'fgMade',
        value: 0,
      },
      {
        type: '3ptAttempts',
        value: 0,
      },
      {
        type: '3ptMade',
        value: 0,
      },
      {
        type: 'steals',
        value: 0,
      },
      {
        type: 'turnovers',
        value: 0,
      },
    ]}
    ]
    }
   const expectedState = {
      gameDetails: {},
      players: [{number:4,isPlaying:false, stats: [
      {
        type: 'offRebounds',
        value: 4,
      },
      {
        type: 'defRebounds',
        value: 0,
      },
      {
        type: 'ftAttempts',
        value: 0,
      },
      {
        type: 'ftMade',
        value: 0,
      },
      {
        type: 'fgAttempts',
        value: 0,
      },
      {
        type: 'fgMade',
        value: 0,
      },
      {
        type: '3ptAttempts',
        value: 0,
      },
      {
        type: '3ptMade',
        value: 0,
      },
      {
        type: 'steals',
        value: 0,
      },
      {
        type: 'turnovers',
        value: 0,
      },
    ]}
    ]
    }
    const action = {type: 'DECREASE_STAT', payload: {number:4, type: 'offRebounds'}}
    const result = reducer(startState, action);
    expect(result).toEqual(expectedState);
  })
  test('increase score away team', () => {
    const startState = {
      gameDetails: {
        homeTeam: {
          name:'DTU',
          score:0
        },
        awayTeam: {
          name:'BMS Herlev',
          score:0
        }
      },
    }
   const expectedState = {
      gameDetails: {
        homeTeam: {
          name:'DTU',
          score:0
        },
        awayTeam: {
          name:'BMS Herlev',
          score:1
        }
      },
    }
    const action = {type: 'INCREASE_SCORE', payload: {team:'awayTeam'}}
    const result = reducer(startState, action);
    expect(result).toEqual(expectedState);
  })
  test('decrease score away team', () => {
    const startState = {
      gameDetails: {
        homeTeam: {
          name:'DTU',
          score:0
        },
        awayTeam: {
          name:'BMS Herlev',
          score:3
        }
      },
    }
   const expectedState = {
      gameDetails: {
        homeTeam: {
          name:'DTU',
          score:0
        },
        awayTeam: {
          name:'BMS Herlev',
          score:2
        }
      },
    }
    const action = {type: 'DECREASE_SCORE', payload: {team:'awayTeam'}}
    const result = reducer(startState, action);
    expect(result).toEqual(expectedState);
  })
  test('increase score home team', () => {
    const startState = {
      gameDetails: {
        homeTeam: {
          name:'DTU',
          score:0
        },
        awayTeam: {
          name:'BMS Herlev',
          score:0
        }
      },
    }
   const expectedState = {
      gameDetails: {
        homeTeam: {
          name:'DTU',
          score:1
        },
        awayTeam: {
          name:'BMS Herlev',
          score:0
        }
      },
    }
    const action = {type: 'INCREASE_SCORE', payload: {team:'homeTeam'}}
    const result = reducer(startState, action);
    expect(result).toEqual(expectedState);
  })
  test('decrease score home team', () => {
    const startState = {
      gameDetails: {
        homeTeam: {
          name:'DTU',
          score:5
        },
        awayTeam: {
          name:'BMS Herlev',
          score:3
        }
      },
    }
   const expectedState = {
      gameDetails: {
        homeTeam: {
          name:'DTU',
          score:4
        },
        awayTeam: {
          name:'BMS Herlev',
          score:3
        }
      },
    }
    const action = {type: 'DECREASE_SCORE', payload: {team:'homeTeam'}}
    const result = reducer(startState, action);
    expect(result).toEqual(expectedState);
  })
  test('change name of home team', () => {
    const startState = {
      gameDetails: {
        homeTeam: {
          name:'DTU',
          score:0
        },
        awayTeam: {
          name:'BMS Herlev',
          score:0
        }
      },
    }
   const expectedState = {
      gameDetails: {
        homeTeam: {
          name:'DTU2',
          score:0
        },
        awayTeam: {
          name:'BMS Herlev',
          score:0
        }
      },
    }
    const action = {type: 'CHANGE_NAME', payload: {team:'homeTeam', value:'DTU2'}}
    const result = reducer(startState, action);
    expect(result).toEqual(expectedState);
  })
  test('change name of away team', () => {
    const startState = {
      gameDetails: {
        homeTeam: {
          name:'DTU',
          score:0
        },
        awayTeam: {
          name:'BMS Herlev',
          score:0
        }
      },
    }
   const expectedState = {
      gameDetails: {
        homeTeam: {
          name:'DTU',
          score:0
        },
        awayTeam: {
          name:'BMS Herlev2',
          score:0
        }
      },
    }
    const action = {type: 'CHANGE_NAME', payload: {team:'awayTeam', value:'BMS Herlev2'}}
    const result = reducer(startState, action);
    expect(result).toEqual(expectedState);
  })
})
