import React from 'react'
import ReactDOM from 'react-dom'
import {Meteor} from 'meteor/meteor'

import{Tracker} from 'meteor/tracker'

import {Players} from './../imports/api/players'

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

  Tracker.autorun(function() {
    let players =  Players.find().fetch()

    let title = 'Score Keep'
    let name = 'Mario A.'
    let jsx = (
      <div>
        <h1>{title}</h1>
        <p>Created by {name}</p>
        <hr/>

        {renderPlayers(players)}
      </div>
      )

    ReactDOM.render(jsx, document.getElementById('app'))
  })

  Players.insert({
    name: 'Jen',
    score: 10
  })
})
