import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import UnitDisplay from './UnitDisplay';

//RECEIVED DATA
//Winner
const winner = 1

//Player names (ex database)
const playerOneName = 'playerOne'
const playerTwoName = 'playerTwo'

//Unit array drilled to object
const unit = {
      class: 'warrior',
      name: 'Ulfrick',
      survived: true,
      woundsTaken: 2,
      woundsGiven: 6,
      kills: 2
}


//DYNAMIC TEXT
var resultsFlavour = ''

function winnerAssignment(playerNumber){
  resultsFlavour = (playerNumber === winner) ? ' emerged victorious.' : ' tastes bitter defeat.'
  return resultsFlavour
}



//FLAVOUR TEXT COMPILERS
const titleText = 'Silence descends upon the blood soaked field, the gods have spoken.'
const resultCallout = {
  playerOne: playerOneName + winnerAssignment(1),
  playerTwo: playerTwoName + winnerAssignment(2),
}


class BattleReport extends Component {


  render() {
    return (
      <div className='home brMainContainer'>
        <div className='brPanel'>
          <div className='brPanelStroke'>
            <div className='brTitle'>
              {titleText}
            </div>
              <div className='brContentContainer'>
                <div className='brPlayerBlock'>
                  <div className='brBlockPlayerName'>
                    {resultCallout.playerOne}
                  </div>
                  <div className='brUnitContainer'>
                    <UnitDisplay type={'rogue'} name={'Hap'} survived={true} hits={0} kills={0}/>
                    <UnitDisplay type={'archer'} name={'Wulf'} survived={false} hits={8} kills={3}/>
                    <UnitDisplay type={'warrior'} name={'Ulfrick'} survived={true} hits={5} kills={2} />
                    <UnitDisplay type={'sentinel'} name={'Podrick'} survived={false} hits={3} kills={1} />
                    <UnitDisplay type={'archer'} name={'Wulf'} survived={false} hits={8} kills={3}/>
                    <UnitDisplay type={'warrior'} name={'Ulfrick'} survived={true} hits={5} kills={2} />
                    <UnitDisplay type={'sentinel'} name={'Podrick'} survived={false} hits={3} kills={1} />
                  </div>
                </div>
                <div className='brPlayerBlock borderBox'>
                  <div className='brBlockPlayerName'>
                    {resultCallout.playerTwo}
                  </div>
                  <div className='brUnitContainer'>
                    <UnitDisplay type={'rogue'} name={'Hap'} survived={true} hits={0} kills={0}/>
                    <UnitDisplay type={'archer'} name={'Wulf'} survived={false} hits={8} kills={3}/>
                    <UnitDisplay type={'warrior'} name={'Ulfrick'} survived={true} hits={5} kills={2} />
                    <UnitDisplay type={'sentinel'} name={'Podrick'} survived={false} hits={3} kills={1} />
                    <UnitDisplay type={'archer'} name={'Wulf'} survived={false} hits={8} kills={3}/>
                    <UnitDisplay type={'warrior'} name={'Ulfrick'} survived={true} hits={5} kills={2} />
                    <UnitDisplay type={'sentinel'} name={'Podrick'} survived={false} hits={3} kills={1} />
                  </div>
              </div>    
            </div>
            <div className='brButtonBlock'>
              <Link to='/game' >
                <button className='brButton'>Rematch</button>
              </Link>
              <Link to='/' >
                <button className='brButton'>New Game</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BattleReport;