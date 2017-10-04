import React from 'react'
import ReactDOM from 'react-dom'
import {Meteor} from 'meteor/meteor'


const players = [{
  _id: '1',
  name: 'Lauren',
  score: 99
},{
  _id: '2',
  name: 'Cory',
  score: -1
}, {
  _id: '3',
  name: 'Andrew',
  score: -12
}];

const renderPlayers = function (playersList){
 
  return playersList.map(function(player){
    return (
      <div key={player._id}>
        <p>{player.name} has {player.score} point(s)</p>
      </div>
    )
  })
}

Meteor.startup(function (){
  let title = 'Score Keep'
  let name = 'Mario A.'
  let jsx = (
    <div>
      <h1>{title}</h1>
      <p>Hello {name}!</p>
      <p>This is my second p.</p>

      {renderPlayers(players)}
    </div>
    )

  ReactDOM.render(jsx, document.getElementById('app'))
})
