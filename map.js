//example
const tutor = {
  name: "Simon",
  subject: "web Development",
  roomNumber: 501,

  getDescription: function () {
    return this.make + " " + this.model + " " + this.year;
  },
};

//array.property 를 inspect 에 치면 모든종류를 다 볼수 있다
//map()  Array.prototype.map()
const myArray = [1, 2, 3, 4, 5];
let newArray = myArray.map(doubleNumber);

function doubleNumber(number) {
  return "hello" + number + "!";
}

// let newArray = [];
// for (let number of myArray) {
//   newArray.push(number * 2)();
// }

// Practice

/* Easy: Given an array of numbers, create a new array of their squares.
Example: [1, 2, 3, 4] should return [1, 4, 9, 16]*/

//========
const array1 = [1, 2, 3, 4];

const map1 = array1.map((x) => x ** 2);
console.log(map1);

//Siomon
function squareNumber(number) {
  return number ** 2;
}

let myArray3 = [1, 2, 3, 4, 5, 6, 7];
const squaredArray = myArray3.map(squareNumber);

console.log(squaredArray);

//========

/* Medium: Given an array of names, create a new array of their length.
Example: ["John", "Jane", "Jim"] should return [4, 4, 3]*/

const myArray2 = ["John", "Jane", "Jim"];

// Pass a function to map
const lengthOfName = myArray2.map((language) => language.length);

console.log(lengthOfName);

//=====Simon
const nameArray = ["John", "Jane", "Jim"];
const lengthArray = nameArray.map(function (string) {
  return string.length;
});
console.log(lengthArray);
//========

/* Hard: Given an array of objects representing people and their ages, create a new array of objects with their full names and age.
Example: [{ first: "John", last: "Doe", age: 28 }, { first: "Jane", last: "Doe", age: 32 }] should return [{ name: "John Doe", age: 28 }, { name: "Jane Doe", age: 32 }]*/
const myNames = [
  { first: "John", last: "Doe", age: 28 },
  { first: "Jane", last: "Doe", age: 32 },
];

const usersNameShort = myNames.map((item) => {
  const result = {};

  result.name = item.first + " " + item.last;
  result.age = item.age;

  return result;
});

console.log(usersNameShort);

//Simon ==========
const myPeople = [
  { first: "John", last: "Doe", age: 28 },
  { first: "Jane", last: "Doe", age: 32 },
];
myNames.map(reformatPerson);

function reformatPerson(person) {
  let currentAge = person.age;

  return {
    name: `${person.first} ${person.last}`,
    age: currentAge,
  };
}

const reformattedPeople = myPeople.map(reformatPerson);
console.log(reformattedPeople);
