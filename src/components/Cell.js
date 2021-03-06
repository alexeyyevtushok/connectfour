import React from 'react';

function Cell(props){
  //choose background depends on color
  let playerClass = 'cell';
  if(props.value !== undefined) {
    playerClass += props.value === 'red' ? ' player2' : ' player1';
  }

  return (
    <div 
    className={playerClass} 
    onClick={props.onClick}
    ></div>
  )
}

export default Cell;