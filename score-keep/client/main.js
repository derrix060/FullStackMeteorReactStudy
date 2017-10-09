import React from 'react'
import ReactDOM from 'react-dom'
import {Meteor} from 'meteor/meteor'

import{Tracker} from 'meteor/tracker'

import {Players} from './../imports/api/players'

import TitleBar from './../imports/ui/TitleBar'
import AddPlayer from './../imports/ui/AddPlayer'


const renderPlayers = (playersList) => {
  return playersList.map((player) => {
    return (
      <p key={player._id}>
        {player.name} has {player.score} point(s)
        <button onClick={() => {Players.remove(player._id)}}>X</button>
        <button onClick={() => {Players.update(player._id, {$inc: {score: 1}})}}>+</button>
        <button onClick={() => {Players.update(player._id, {$inc: {score: -1}})}}>-</button>
      </p>
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
    let jsx = (
      <div>
        <TitleBar/>
        <hr/>

        {renderPlayers(players)}

        <AddPlayer/>
        <form onSubmit={handleSubmit}>
          <input type="text" name="playerName" placeholder="Player name" />
          <button>Add Player</button>
        
        </form>
      </div>
      )

    ReactDOM.render(jsx, document.getElementById('app'))
  })

})
