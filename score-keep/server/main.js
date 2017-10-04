import {Meteor} from 'meteor/meteor'
import {Players} from './../imports/api/players'

Meteor.startup(function (){

    // let square = (x) => x * x
    // console.log(square(5))

    let numbers = [9, 99, 4, 56]
    let newNumbers = numbers.map(n => n+1)

    console.log(newNumbers)

})
