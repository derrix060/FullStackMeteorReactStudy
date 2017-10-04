import React from 'react'
import ReactDOM from 'react-dom'
import {Meteor} from 'meteor/meteor'

import{Tracker} from 'meteor/tracker'

import {Players} from './../imports/api/players'

const renderPlayers = (playersList) => {
  return playersList.map((player) => {
    return (
      <div key={player._id}>
        <p>{player.name} has {player.score} point(s)</p>

      </div>
    )
  })
}

const handleSubmit = (event) => {
  event.preventDefault()

  let name = event.target.playerName.value
  
  if (name){
    event.target.playerName.value = ''

    Players.insert({
      'name': name,
      'score': 0
    })
  }

}

Meteor.startup(() => {

  Tracker.autorun(() => {
    let players =  Players.find().fetch()

    let title = 'Score Keep'
    let name = 'Mario A.'
    let jsx = (
      <div>
        <h1>{title}</h1>
        <p>Created by {name}</p>
        <hr/>

        {renderPlayers(players)}

        <form onSubmit={handleSubmit}>
          <input type="text" name="playerName" placeholder="Player name" />
          <button>Add Player</button>
        
        </form>
      </div>
      )

    ReactDOM.render(jsx, document.getElementById('app'))
  })

})
