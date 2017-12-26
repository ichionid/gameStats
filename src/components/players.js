import React from 'react'

const PlayerStats = (props) => (
      <div>
        {props.stats.map(stat => (

          <div id={stat.type}>
          {stat.type} : {stat.number} ,
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
        <PlayerStats stats={player.stats} />
      </li>
    ))}
  </ul>
)


