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

    class Employee extends Person{
        constructor (name, age, title){
            super(name, age)
            this.title = title
        }

        getGreeting (){
            if (this.title) {
                return `${super.getGreeting()} I work as a ${this.title}.`
            }
            return super.getGreeting()
        }

        hasJob (){
            return !!this.title
        }
    }

    class Programmer extends Person{
        constructor (name, age, preferLanguage = 'assembly'){
            super(name, age)
            this.preferLanguage = preferLanguage
        }

        getGreeting (){
            return `${super.getGreeting()} I'm a ${this.preferLanguage} developer.`
            
        }
    }

    let me = new Programmer('Mario', 22, 'db admin')
    let mike = new Programmer('Mike', 11)

    console.log(me)
    console.log(me.getGreeting())
    console.log(me.getPersonDescription())

    console.log(mike)
    console.log(mike.getGreeting())
    console.log(mike.getPersonDescription())
})
