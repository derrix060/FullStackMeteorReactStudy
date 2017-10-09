import {Meteor} from 'meteor/meteor'
import {Players} from './../imports/api/players'

Meteor.startup(() => {
    class Person {
        constructor (name = 'Default Name', age = 0){
            this.name = name
            this.age = age
        }

        getGreeting (){
            return `Hi! I'm ${this.name}.`
        }

        getPersonDescription (){
            return `${this.name} is ${this.age} year(s) old.`
        }
    }

    let me = new Person('Mario', 22)

    console.log(me)
    console.log(me.getGreeting())
    console.log(me.getPersonDescription())
})
