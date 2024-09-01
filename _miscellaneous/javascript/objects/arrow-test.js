let score = 1;

class Person {
  constructor() {
    this.score = 0
    // ...
  }

  increase() {

    // Arrow function don't have their own context of this 
    // It will resolve to an enclosing scope that defines this
    const increaseScore = () => {
      this.score++
    }
    increaseScore()
  }
}

const Carlos = new Person()
console.log(Carlos) // score: 0
Carlos.increase(); 
console.log(Carlos) // score: 1

