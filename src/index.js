import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store'

const gameIncreaseStatHandler = (type, number) => store.dispatch({type: 'INCREASE_STAT', payload: {number:number, type: type}});
const gameDecreaseStatHandler = (type, number) => store.dispatch({type: 'DECREASE_STAT', payload: {number:number, type: type}});
const gameIncreaseScoreHandler = (team) => store.dispatch({type: 'INCREASE_SCORE', payload: {team:team}});
const gameDecreaseScoreHandler = (team) => store.dispatch({type: 'DECREASE_SCORE', payload: {team:team}});
const gameChangeNameHandler = (team,value) => store.dispatch({type: 'CHANGE_NAME', payload: {team:team, value:value}});

const render = () => {
  const state = store.getState();
  ReactDOM.render(<App
    players={state.players}
    gameDetails={state.gameDetails}
    gameDecreaseStat={gameDecreaseStatHandler}
    gameIncreaseStat={gameIncreaseStatHandler}
    gameDecreaseScore={gameDecreaseScoreHandler}
    gameIncreaseScore={gameIncreaseScoreHandler}
    gameChangeName={gameChangeNameHandler}
      />, document.getElementById('root'));
}
render()

store.subscribe(render)

registerServiceWorker();
