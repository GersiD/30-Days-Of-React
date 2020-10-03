const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
  ]
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
  ]

  const emptyArr = new Array()
  const sixElemArr = [1,2,3,4,5,6]

  console.log(sixElemArr)

  console.log("Length of step 3.... " + sixElemArr.length)

  let MiddleIndex = sixElemArr.length / 2
  console.log("First item = " + sixElemArr[0] + " Middle item = " + sixElemArr[MiddleIndex] + " Last item = " + sixElemArr[sixElemArr.length-1])

  //Objects and attributes and assignment 
  const person = {
      fristName : 'Gersi',
      lastName  : 'Doko',
      all : [],
      age : 23,
  }

  const copyPerson = Object.assign({}, person)
  console.log(copyPerson)

  //Functions that take objects
  function funct(person) {
    // .hasOwnProperty('NAMEOFATTRIBUTEW') is a function you can call on any object
    console.log("Firstname = " + person.fristName)
  }

  funct(copyPerson)
  
  // Objects in objects (like arrays)

  const arrayOfPeople = {
    person1: {
        fristName : 'Gersi',
        lastName  : 'Doko',
        all : [],
        age : 23,
    },
    person2: {
        fristName : 'Gersi',
        lastName  : 'Doko',
        all : [],
        age : 23,
    },
    person3: {
        fristName : 'Gersi',
        lastName  : 'Doko',
        all : [],
        age : 23,
    },
  }

  // Classes

  class Person {
    constructor(firstName, lastName, age) {
      this.firstName = firstName
      this.lastName = lastName
      this.age = age
    }

    get getAge() {
        return this.age
    }
}

const p = new Person("Gersi", "Doko", 20)
console.log("Persons age = " + p.getAge)