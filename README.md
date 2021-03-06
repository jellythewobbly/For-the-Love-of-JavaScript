# ALL THINGS JAVASCRIPT (FUNDAMENTALS)

## MADE WITH ♥ BY JAY

## Content:

### 7 Data Types

1. [Boolean](#BOOLEAN)
2. [Null](#NULL,-UNDEFINED)
3. [Undefined](#NULL,-UNDEFINED)
4. [Number](#NUMBER)
5. [String](#STRING)
6. Symbol(New ES6)
7. [Object](#OBJECT) (includes [Array](#ARRAY))

[Functions](#Functions)

[Simple Tasks](#Simple-Tasks)

## STRING

### Template literals ``

```javascript
const name = "David";
const school = "General Assembly";
console.log(`Hello my name is ${name} and I am a student at ${school}.`); // "Hello my name is David and I am a student at General Assembly."
```

### .toString()

```javascript
const a = 123;
console.log(a.toString()); // '123'
```

Convert decimal to binary using .toString(2)

```javascript
const num = 4;
console.log(num.toString(2)); // '100'
```

### .length

```javascript
const alphabets = "abcdefghijklmnopqrstuvwxyz";
console.log(alphabets.length); // 26
// indexing a string
console.log(alphabets[0]); // a
console.log(alphabets[25]); // z
```

### String.fromCharCode(input)

```javascript
console.log(String.fromCharCode(97)); // a
console.log(String.fromCharCode(65, 66, 67)); // ABC
```

### .charCodeAt(index)

```javascript
console.log("a".charCodeAt()); // 97
console.log("HELLO".charCodeAt()); // 72 (if index is not a number, it defaults to 0)
console.log("HELLO".charCodeAt(1)); // 69 (Char code of index 1 - 'E')
```

### .localeCompare(givenString)

Compares a string against a given string
Returns:
-1 for comes before
0 for the same
1 for comes after

```javascript
console.log("10".localeCompare("100")); // -1
console.log("20".localeCompare("20")); // 0
console.log("2".localeCompare("1000")); // 1

console.log("goodbye".localeCompare("hello")); // -1 ('g' comes before 'h');
```

### .repeat(count)

```javascript
const str = "foobar";
console.log(str.repeat(3)); // foobarfoobarfoobar
```

### .replace(searchValue, newValue)

```javascript
// NOTE: this is commonly used with a regular expression (regex)
const str = "hello world";
console.log(str.replace("hello", "goodbye")); // goodbye world
const ga = "general assembly";
console.log(ga.replace(/e/g, "3")); // g3n3ral ass3mbly (use of regex to select all 'e')
const sentence = "are vowels important?";
console.log(sentence.replace(/[aeiou]/g, "")); // r vwls mprtnt?
```

### .indexOf(searchValue, fromIndex)

```javascript
const sentence = "hello my friend";
console.log(sentence.indexOf("my")); // 6
console.log(sentence.indexOf("h")); // 0
console.log(sentence.indexOf("hello")); // 0

const first = sentence.indexOf("e");
console.log(first); // 1
console.log(sentence.indexOf("e", first + 1)); // 12 (use this to find the next index of)
console.log(sentence.indexOf("waddup")); // -1
```

### .lastIndexOf(searchValue, fromIndex)

```javascript
const sentence = "hello David, my friend";
console.log(sentence.lastIndexOf("D")); // 6
console.log(sentence.indexOf("d")); // 10
console.log(sentence.lastIndexOf("d")); // 21
console.log(sentence.lastIndexOf("e")); // 19
console.log(sentence.lastIndexOf("l")); // 3
console.log(sentence.lastIndexOf("l", 2)); // 2 (only searching from index 0 to index 2 of the string - 'hel')
console.log(sentence.lastIndexOf("l", 1)); // -1 (only searching from index 0 to index 1 of the string - 'he')
```

### .trim()

```javascript
// Removes whitespace from both ends of the string
const greeting = "   Hello world!   ";
console.log(greeting.trim()); // Hello world!
```

### .slice(start, end) similar but not the same as .substring()

```javascript
const alphabets = "abcdefghijklmnopqrstuvwxyz";
console.log(alphabets.slice()); // abcdefghijklmnopqrstuvwxyz
console.log(alphabets.slice(3)); // defghijklmnopqrstuvwxyz
console.log(alphabets.slice(3, 7)); // defg (index 3 up to but not including 7)
console.log(alphabets.slice(-3)); // xyz (counting from the end of the string)
console.log(alphabets.slice(-10, -4)); // qrstuv
```

### .split(separator, limit)

```javascript
const str = "hello world";
console.log(str.split()); // ['hello world']
console.log(str.split("")); // ['h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd']
console.log(str.split(" ")); // ['hello', 'world']
console.log(str.split("e")); // ['h', 'llo world']
console.log(str.split("l")); // ['he', '', 'o wor', 'd']
console.log(str.split("", 4)); // ['h', 'e', 'l', 'l'] (returns the first 4 splits)
```

### .toLowerCase() .toUpperCase()

```javascript
console.log("WADDUP BRO".toLowerCase()); // waddup bro
console.log("hello world".toUpperCase()); // HELLO WORLD
```

### .match(regularExpression)

Returns an array of strings that match the regular expression

```javascript
const randomString =
  "the123quick456brown789fox!@#jumped$%^over&*(the)_+lazy{}|dog";
const onlyWords = randomString.match(/[a-z]+/g);
console.log(onlyWords);
// ['the', 'quick', 'brown', 'fox', 'jumped', 'over', 'the', 'lazy','dog']
console.log(onlyWords.join(" ")); // 'the quick brown fox jumped over the lazy dog'
```

## NUMBER

### Shorthand operators

```javascript
let a = 12; // let instead of const as they will not work with const

a += 3; // 15
// a = a + 3

a -= 3; // 9
// a = a - 3

a *= 3; // 36
// a = a * 3

a /= 3; // 4
// a = a / 3
```

### Comparing i++ vs ++i

```javascript
let i = 1; // let instead of const as they will not work with const
console.log(i++); // 1
console.log(i); // 2
```

```javascript
let i = 1; // let instead of const as they will not work with const
console.log(++i); // 2
console.log(i); // 2
```

### Number.toFixed(n)

Returns a string representation of the number rounded to n decimal places

```javascript
(12345.6789).toFixed(3); // "12345.679"
```

### Number.toPrecision(n)

Returns a string representation of the number rounded to n digits

```javascript
(12345.6789).toPrecision(6); // "12345.7"
```

### Number.MAX_SAFE_INTEGER

Due to the double-precision floating-point format, using a number LARGER THAN 9007199254740991 may result in loss of precision

```javascript
const x = Number.MAX_SAFE_INTEGER + 1;
const y = Number.MAX_SAFE_INTEGER + 2;
console.log(x === y); // true
```

### Number.MIN_SAFE_INTEGER

Due to the double-precision floating-point format, using a number SMALLER THAN -9007199254740991 may result in loss of precision

```javascript
const x = Number.MIN_SAFE_INTEGER - 1;
const y = Number.MIN_SAFE_INTEGER - 2;
console.log(x === y); // true
```

### MATH

Not going into detail as these are pretty self explanatory

```javascript
Math.random(); // returns a floating point number between 0 to 1 (inclusive of 0, but not 1)

Math.floor(input); // returns the largest integer less than or equal to a given number
Math.ceil(input); // returns the smallest integer greater than or equal to a given number

Math.trunc(input); // returns the integer part of a number by removing the decimals
Math.round(input); // returns the value of a number rounded to the nearest integer

// 4 ** 2 = 16 use this instead (ES6)
Math.pow(base, exponent); // returns the base raised to the exponent e.g. Math.pow(4, 2) = 16
Math.sqrt(input); // returns the square root of a number
Math.cbrt(input); // returns the cube root of a number

Math.PI; // returns 3.141592653589793
```

### Implicit coercion

Javascript will attempt to coerce an unexpected value type to the expected type

Does not work with addition as it leads to concatenation

```javascript
console.log("6" + "9"); // '69' (string)
console.log("10" - "7"); // 3 (number)
console.log("3" * "3"); // 9 (number)
console.log("10" / "2"); // 5 (number)
```

### NaN

NaN is a special value, it is never equal to another NaN value

Comparing/equating anything with NaN will result in false

```javascript
console.log(NaN == NaN); // false
console.log("hello" == NaN); // false
console.log(["this", "is", "an", "array"] == NaN); // false
console.log({ name: "ben", age: 20 } == NaN); // false

console.log(NaN != NaN); // true
```

### isNaN(input)

To test for NaN, use isNaN()

```javascript
console.log(isNaN("hello")); // true
console.log(isNaN(["this", "is", "an", "array"])); // true
console.log(isNaN({ name: "ben", age: 20 })); // true
```

## BOOLEAN

### falsy values

1. false
2. undefined
3. null
4. 0
5. ''
6. NaN

### truthy values (Everything that isn't falsy is truthy)

1. true
2. {} (empty object)
3. [] (empty array)
4. 69
5. -1
6. 1
7. 'hello'

### while loop using the concept of truthy/falsy

```javascript
const arr = [1, 2, 3, 4, 5];
// no need to compare using while(arr.length != 0)
while (arr.length) {
  console.log(arr.pop());
}
// 5
// 4
// 3
// 2
// 1

console.log(arr); // []
```

### short circuit evaluation

Both || and && evaluate from left to right

Using ||

if left is truthy, left will be returned

if left is falsy, right will be returned

```javascript
const people = [
  { name: "jerry", occupation: "teacher" },
  { name: "sandra", occupation: "dentist" },
  { name: "sloth" }
];

for (let i of people) {
  console.log(`${i.name}: ${i.occupation || "jobless"}`);
}
// jerry: teacher
// sandra: dentist
// sloth: jobless
```

Using &&

if left is truthy, right will be returned

if left is falsy, left will be returned

```javascript
let online = true;

const getData = () => {
  console.log("SENDING REQUEST...");
  console.log("STATUS 200 RECEIVED");
};

if (online) {
  getData();
}

// above if statement can be refactored to
online && getData();
```

## NULL, UNDEFINED

```javascript
let a = null;
let b;

console.log(a); // null
console.log(b); // undefined

typeof a; // 'object'
typeof b; // 'undefined'

a === b; // false
a == b; // true
```

Constant variables have to be explicitly assigned a value

```javascript
const a = null;
const b = undefined;
const c; // ERROR: Missing initializer in const declaration

console.log(a); // null
console.log(b); // undefined
console.log(c); // ReferenceError: c is not defined
```

## ARRAY

### Array destructuring

```javascript
const arr = [1, 2, 3, 4, 5];
const [first, second, third, ...rest] = arr;

console.log(first); // 1
console.log(second); // 2
console.log(rest); // [4, 5]
```

Swapping variables

```javascript
let a = 2;
let b = 5;

[a, b] = [b, a];

console.log(a); // 5
console.log(b); // 2
```

### Array.isArray(input)

```javascript
Array.isArray([1, 2, 3]); // true
Array.isArray({ foo: 123 }); // false
Array.isArray("foobar"); // false
Array.isArray(undefined); // false
```

### .length

```javascript
const arr = ["alex", "ben", "charlie", "david", "ethan"];
console.log(arr.length); // 5
```

### .indexOf(searchValue, fromIndex)

```javascript
const arr = ["alex", "ben", "charlie", "david", "ethan"];
console.log(arr.indexOf("charlie")); // 2
console.log(arr.indexOf("hello world")); // -1 (not found)
```

### .findIndex(callback)

Returns the index of the first element that satisfies the condition

.findIndex() is essentially .indexOf() but with a search condition instead of a search value

```javascript
const arr = [5, 12, 8, 130, 44];
console.log(arr.findIndex(element => element > 20)); // 3
```

### .find(callback)

Returns the value of the first element that satisfies the condition. Otherwise undefined is returned.

```javascript
const arr = ["blue", "red", "green", "purple", "pink", "yellow"];
console.log(arr.find(color => color.length > 5)); // purple
```

### .includes(searchValue)

```javascript
const arr = ["blue", "red", "green", "purple", "pink", "yellow"];
console.log(arr.includes("red")); // true
console.log(arr.includes("rainbow")); // false

// alternative using .indexOf()
console.log(arr.indexOf("red") !== -1); // true
console.log(arr.indexOf("rainbow") !== -1); // false
```

### .every(callback)

Returns true if all elements in the array pass the condition

```javascript
const numbers = [1, 2, 3, 4, 5];
const allGreaterThanZero = numbers.every(i => i > 0);
console.log(allGreaterThanZero); // true

// breaks out of the function once a false value has been found
const arr = [1, 2, 3, "hello", 4, 5];
const allNumbers = arr.every(i => {
  console.log(i);
  return typeof i === "number";
});
// 1
// 2
// 3
// hello
console.log(allNumbers); // false
```

### .some(callback)

Returns true if at least one element in the array passes the condition

```javascript
// breaks out of the function once a true value has been found
const names = ["alex", "ben", "charlie", "david", "ethan"];
const anyLongerThanFive = names.some(i => {
  console.log(i);
  return i.length > 5;
});
// alex
// ben
// charlie
console.log(anyLongerThanFive); // true
```

### .sort(optionalCompareFunction)

```javascript
// .sort() modifies the original array
// if no compare function is provided, it uses localeCompare by default
const months = ["March", "January", "February", "December"];
months.sort();
console.log(months); // ['December', 'February', 'January', 'March'];

// sort by ascending length of string
const months = ["January", "February", "March", "April", "May", "December"];
months.sort((a, b) => a.length - b.length);
console.log(months); // ['May', 'March', 'April', 'January', 'February', 'December']
```

```javascript
const numbers = [1, 30, 4, 21, 101];
numbers.sort();
console.log(numbers); // [1, 101, 21, 30, 4]

// sort by ascending order
const numbers = [1, 30, 4, 21, 101];
numbers.sort((a, b) => a - b);
console.log(numbers); // [1, 4, 21, 30, 101]

// sort by descending order
const numbers = [1, 30, 4, 21, 101];
numbers.sort((a, b) => b - a);
console.log(numbers); // [101, 30, 21, 4, 1]
```

### .reverse()

```javascript
// .reverse() modifies the original array
const arr = ["one", "two", "three", "four", "five"];
arr.reverse();
console.log(arr); // ['five', 'four', 'three', 'two', 'one']
```

### .fill(value, optionalStart, optionalEnd)

```javascript
const zeros = new Array(10).fill(0); // => [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
```

### .push(values)

Adds one or more elements to the END of the array, it returns the new length of the array

```javascript
const arr = ["alex", "ben", "charlie", "david", "ethan"];
const arrLength = arr.push("felix", "gerald");
console.log(arr); // ['alex', 'ben', 'charlie', 'david', 'ethan', 'felix', 'gerald']
console.log(arrLength); // 7
```

### .unshift(values)

Adds one or more elements to the START of an array, it returns the new length of the array

```javascript
const arr = ["alex", "ben", "charlie", "david", "ethan"];
const arrLength = arr.unshift("adam", "alan");
console.log(arr); // ['adam', 'alan', 'alex', 'ben', 'charlie', 'david', 'ethan']
console.log(arrLength); // 7
```

### .pop()

Removes the LAST element from an array, it returns the element that was removed

```javascript
const arr = ["alex", "ben", "charlie", "david", "ethan"];
const popValue = arr.pop();
console.log(arr); // ['alex', 'ben', 'charlie', 'david']
console.log(popValue); // 'ethan'
```

### .shift()

Removes the FIRST element from an array and returns the element that was removed

```javascript
const arr = ["alex", "ben", "charlie", "david", "ethan"];
const shiftValue = arr.shift();
console.log(arr); // ['ben', 'charlie', 'david', 'ethan']
console.log(shiftValue); // 'alex'
```

### .slice(fromIndex)

```javascript
// .slice() does not modify the original array
const arr = ["alex", "ben", "charlie", "david", "ethan"];
console.log(arr.slice()); // shallow copy of arr
console.log(arr.slice(2)); // ['charlie', 'david', 'ethan']
console.log(arr.slice(2, 3)); // ['charlie']
console.log(arr.slice(2, 4)); // ['charlie', 'david']
console.log(arr.slice(-2)); // ['david', 'ethan']
```

### .splice(startIndex, deleteCount, insertValues)

Returns an array containing the deleted element(s) or an empty array

```javascript
// .splice() modifies the original array

// insert values into an array
const arr = ["alex", "ben", "charlie", "david", "ethan"];
arr.splice(2, 0, "brandon", "bob");
console.log(arr); // ['alex', 'ben', 'brandon', 'bob', 'charlie', 'david', 'ethan']

// delete values in an array
const arr = ["alex", "ben", "charlie", "david", "ethan"];
arr.splice(2, 1);
console.log(arr); // ['alex', 'ben', 'david', 'ethan']

// get the elements that are removed
const arr = ["alex", "ben", "brandon", "bob", "charlie", "david", "ethan"];
const removedValues = arr.splice(2, 2);
console.log(removedValues); // ['brandon', 'bob']
console.log(arr); // ['alex', 'ben', 'charlie', 'david', 'ethan']

// replace values in an array
const arr = ["alex", "ben", "charlie", "david", "ethan"];
arr.splice(3, 1, "daniel");
console.log(arr); // ['alex', 'ben', 'charlie', 'daniel', 'ethan']
```

### .forEach(callback)

.forEach() executes the callback function once for each array element

```javascript
const arr = [1, 2, 3, 4, 5];
arr.forEach(i => console.log(`the number is ${i}`));
// the number is 1
// the number is 2
// the number is 3
// the number is 4
// the number is 5
```

.forEach() with index

```javascript
const arr = ["a", "b", "c", "d", "e"];
arr.forEach((value, index) => console.log(`index ${index}: ${value}`));
// index 0: a
// index 1: b
// index 2: c
// index 3: d
// index 4: e
```

### .map(callback)

.map() creates a new array with the results of the callback function

```javascript
const arr = [1, 2, 3, 4, 5];
const doubleArr = arr.map(i => i * 2);
console.log(doubleArr); // [2, 4, 6, 8, 10]
```

.map() with index

```javascript
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [100, 200, 300, 400, 500];
const sumArray = arr1.map((val, index) => val + arr2[index]);
console.log(sumArray); // [101, 202, 303, 404, 505]
```

### .filter(callback)

.filter() creates a new array with all elements that pass the test in the callback function

```javascript
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const moreThanFive = arr.filter(i => i > 5);
console.log(moreThanFive); // [6, 7, 8, 9, 10]
```

```javascript
const stuff = ["foo", "bar", "MacBook", "this is a long string"];
const longWords = stuff.filter(i => i.length > 5);
console.log(longWords); // ['MacBook', 'this is a long string']
```

### .reduce(callback, initialValue)

.reduce() executes a reducer callback function on each member of the array, returns a single output value. The initialValue is optional.

```javascript
const numbers = [1, 2, 3, 4, 5];
const total = numbers.reduce((total, current) => total + current);
console.log(total); // 15
```

```javascript
// with initial value
function addTen(arr) {
  return arr.reduce((acc, cur) => acc + cur, 10);
}

const numbers = [1, 3, 5];
console.log(addTen(numbers)); // 19
```

```javascript
// example use case for counting occurrence instead of using a for of loop
const numbers = [1, 2, 3, 4, 5, 6, 1, 1, 1];
const count = (array, searchValue) => {
  return array.reduce((accumulator, current) => {
    // the line below implements the check
    const occurrence = current === searchValue ? 1 : 0;
    return accumulator + occurrence;
    // 0 represents the initial count value
  }, 0);
};

console.log(count(numbers, 1)); // 4
```

```javascript
// return the largest value in an array without using Math.max
const numbers = [1, 3, 5, 7, 9, 8, 6, 4, 2, 1];
const maxValue = arr => {
  return arr.reduce((holder, current) => (holder > current ? holder : current));
  // initial value implicitly set as the first element in the array
};

console.log(maxValue(numbers)); // 9

// return the smallest value in an array without using Math.min
const numbers = [1, 3, 5, 7, 9, 8, 6, 4, 2, 1];
const minValue = arr => {
  return arr.reduce((holder, current) => (holder < current ? holder : current));
  // initial value implicitly set as the first element in the array
};

console.log(minValue(numbers)); // 1
```

### for...of

Use for...of to iterate over iterable objects such as strings and arrays

```javascript
const arr = [1, 2, 3, 4, 5];
let total = 0;
for (let number of arr) {
  total += number;
}
console.log(total); // 15
```

## OBJECT

### Object destructuring

```javascript
const person = {
  name: "David",
  age: 30,
  occupation: "developer"
};

const { name, age, occupation: job } = person;

console.log(name); // David
console.log(age); // 30
console.log(job); // developer
```

```javascript
const { a, b, ...others } = { a: 10, b: 20, c: 30, d: 40, e: 50 };

console.log(a); // 10
console.log(b); // 20
console.log(others); // { c: 30, d: 40, e: 50 }
```

### Object literal

Easiest way to create an object by using the object literal syntax

```javascript
const obj = {
  key1: "value1",
  key2: "value2",
  key3: "value3"
};

// getting properties
console.log(obj.key1); // value1
console.log(obj["key2"]); // value2

// adding new properties
// use the square bracket notation for special characters or for an unknown key
obj.key4 = "value4"; // dot notation
obj["special-key"] = "special value"; // square bracket notation
console.log(obj);
/*
{ key1: 'value1',
  key2: 'value2',
  key3: 'value3',
  key4: 'value4',
  'special-key': 'special value' }
*/

// removing properties
delete obj.key4;
delete obj["special-key"];
console.log(obj);
// { key1: 'value1', key2: 'value2', key3: 'value3' }
```

### Factory function

```javascript
// return keyword has to be used with factory function
// note that there is no need for name: name, gender: gender
// get keyword used to define a getter (access an object's method like a property)
function createPerson(name, gender, yearOfBirth) {
  return {
    location: "Singapore",
    name,
    gender,
    get age() {
      return new Date().getFullYear() - yearOfBirth;
    }
  };
}

const peter = createPerson("peter", "male", 1995);
console.log(peter.location); // Singapore
console.log(peter.name); // peter
console.log(peter.age); // 23 (AS OF 2018)
```

### Constructor function

```javascript
// new keyword has to be used with constructor function
// note uppercase first letter (Pascal case) used for constructor function
function Person(name, gender, yearOfBirth) {
  this.location = "Singapore";
  this.name = name;
  this.gender = gender;
  this.age = new Date().getFullYear() - yearOfBirth;
}

const alex = new Person("alex", "male", 2000);
console.log(alex.location); // Singapore
console.log(alex.name); // alex
console.log(alex.age); // 18 (AS OF 2018)
```

### for...in

Use for...in to iterate over an object

```javascript
// for...in returns the object's own instance properties/methods and also those from the prototype
const book = {
  title: "JavaScript: The Definitive Guide",
  author: "David Flanagan",
  publisher: "O'Reilly Media"
};

for (let key in book) {
  console.log(`${key} is ${book[key]}`);
}
// title is JavaScript: The Definitive Guide
// author is David Flanagan
// publisher is O'Reilly Media
```

### Object.keys(obj)

Returns an array of the object's keys

```javascript
// returns only the object's own instance properties/methods
const person = {
  name: "mary",
  age: 32
};
console.log(Object.keys(person)); // ['name', 'age']
```

### Object.values(obj)

Returns an array of the object's values

```javascript
const person = {
  name: "mary",
  age: 32
};
console.log(Object.values(person)); // ['mary', 32]
```

### Object.entries(obj)

Returns an array of the object's own enumerable property [key, value] pairs

```javascript
const person = {
  name: "mary",
  age: 32
};
console.log(Object.entries(person)); // [['name', 'mary'], ['age', 32]]
```

### in operator

Returns true if the property is in the object or its prototype chain

```javascript
const person = {
  name: "mary",
  age: 32
};

if ("name" in person) console.log(`person has a name ${person.name}`);
// person has a name mary
```

### .hasOwnProperty(property)

Returns true if the object has the specified property as its own property (not inherited)

```javascript
function Animal(name, species) {
  this.name = name;
  this.species = species;
}

Animal.prototype.eat = function() {
  console.log("Eating!");
};

const cooper = new Animal("Cooper", "dog");
cooper.bark = function() {
  console.log("WOOF WOOF!");
};

cooper.eat(); // Eating!
cooper.bark(); // WOOF WOOF!
console.log(cooper.hasOwnProperty("eat")); // false (inherited from prototype)
console.log(cooper.hasOwnProperty("bark")); // true
```

### Object.defineProperty(obj, property, descriptor)

With the descriptor, we can modify the way the property behaves

By default, the properties added are immutable and not enumerable

```javascript
const exampleObject = { hello: "world" };
Object.defineProperty(exampleObject, "exampleKey", {
  value: "exampleValue"
});

console.log(exampleObject);
// browser: {hello: 'world', exampleKey: "exampleValue"}
// node: {hello: 'world'}
console.log("exampleKey" in exampleObject); // true
console.log(Object.keys(exampleObject)); // ['hello']
for (let key in exampleObject) console.log(key); // hello

delete exampleObject.hello;
delete exampleObject.exampleKey;
console.log(exampleObject);
// browser: { exampleKey: "exampleValue" }
// node: {}
```

### Object.assign(target, ...sources)

Create a shallow copy by using an empty object as the target

```javascript
const object1 = { a: 1, b: 2, c: 3 };
const clone = Object.assign({}, object1);

console.log(clone); // { a: 1, b: 2, c: 3 }
console.log(object1 === clone); // false (object1 and clone are 2 different objects)
```

Use Object.assign() to merge objects

```javascript
const obj1 = { a: 1 };
const obj2 = { b: 2 };
const obj3 = { c: 3 };

const newObj = Object.assign(obj1, obj2, obj3);
console.log(newObj); // { a: 1, b: 2, c: 3 }
console.log(obj1); // { a: 1, b: 2, c: 3 }
console.log(newObj === obj1); // true
```

Alternative using the spread operator (reassign a new object)

```javascript
let obj1 = { a: 1 };
const obj2 = { b: 2 };
const obj3 = { c: 3 };

const newObj = { ...obj1, ...obj2, ...obj3 };
obj1 = newObj;
console.log(newObj); // { a: 1, b: 2, c: 3 }
```

### "this" keyword

In most cases, the value of "this" is determined by how a function is called.

If strict mode is enabled, "this" that returns window in browser/global in node will instead return undefined

ES6 arrow functions do not rebind the "this" keyword

```javascript
const person = {
  name: "george",
  getThis() {
    return this;
  },
  getDeepThis() {
    function example() {
      return this;
    }
    return example();
  },
  arrowDeepThis() {
    const arrowFunc = () => {
      return this;
    };
    return arrowFunc();
  }
};

console.log(person.getThis()); // person object
console.log(person.getDeepThis()); // window in browser, global in node
console.log(person.arrowDeepThis()); // person object
```

### .bind() .call() .apply()

These 3 methods all involve the use of the "this" keyword

.bind(thisArg)

```javascript
const person = {
  name: "george",
  getThis() {
    return this;
  },
  getDeepThis() {
    function example() {
      return this;
    }
    return example.bind(this)();
  }
};

console.log(person.getDeepThis()); // person object
```

.call(thisArg, ...arguments)

```javascript
function printer(greeting) {
  console.log(`${greeting}, this is ${this.name}`);
}

const object1 = {
  name: "object1"
};

const object2 = {
  name: "object2"
};

printer.call(object2, "Hi there"); // Hi there, this is object2
```

.apply(thisArg, [arguments array])

```javascript
function printer(...numbers) {
  console.log(`In ${this.name}, we have ${numbers}`);
}

const object1 = {
  name: "object1"
};

printer.apply(object1, [100, 99, 98, 97, 96, 95]); // In object1, we have 100,99,98,97,96,95
```

### ES6 Classes

ES6 Classes are syntactic sugar over constructor functions

```javascript
class Person {
  constructor(name, gender, yearOfBirth) {
    this.name = name;
    this.gender = gender;
    this.age = new Date().getFullYear() - yearOfBirth;
  }
}
```

### prototypes

```javascript
// all objects inherit properties and methods from a prototype, you can think of prototypes as the parent
function Person(name, gender, yearOfBirth) {
  this.location = "Singapore";
  this.name = name;
  this.gender = gender;
  this.age = new Date().getFullYear() - yearOfBirth;
}

const jack = new Person("jack", "male", 1980);
console.log(Object.getPrototypeOf(jack)); // returns the prototype of Person

console.log(jack.constructor); // returns the Person function
```

```javascript
// modifying the example above, adding methods to the Person prototype
function Person(name, gender, yearOfBirth) {
  this.name = name;
  this.gender = gender;
  this.yearOfBirth = yearOfBirth;
}

Person.prototype.getAge = function() {
  return new Date().getFullYear() - this.yearOfBirth;
};
Person.prototype.walk = function() {
  console.log(`${this.name} is walking...`);
};

const sam = new Person("sam", "female", 1998);
sam.walk(); // sam is walking...
console.log(sam.getAge()); // 20 (AS OF 2018)
```

```javascript
// comparing the prototypes of objects, continuing from the example above
const sam = new Person("sam", "female", 1998);
const daniel = new Person("daniel", "male", 1950);

console.log(Object.getPrototypeOf(daniel) === Object.getPrototypeOf(sam)); // true

console.log(Object.getPrototypeOf(sam) === Person.prototype); // true

console.log(sam.__proto__ === Person.prototype); // true
```

### Object.create(proto)

**Object.create()** creates a new object, setting the argument object as the new object's **\_\_proto\_\_**

```javascript
// this is an object, not a constructor function
const person = {
  isHuman: true,
  greeting: function() {
    console.log(
      `My name is ${this.name}. Am I human? ${this.isHuman ? "Yes" : "No"}`
    );
  }
};

const james = Object.create(person);
james.name = "James";
james.greeting(); // My name is James. Am I human? Yes

james.__proto__ === person; // true
```

## Functions

### Function Declaration vs Function Expression

Declaration: They are hoisted to the top of the file, you **CAN** use them before they are declared.

Expression: They are not hoisted, you **CANNOT** use them before they are expressed.

Note: The easiest way to distinguish declaration vs. expression is the position of the word "function" in the statement (not just a line, but a distinct statement). If "function" is the very first thing in the statement, then it's a function declaration. Otherwise, it's a function expression. - ["You don't know JS" by Kyle Simpson](http://github.com/getify/You-Dont-Know-JS)

```javascript
// Declaration
function helloDeclaration() {
  console.log("hello declaration");
}

// Expression
const helloExpression = function() {
  console.log("hello expression");
};
```

```javascript
// OKAY
logPlus2(10); // 10 + 2 = 12
function logPlus2(num) {
  console.log(`${num} + 2 = ${num + 2}`);
}

// NOT OKAY
logMinus2(5); // logMinus2 is not defined
const logMinus2 = function(num) {
  console.log(`${num} - 2 = ${num - 2}`);
};
```

### Arrow Functions

```javascript
// use "()" for no arguments
const arrowFunction = () => console.log("WOOHOO ARROW FUNCTION");

// no need for "()" for a single argument
// no need for "{}" and return keyword for single line functions
const add2 = number => number + 2;

// use () for functions with more than 1 argument
// use {} and return for multiline functions
const rectangle = (length, breadth) => {
  const area = length * breadth;
  const perimeter = 2 * length + 2 * breadth;
  return {
    area,
    perimeter
  };
};
```

### Higher Order Function

Higher order functions are functions that either return a function or take function(s) as arguments.

Note: Array methods such as forEach, map, reduce, filter are all higher order functions.

Example: "Calculating with Functions" from Codewars

```javascript
const numberMaker = (n, func) => (func === undefined ? n : func(n));

const zero = func => numberMaker(0, func);
const one = func => numberMaker(1, func);
const two = func => numberMaker(2, func);
const three = func => numberMaker(3, func);
const four = func => numberMaker(4, func);
const five = func => numberMaker(5, func);
const six = func => numberMaker(6, func);
const seven = func => numberMaker(7, func);
const eight = func => numberMaker(8, func);
const nine = func => numberMaker(9, func);

const plus = ins => outs => outs + ins;
const minus = ins => outs => outs - ins;
const times = ins => outs => outs * ins;
const dividedBy = ins => outs => outs / ins;

two(times(three())); // => 6
nine(dividedBy(three())); // => 3
one(plus(four())); // => 5
```

### Generator Function (function\*)

A generator function can be paused and resumed later. It uses the "yield" and "next" keywords.

```javascript
// yield will "return" the value and pause the generator
function* plusOne(startValue) {
  while (true) {
    yield (startValue += 1);
  }
}

// calling next will resume the generator where it left off
// resumes in the while (true) loop and next() can be called as many times
const moreThan10 = plusOne(10);
moreThan10.next(); // => { value: 11, done: false }
moreThan10.next(); // => { value: 12, done: false }
moreThan10.next().value; // => 13
moreThan10.next().value; // => 14
```

```javascript
const favNumbers = function*() {
  yield 7;
  yield 13;
  yield 17;
  yield 19;
};

const showNumbers = favNumbers();
showNumbers.next(); // => { value: 7, done: false }
showNumbers.next(); // => { value: 13, done: false }
showNumbers.next(); // => { value: 17, done: false }
showNumbers.next(); // => { value: 19, done: false }
showNumbers.next(); // => { value: undefined, done: true }
```

## JSON - JavaScript Object Notation

### JSON.parse(string)

```javascript
const samplePerson = '{"name":"david", "age":42}';
console.log(typeof samplePerson); // string
console.log(samplePerson.name); // undefined

const parsedPerson = JSON.parse(samplePerson);
console.log(typeof parsedPerson); // object
console.log(parsedPerson); // {name: 'david', age: 42}
console.log(parsedPerson.name); // david
```

```javascript
const milkStr = '["full-cream", "low-fat", "skim", "soy", "almond"]';
console.log(typeof milkStr); // string
console.log(milkStr.length); // 50 (characters in the string)

const milks = JSON.parse(milkStr);
console.log(Array.isArray(milks)); // true
console.log(milks); // ['full-cream', 'low-fat', 'skim', 'soy', 'almond']
console.log(milks.length); // 5 (elements in the array)
```

### JSON.stringify(array/object)

```javascript
const myStuff = {
  laptop: "MacBook Pro",
  watch: "Casio F-91W",
  bottle: "Dasani"
};
console.log(typeof myStuff); // object
console.log(myStuff.laptop); // MacBook Pro

const stringStuff = JSON.stringify(myStuff);
console.log(typeof stringStuff); // string
console.log(stringStuff); // '{"laptop":"MacBook Pro","watch":"CasioF-91W","bottle":"Dasani"}'
console.log(stringStuff.laptop); // undefined
```

```javascript
const pets = ["dog", "cat", "fish", "hamster", "bird", "frog", "horse"];
console.log(Array.isArray(pets)); // true

const strPets = JSON.stringify(pets);
console.log(typeof strPets); // string
console.log(strPets); // '["dog","cat","fish","hamster","bird","frog","horse"]'
```

### array/object deep clone

shallow copy with spread operator

```javascript
const numsInNums = [1, 2, 3, [4, 5, [6, 7]]];
const newNums = [...numsInNums];

console.log(numsInNums === newNums); // false
newNums[0] = "ONE";
newNums[3][0] = "FOUR";

console.log(newNums); // ['ONE', 2, 3, ['FOUR', 5, [6, 7]]];
console.log(numsInNums); // [1, 2, 3, ['FOUR', 5, [6, 7]]];
```

simple deep clone with JSON.parse(JSON.stringify(array/object))

```javascript
const numsInNums = [1, 2, 3, [4, 5, [6, 7]]];
const newNums = JSON.parse(JSON.stringify(numsInNums));

console.log(numsInNums === newNums); // false
newNums[0] = "ONE";
newNums[3][0] = "FOUR";

console.log(newNums); // ['ONE', 2, 3, ['FOUR', 5, [6, 7]]];
console.log(numsInNums); // [1, 2, 3, [4, 5, [6, 7]]]
```

### setTimeout(callback, delay)

```javascript
const thisTakesTime = () => {
  console.log("waiting, waiting, waiting");
  setTimeout(() => console.log("okay done!"), 3000);
};

thisTakesTime();

// waiting, waiting, waiting
// * 3 seconds delay *
// okay done!
```

### setInterval(callback, delay)

```javascript
const countdownTimer = seconds => {
  console.log(seconds);
  const timer = setInterval(() => {
    if (seconds <= 0) {
      console.log("DONE!");
      clearInterval(timer);
    }
    console.log(seconds);
    seconds -= 1;
  }, 1000);
};

countdownTimer(5);

// 5
// 4
// 3
// 2
// 1
// DONE!
// 0
```

## Promise & Async/Await

The states of a promise:

pending: initial state, neither fulfilled nor rejected.

resolved/fulfilled: the operation completed successfully.

rejected: the operation failed.

```javascript
const p = new Promise((resolve, reject) => {
  // perform async operation here
  setTimeout(() => {
    resolve("Success!"); // pending => resolved/fulfilled
    reject(new Error("Error!")); // pending => rejected
  }, 2000);
});

p.then(result => console.log(result)).catch(err =>
  console.log(`Error: ${err.message}`)
);
// Success! (after 2 seconds)
```

### Async/await

```javascript
function databaseQuery2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Received result from database");
      resolve({ name: "Mark", age: 32 });
    }, 2000);
  });
}

async function getUserData() {
  console.log("Searching database for user");
  const result = await databaseQuery2Seconds();
  console.log(result);
}

getUserData();
// Searching database for user
// * 2 seconds delay *
// Received result from database
// { name: 'Mark', age: 32 }
```

### Fetch API

```javascript
async function getPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const json = await response.json();
  return json;
}

const wrapper = async () => {
  const posts = await getPosts();
  console.log(posts);
};

// some posts in JSON here...
```

## Error handling

### throw new Error(err)

Creating an instance of the **Error** object

```javascript
throw new Error("this is an error");

// In Chrome
//Uncaught Error: this is an error

// In Node
// Error: this is an error
```

### try...catch

```javascript
function includes2(input) {
  return input.indexOf("2") !== -1;
}

const num = 12345;

try {
  includes2(num);
} catch (err) {
  console.log(err.name);
  console.log(err.message);
}

// TypeError
// input.indexOf is not a function
```

**finally** will execute regardless of the **try...catch** block

```javascript
try {
  console.log("hello world!");
} catch (err) {
  console.log("Error:", err.message);
} finally {
  console.log("finally this runs");
}

// hello world!
// finally this runs

try {
  throw new Error("this is an error");
} catch (err) {
  console.log("Error:", err.message);
} finally {
  console.log("finally this runs");
}

// Error: this is an error
// finally this runs
```

Finally will execute regardless of any **return** statements in the **try...catch** block

```javascript
function errorExample() {
  try {
    throw new Error("oh no, an error occurred");
    return "try, all is good";
  } catch (err) {
    console.log(err.message);
    return "catch, something went wrong";
  } finally {
    console.log("looks like we are done");
    return "finally, this has to execute before the rest of try..catch";
  }
}

console.log(errorExample());
// oh no, an error occurred
// looks like we are done
// finally, this has to execute before the rest of try..catch
```

## Simple Tasks

### TASK: REVERSE A STRING

```javascript
const alphabets = "abcdefg";
const reverser = input =>
  input
    .split("")
    .reverse()
    .join("");

console.log(reverser(alphabets)); // gfedcba
```

### TASK: CAPITALISE A STRING

```javascript
const str = "foobar";
const caps = input => input[0].toUpperCase() + input.slice(1);
console.log(caps(str)); // Foobar

// Capitalise first letter of every word
const sentence = "this is a sentence";
const up = input =>
  input
    .split(" ")
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(" ");

console.log(up(sentence)); // This Is A Sentence
```

### TASK: REMOVE DUPLICATE VALUES IN AN ARRAY

```javascript
const arr = [1, 1, 2, 2, 2, 3, 3, 4, 4, 4, 5, 5, 6, 6, 7, 7, 8, 9, 0];
```

### USING FOR LOOP

```javascript
const removeDuplicates = input => {
  const res = [];
  for (let i = 0; i < input.length; i++) {
    // Single line if statement for only true value
    if (res.indexOf(input[i]) == -1) res.push(arr[i]);
  }
  return res;
};
console.log(removeDuplicates(arr)); // [1,2,3,4,5,6,7,8,9,0]
```

### USING SET

The Set object lets you store unique values of any type, whether primitive values or object references.

```javascript
const removeDuplicatesSet = input => [...new Set(input)];
console.log(removeDuplicatesSet(arr)); // [1,2,3,4,5,6,7,8,9,0]
```

### TASK: RETURN UNIQUE VALUES IN AN ARRAY

```javascript
arr = [1, 1, 2, 2, 2, 3, 3, 4, 4, 4, 5, 5, 6, 7, 8, 9, 0];
```

### USING ARRAY.filter

```javascript
const findUnique = input => {
  return input.filter(i => input.indexOf(i) == input.lastIndexOf(i));
};
console.log(findUnique(arr)); // [6,7,8,9,0]
```
