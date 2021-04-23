/** Array destructing */
const array = ['A', 'B', 'C', 'D', 'E']
const [first, second] = array

console.log(first)
// A
console.log(second)
// B



/** Spread Operator With Arrays */
const array = ['A', 'B', 'C', 'D', 'E']
const [first, second, ...rest] = array

console.log(first)
// A
console.log(second)
// B
console.log(rest)
// ['C', 'D', 'E']

const array1 = [1, 2, 3]
const array2 = [4, 5, 6]
const newArray = [...array1, ...array2]

console.log(newArray)
// [1, 2, 3, 4, 5, 6]


/**
    When To Use Destructuring/Spread Operator With Arrays
It may seem like these cases above are contrived and this would never be a useful feature, so here are three ways I use this feature every day.

COPYING AN ARRAY
If I need to ever create a clone of an array then I can easily spread the array into a new array and now I will have two separate arrays that I can modify without modifying independently.

 */

const array = [1, 2, 3]
const arrayClone = [...array]
arrayClone.push(4)

console.log(array)
// [1, 2, 3]
console.log(arrayClone)
// [1, 2, 3, 4]


/** DESTRUCTURING FUNCTION RETURNS */

function sumAndMultiply(a, b) {
    return [a + b, a * b]
  }
  
  const [sum, product] = sumAndMultiply(2, 3)
  
  console.log(sum)
  // 5
  console.log(product)
  // 6

  /** Destructuring Objects */

  const person = { name: 'Kyle', age: 25 }
const { name, age } = person

console.log(name)
// Kyle
console.log(age)
// 25


const person = { name: 'Kyle', age: 25 }
const { name: firstName, age } = person

console.log(firstName)
// Kyle
console.log(age)
// 25


/** Spread Operator With Objects */

const person = { name: 'Kyle', age: 25, favoriteFood: 'Rice' }
const { name, ...rest } = person

console.log(name)
// Kyle
console.log(rest)
// { age: 25, favoriteFood: 'Rice' }


const person1 = { name: 'Kyle', age: 25 }
const person2 = { age: 32, favoriteFood: 'Rice' }
const newPerson = { ...person1, ...person2 }

console.log(newPerson)
// { name: 'Kyle', age: 32, favoriteFood: 'Rice' }

/** Nested Object Destructuring */

const person = {
    name: 'Kyle',
    age: 25,
    address: {
      city: 'Somewhere',
      state: 'One Of Them'
    }
  }
  const { name, address: { city } } = person
  
  console.log(name)
  // Kyle
  console.log(city)
  // Somewhere