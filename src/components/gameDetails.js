import React from 'react'
const handleScoreIncrease = (team, gameIncreaseStatHandler) => {
  gameIncreaseStatHandler(team);
}
const handleScoreDecrease = (team, gameDecreaseStatHandler) => {
  gameDecreaseStatHandler(team);
}
const handleNameChange = (team, evt, gameChangeName) => {
  gameChangeName(team, evt.target.value);
}
export default (props) => (
  <form className='gameDetails'>
    <p className='host'>
      <input
        type='text'
        value={props.gameDetails.homeTeam.name}
        onChange={(e) => handleNameChange("homeTeam", e, props.gameChangeName)}
      /> : {props.gameDetails.homeTeam.score}
      <div className='inc' onClick={(e) => handleScoreIncrease("homeTeam", props.gameIncreaseScore)}>+</div>
      <div className='dec' onClick={(e) => handleScoreDecrease("homeTeam", props.gameDecreaseScore)}>-</div>
    </p>
    VS
    <p className='host'>
      <input
        type='text'
        value={props.gameDetails.awayTeam.name}
        onChange={(e) => handleNameChange("awayTeam",e, props.gameChangeName)}
        /> : {props.gameDetails.awayTeam.score}
      <div className='inc' onClick={(e) => handleScoreIncrease("awayTeam", props.gameIncreaseScore)}>+</div>
      <div className='dec' onClick={(e) => handleScoreDecrease("awayTeam", props.gameDecreaseScore)}>-</div>
    </p>
  </form>
)
