import React from 'react'

export default (props) => (
  <div className='gameDetails'>
  <p className='host'>
  {props.gameDetails.homeTeam.name} : {props.gameDetails.homeTeam.score}
  </p>
  VS
  <p className='host'>
  {props.gameDetails.awayTeam.name} : {props.gameDetails.awayTeam.score}
  </p>
  </div>
)
