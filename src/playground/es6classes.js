class Person {
  constructor(name = 'anonymous', age = 0) {
    this.name = name
    this.age = age
  }

  getGreeting() {
    return `hi ${this.name}!`
  }

  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`
  }
}

const me = new Person()

console.log(me, me.getDescription())
