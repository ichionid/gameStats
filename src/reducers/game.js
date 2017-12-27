const initialState = {
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
  players: [
    {number:4,isPlaying:true, stats: [
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
    ]},
    {number:5,isPlaying:true, stats: [
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
    ]},
    {number:6,isPlaying:true, stats: [
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
    ]},
    {number:7,isPlaying:true, stats: [
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
    ]},
    {number:8,isPlaying:true, stats: [
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
    ]},
    {number:9,isPlaying:false, stats: [
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
    ]},
    {number:10,isPlaying:false, stats: [
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
    ]},
    {number:11,isPlaying:false, stats: [
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
    ]},
    {number:12,isPlaying:false, stats: [
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
    ]},
    {number:13,isPlaying:false, stats: [
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
    ]},
    {number:14,isPlaying:false, stats: [
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
    ]},
    {number:15,isPlaying:false, stats: [
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
    ]},
    ]

}
export default (state = initialState, action) => {
 const newState = { ...state };
 let playerIndex, statIndex;
 console.log(action.type);
 switch (action.type) {
    case 'TOGGLE_IS_PLAYING':
      playerIndex = newState.players.findIndex((obj => obj.number == action.payload.number));
      newState.players[playerIndex].isPlaying =!newState.players[playerIndex].isPlaying;
      return newState
    case 'INCREASE_STAT':
      playerIndex = newState.players.findIndex((obj => obj.number == action.payload.number));
      statIndex = newState.players[playerIndex].stats.findIndex((obj => obj.type == action.payload.type));
      newState.players[playerIndex].stats[statIndex].value += 1
      return newState
    case 'DECREASE_STAT':
      playerIndex = newState.players.findIndex((obj => obj.number == action.payload.number));
      statIndex = newState.players[playerIndex].stats.findIndex((obj => obj.type == action.payload.type));
      if(newState.players[playerIndex].stats[statIndex].value > 0) {
        newState.players[playerIndex].stats[statIndex].value -= 1
      } else{
        newState.players[playerIndex].stats[statIndex].value = 0
      }
      return newState
    case 'INCREASE_SCORE':
        newState.gameDetails[action.payload.team].score +=1;
      return newState
    case 'DECREASE_SCORE':
        if (newState.gameDetails[action.payload.team].score >0) {
          newState.gameDetails[action.payload.team].score -=1;
        }
      return newState
    case 'CHANGE_NAME':
        newState.gameDetails[action.payload.team].name = action.payload.value;
      return newState
    default:
      return newState
  }
}
