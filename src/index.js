import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const state = {
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
        number: 0,
      },
      {
        type: 'defRebounds',
        number: 0,
      },
      {
        type: 'ftAttempts',
        number: 0,
      },
      {
        type: 'ftMade',
        number: 0,
      },
      {
        type: 'fgAttempts',
        number: 0,
      },
      {
        type: 'fgMade',
        number: 0,
      },
      {
        type: '3ptAttempts',
        number: 0,
      },
      {
        type: '3ptMade',
        number: 0,
      },
      {
        type: 'steals',
        number: 0,
      },
      {
        type: 'turnovers',
        number: 0,
      },
    ]},
    {number:5,isPlaying:true, stats: [
      {
        type: 'offRebounds',
        number: 0,
      },
      {
        type: 'defRebounds',
        number: 0,
      },
      {
        type: 'ftAttempts',
        number: 0,
      },
      {
        type: 'ftMade',
        number: 0,
      },
      {
        type: 'fgAttempts',
        number: 0,
      },
      {
        type: 'fgMade',
        number: 0,
      },
      {
        type: '3ptAttempts',
        number: 0,
      },
      {
        type: '3ptMade',
        number: 0,
      },
      {
        type: 'steals',
        number: 0,
      },
      {
        type: 'turnovers',
        number: 0,
      },
    ]},
    {number:6,isPlaying:true, stats: [
      {
        type: 'offRebounds',
        number: 0,
      },
      {
        type: 'defRebounds',
        number: 0,
      },
      {
        type: 'ftAttempts',
        number: 0,
      },
      {
        type: 'ftMade',
        number: 0,
      },
      {
        type: 'fgAttempts',
        number: 0,
      },
      {
        type: 'fgMade',
        number: 0,
      },
      {
        type: '3ptAttempts',
        number: 0,
      },
      {
        type: '3ptMade',
        number: 0,
      },
      {
        type: 'steals',
        number: 0,
      },
      {
        type: 'turnovers',
        number: 0,
      },
    ]},
    {number:7,isPlaying:true, stats: [
      {
        type: 'offRebounds',
        number: 0,
      },
      {
        type: 'defRebounds',
        number: 0,
      },
      {
        type: 'ftAttempts',
        number: 0,
      },
      {
        type: 'ftMade',
        number: 0,
      },
      {
        type: 'fgAttempts',
        number: 0,
      },
      {
        type: 'fgMade',
        number: 0,
      },
      {
        type: '3ptAttempts',
        number: 0,
      },
      {
        type: '3ptMade',
        number: 0,
      },
      {
        type: 'steals',
        number: 0,
      },
      {
        type: 'turnovers',
        number: 0,
      },
    ]},
    {number:8,isPlaying:true, stats: [
      {
        type: 'offRebounds',
        number: 0,
      },
      {
        type: 'defRebounds',
        number: 0,
      },
      {
        type: 'ftAttempts',
        number: 0,
      },
      {
        type: 'ftMade',
        number: 0,
      },
      {
        type: 'fgAttempts',
        number: 0,
      },
      {
        type: 'fgMade',
        number: 0,
      },
      {
        type: '3ptAttempts',
        number: 0,
      },
      {
        type: '3ptMade',
        number: 0,
      },
      {
        type: 'steals',
        number: 0,
      },
      {
        type: 'turnovers',
        number: 0,
      },
    ]},
    {number:9,isPlaying:false, stats: [
      {
        type: 'offRebounds',
        number: 0,
      },
      {
        type: 'defRebounds',
        number: 0,
      },
      {
        type: 'ftAttempts',
        number: 0,
      },
      {
        type: 'ftMade',
        number: 0,
      },
      {
        type: 'fgAttempts',
        number: 0,
      },
      {
        type: 'fgMade',
        number: 0,
      },
      {
        type: '3ptAttempts',
        number: 0,
      },
      {
        type: '3ptMade',
        number: 0,
      },
      {
        type: 'steals',
        number: 0,
      },
      {
        type: 'turnovers',
        number: 0,
      },
    ]},
    {number:10,isPlaying:false, stats: [
      {
        type: 'offRebounds',
        number: 0,
      },
      {
        type: 'defRebounds',
        number: 0,
      },
      {
        type: 'ftAttempts',
        number: 0,
      },
      {
        type: 'ftMade',
        number: 0,
      },
      {
        type: 'fgAttempts',
        number: 0,
      },
      {
        type: 'fgMade',
        number: 0,
      },
      {
        type: '3ptAttempts',
        number: 0,
      },
      {
        type: '3ptMade',
        number: 0,
      },
      {
        type: 'steals',
        number: 0,
      },
      {
        type: 'turnovers',
        number: 0,
      },
    ]},
    {number:11,isPlaying:false, stats: [
      {
        type: 'offRebounds',
        number: 0,
      },
      {
        type: 'defRebounds',
        number: 0,
      },
      {
        type: 'ftAttempts',
        number: 0,
      },
      {
        type: 'ftMade',
        number: 0,
      },
      {
        type: 'fgAttempts',
        number: 0,
      },
      {
        type: 'fgMade',
        number: 0,
      },
      {
        type: '3ptAttempts',
        number: 0,
      },
      {
        type: '3ptMade',
        number: 0,
      },
      {
        type: 'steals',
        number: 0,
      },
      {
        type: 'turnovers',
        number: 0,
      },
    ]},
    {number:12,isPlaying:false, stats: [
      {
        type: 'offRebounds',
        number: 0,
      },
      {
        type: 'defRebounds',
        number: 0,
      },
      {
        type: 'ftAttempts',
        number: 0,
      },
      {
        type: 'ftMade',
        number: 0,
      },
      {
        type: 'fgAttempts',
        number: 0,
      },
      {
        type: 'fgMade',
        number: 0,
      },
      {
        type: '3ptAttempts',
        number: 0,
      },
      {
        type: '3ptMade',
        number: 0,
      },
      {
        type: 'steals',
        number: 0,
      },
      {
        type: 'turnovers',
        number: 0,
      },
    ]},
    {number:13,isPlaying:false, stats: [
      {
        type: 'offRebounds',
        number: 0,
      },
      {
        type: 'defRebounds',
        number: 0,
      },
      {
        type: 'ftAttempts',
        number: 0,
      },
      {
        type: 'ftMade',
        number: 0,
      },
      {
        type: 'fgAttempts',
        number: 0,
      },
      {
        type: 'fgMade',
        number: 0,
      },
      {
        type: '3ptAttempts',
        number: 0,
      },
      {
        type: '3ptMade',
        number: 0,
      },
      {
        type: 'steals',
        number: 0,
      },
      {
        type: 'turnovers',
        number: 0,
      },
    ]},
    {number:14,isPlaying:false, stats: [
      {
        type: 'offRebounds',
        number: 0,
      },
      {
        type: 'defRebounds',
        number: 0,
      },
      {
        type: 'ftAttempts',
        number: 0,
      },
      {
        type: 'ftMade',
        number: 0,
      },
      {
        type: 'fgAttempts',
        number: 0,
      },
      {
        type: 'fgMade',
        number: 0,
      },
      {
        type: '3ptAttempts',
        number: 0,
      },
      {
        type: '3ptMade',
        number: 0,
      },
      {
        type: 'steals',
        number: 0,
      },
      {
        type: 'turnovers',
        number: 0,
      },
    ]},
    {number:15,isPlaying:false, stats: [
      {
        type: 'offRebounds',
        number: 0,
      },
      {
        type: 'defRebounds',
        number: 0,
      },
      {
        type: 'ftAttempts',
        number: 0,
      },
      {
        type: 'ftMade',
        number: 0,
      },
      {
        type: 'fgAttempts',
        number: 0,
      },
      {
        type: 'fgMade',
        number: 0,
      },
      {
        type: '3ptAttempts',
        number: 0,
      },
      {
        type: '3ptMade',
        number: 0,
      },
      {
        type: 'steals',
        number: 0,
      },
      {
        type: 'turnovers',
        number: 0,
      },
    ]},
    ]

}

ReactDOM.render(<App gameDetails={state.gameDetails} players={state.players}/>, document.getElementById('root'));
registerServiceWorker();
