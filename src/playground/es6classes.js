class Person {
  constructor(name = 'anonymous', age = 0) {
    this.name = name
    this.age = age
  }

  getGreeting() {
    return `hi I am ${this.name}! `
  }

  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age)
    this.major = major
  }

  hasMajor() {
    return !!this.major
  }

  getDescription() {
    let description = super.getDescription()

    if (this.hasMajor()) {
      description += ` Their major is ${this.major}`
    }

    return description
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age)
    this.homeLocation = homeLocation
  }

  getGreeting() {
    let greeting = super.getGreeting()
    if (this.homeLocation) {
      return (greeting += `I am visiting from ${this.homeLocation}`)
    } else {
      return super.getGreeting()
    }
  }
}

const trav = new Traveler('John', 33, 'oregon')
console.log(trav.getGreeting())
