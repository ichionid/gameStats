import React from 'react'

const handleStateIncrease = (type, number, gameIncreaseStatHandler) => {
  gameIncreaseStatHandler(type, number);
}
const handleStateDecrease = (type, number, gameDecreaseStatHandler) => {
  gameDecreaseStatHandler(type, number);
}
const PlayerStats = (props) => (
      <div>
        {props.stats.map(stat => (
          <div id={stat.type}>
            {stat.type} : {stat.value} ,
            <div className='inc' onClick={(e) => handleStateIncrease(stat.type, props.number, props.gameIncreaseStatHandler)}>+</div>
            <div className='dec' onClick={(e) => handleStateDecrease(stat.type, props.number, props.gameDecreaseStatHandler)}>-</div>
          </div>
        ))}
      </div>
        )

export default (props) => (
  <ul className='players'>
    {props.players.map(player => (
      <li className={player.number}>
        {player.number} :
        <input type='checkbox' defaultChecked={player.isPlaying}/>
        <PlayerStats
        stats={player.stats}
        number={player.number}
        gameDecreaseStatHandler={props.gameDecreaseStat}
        gameIncreaseStatHandler={props.gameIncreaseStat} />
      </li>
    ))}
  </ul>
)


