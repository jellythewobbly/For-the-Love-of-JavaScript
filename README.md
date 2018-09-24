# ALL THINGS JAVASCRIPT (FUNDAMENTALS)

## MADE WITH ♥ BY JAY

### 7 Data Types

1. Boolean
2. Null
3. Undefined
4. Number
5. String
6. Symbol (New ES6)
7. Object

## STRING

#### Template literals ``

```js
const name = 'David';
const school = 'General Assembly';
console.log(`Hello my name is ${name} and I am a student at ${school}.`); // "Hello my name is David and I am a student at General Assembly."
```

#### .toString()

```js
const a = 123;
console.log(a.toString()); // '123'
```

#### .length

```js
const alphabets = 'abcdefghijklmnopqrstuvwxyz';
console.log(alphabets.length); // 26
// indexing a string
console.log(alphabets[0]); // a
console.log(alphabets[25]); // z
```

#### String.fromCharCode(input)

```js
console.log(String.fromCharCode(97)); // a
console.log(String.fromCharCode(65, 66, 67)); // ABC
```

#### .charCodeAt(index)

```js
console.log('a'.charCodeAt()); // 97
console.log('HELLO'.charCodeAt()); // 72 (if index is not a number, it defaults to 0)
console.log('HELLO'.charCodeAt(1)); // 69 (Char code of index 1 - 'E')
```

#### .repeat(count)

```js
const str = 'foobar';
console.log(str.repeat(3)); // foobarfoobarfoobar
```

#### .replace(searchValue, newValue)

```js
// NOTE: this is commonly used with a regular expression (regex)
const str = 'hello world';
console.log(str.replace('hello', 'goodbye')); // goodbye world
const ga = 'general assembly';
console.log(ga.replace(/e/g, '3')); // g3n3ral ass3mbly (use of regex to select all 'e')
const sentence = 'are vowels important?';
console.log(sentence.replace(/[aeiou]/g, '')); // r vwls mprtnt?
```

#### .indexOf(searchValue, fromIndex)

```js
const sentence = 'hello my friend';
console.log(sentence.indexOf('my')); // 6
console.log(sentence.indexOf('h')); // 0
console.log(sentence.indexOf('hello')); // 0

const first = sentence.indexOf('e');
console.log(first); // 1
console.log(sentence.indexOf('e', first + 1)); // 12 (use this to find the next index of)
console.log(sentence.indexOf('waddup')); // -1
```

#### .lastIndexOf(searchValue, fromIndex)

```js
const sentence = 'hello David, my friend';
console.log(sentence.lastIndexOf('D')); // 6
console.log(sentence.indexOf('d')); // 10
console.log(sentence.lastIndexOf('d')); // 21
console.log(sentence.lastIndexOf('e')); // 19
console.log(sentence.lastIndexOf('l')); // 3
console.log(sentence.lastIndexOf('l', 2)); // 2 (only searching from index 0 to index 2 of the string - 'hel')
console.log(sentence.lastIndexOf('l', 1)); // -1 (only searching from index 0 to index 1 of the string - 'he')
```

#### .slice(start, end) similar but not the same as .substring()

```js
const alphabets = 'abcdefghijklmnopqrstuvwxyz';
console.log(alphabets.slice()); // abcdefghijklmnopqrstuvwxyz
console.log(alphabets.slice(3)); // defghijklmnopqrstuvwxyz
console.log(alphabets.slice(3, 7)); // defg (index 3 up to but not including 7)
console.log(alphabets.slice(-3)); // xyz (counting from the end of the string)
console.log(alphabets.slice(-10, -4)); // qrstuv
```

#### .split(separator, limit)

```js
const str = 'hello world';
console.log(str.split()); // ['hello world']
console.log(str.split('')); // ['h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd']
console.log(str.split(' ')); // ['hello', 'world']
console.log(str.split('e')); // ['h', 'llo world']
console.log(str.split('l')); // ['he', '', 'o wor', 'd']
console.log(str.split('', 4)); // ['h', 'e', 'l', 'l'] (returns the first 4 splits)
```

#### .toLowerCase() .toUpperCase()

```js
console.log('WADDUP BRO'.toLowerCase()); // waddup bro
console.log('hello world'.toUpperCase()); // HELLO WORLD
```

#### .match(regularExpression)

Returns an array of strings that match the regular expression

```js
const randomString =
	'the123quick456brown789fox!@#jumped$%^over&*(the)_+lazy{}|dog';
const onlyWords = randomString.match(/[a-z]+/g);
console.log(onlyWords);
// ['the', 'quick', 'brown', 'fox', 'jumped', 'over', 'the', 'lazy','dog']
console.log(onlyWords.join(' ')); // 'the quick brown fox jumped over the lazy dog'
```

## NUMBER

#### Shorthand operators

```js
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

#### Comparing i++ vs ++i

```js
let i = 1; // let instead of const as they will not work with const
console.log(i++); // 1
console.log(i); // 2
```

```js
let i = 1; // let instead of const as they will not work with const
console.log(++i); // 2
console.log(i); // 2
```

#### Number.toFixed(n)

Returns a string representation of the number rounded to n decimal places

```js
(12345.6789).toFixed(3); // "12345.679"
```

#### Number.toPrecision(n)

Returns a string representation of the number rounded to n digits

```js
(12345.6789).toPrecision(6); // "12345.7"
```

#### Number.MAX_SAFE_INTEGER

Due to the double-precision floating-point format, using a number LARGER THAN 9007199254740991 may result in loss of precision

```js
const x = Number.MAX_SAFE_INTEGER + 1;
const y = Number.MAX_SAFE_INTEGER + 2;
console.log(x === y); // true
```

#### Number.MIN_SAFE_INTEGER

Due to the double-precision floating-point format, using a number SMALLER THAN -9007199254740991 may result in loss of precision

```js
const x = Number.MIN_SAFE_INTEGER - 1;
const y = Number.MIN_SAFE_INTEGER - 2;
console.log(x === y); // true
```

#### MATH

Not going into detail as these are pretty self explanatory

```js
Math.random(); // returns a floating point number between 0 to 1 (inclusive of 0, but not 1)

Math.floor(input); // returns the largest integer less than or equal to a given number
Math.ceil(input); // returns the smallest integer greater than or equal to a given number

Math.trunc(input); // returns the integer part of a number by removing the decimals
Math.round(input); // returns the value of a number rounded to the nearest integer

Math.pow(base, exponent); // returns the base raised to the exponent e.g. Math.pow(4, 2) = 16
Math.sqrt(input); // returns the square root of a number
Math.cbrt(input); // returns the cube root of a number

Math.PI; // returns 3.141592653589793
```

#### Implicit coercion

Javascript will attempt to coerce an unexpected value type to the expected type
Does not work with addition as it leads to concatenation

```js
console.log('6' + '9'); // '69' (string)
console.log('10' - '7'); // 3 (number)
console.log('3' * '3'); // 9 (number)
console.log('10' / '2'); // 5 (number)
```

#### NaN

NaN is a special value, it is never equal to another NaN value
Comparing/equating anything with NaN will result in false

```js
console.log(NaN == NaN); // false
console.log('hello' == NaN); // false
console.log(['this', 'is', 'an', 'array'] == NaN); // false
console.log({ name: 'ben', age: 20 } == NaN); // false

console.log(NaN != NaN); // true
```

#### isNaN(input)

To test for NaN, use isNaN()

```js
console.log(isNaN('hello')); // true
console.log(isNaN(['this', 'is', 'an', 'array'])); // true
console.log(isNaN({ name: 'ben', age: 20 })); // true
```

## BOOLEAN

#### falsy values

1. false
2. undefined
3. null
4. 0
5. ''
6. NaN

#### truthy values (Everything that isn't falsy is truthy)

1. true
2. {} (empty object)
3. [] (empty array)
4. 69
5. -1
6. 1
7. 'hello'

#### while loop using the concept of truthy/falsy

```js
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

## NULL, UNDEFINED

## ARRAY

#### Array.isArray(input)

```js
Array.isArray([1, 2, 3]); // true
Array.isArray({ foo: 123 }); // false
Array.isArray('foobar'); // false
Array.isArray(undefined); // false
```

#### .length

```js
const arr = ['alex', 'ben', 'charlie', 'david', 'ethan'];
console.log(arr.length); // 5
```

#### .indexOf(searchValue, fromIndex)

```js
const arr = ['alex', 'ben', 'charlie', 'david', 'ethan'];
console.log(arr.indexOf('charlie')); // 2
console.log(arr.indexOf('hello world')); // -1 (not found)
```

#### .findIndex(callback)

Returns the index of the first element that satisfies the condition
.findIndex() is essentially .indexOf() but with a search condition instead of a search value

```js
const arr = [5, 12, 8, 130, 44];
console.log(arr.findIndex(element => element > 20)); // 3
```

#### .find(callback)

Returns the value of the first element that satisfies the condition

```js
const arr = ['blue', 'red', 'green', 'purple', 'pink', 'yellow'];
console.log(arr.find(color => color.length > 5)); // purple
```

#### .includes(searchValue)

```js
const arr = ['blue', 'red', 'green', 'purple', 'pink', 'yellow'];
console.log(arr.includes('red')); // true
console.log(arr.includes('rainbow')); // false

// alternative using .indexOf()
console.log(arr.indexOf('red') !== -1); // true
console.log(arr.indexOf('rainbow') !== -1); // false
```

#### .every(callback)

Returns true if all elements in the array pass the condition

```js
const numbers = [1, 2, 3, 4, 5];
const allGreaterThanZero = numbers.every(i => i > 0);
console.log(allGreaterThanZero); // true

// breaks out of the function once a false value has been found
const arr = [1, 2, 3, 'hello', 4, 5];
const allNumbers = arr.every(i => {
	console.log(i);
	return typeof i === 'number';
});
// 1
// 2
// 3
// hello
console.log(allNumbers); // false
```

#### .some(callback)

Returns true if at least one element in the array passes the condition

```js
// breaks out of the function once a true value has been found
const names = ['alex', 'ben', 'charlie', 'david', 'ethan'];
const anyLongerThanFive = names.some(i => {
	console.log(i);
	return i.length > 5;
});
// alex
// ben
// charlie
console.log(anyLongerThanFive); // true
```

#### .sort(optionalCompareFunction)

```js
// .sort() modifies the original array
const months = ['March', 'January', 'February', 'December'];
months.sort();
console.log(months); // ['December', 'February', 'January', 'March'];

// sort by ascending length of string
const months = ['January', 'February', 'March', 'April', 'May', 'December'];
months.sort((a, b) => a.length - b.length);
console.log(months); // ['May', 'March', 'April', 'January', 'February', 'December']
```

```js
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

#### .reverse()

```js
// .reverse() modifies the original array
const arr = ['one', 'two', 'three', 'four', 'five'];
arr.reverse();
console.log(arr); // ['five', 'four', 'three', 'two', 'one']
```

#### .push(values)

Adds one or more elements to the END of the array, it returns the new length of the array

```js
const arr = ['alex', 'ben', 'charlie', 'david', 'ethan'];
const arrLength = arr.push('felix', 'gerald');
console.log(arr); // ['alex', 'ben', 'charlie', 'david', 'ethan', 'felix', 'gerald']
console.log(arrLength); // 7
```

#### .unshift(values)

Adds one or more elements to the START of an array, it returns the new length of the array

```js
const arr = ['alex', 'ben', 'charlie', 'david', 'ethan'];
const arrLength = arr.unshift('adam', 'alan');
console.log(arr); // ['adam', 'alan', 'alex', 'ben', 'charlie', 'david', 'ethan']
console.log(arrLength); // 7
```

#### .pop()

Removes the LAST element from an array, it returns the element that was removed

```js
const arr = ['alex', 'ben', 'charlie', 'david', 'ethan'];
const popValue = arr.pop();
console.log(arr); // ['alex', 'ben', 'charlie', 'david']
console.log(popValue); // 'ethan'
```

#### .shift()

Removes the FIRST element from an array and returns the element that was removed

```js
const arr = ['alex', 'ben', 'charlie', 'david', 'ethan'];
const shiftValue = arr.shift();
console.log(arr); // ['ben', 'charlie', 'david', 'ethan']
console.log(shiftValue); // 'alex'
```

#### .slice(fromIndex)

```js
// .slice() does not modify the original array
const arr = ['alex', 'ben', 'charlie', 'david', 'ethan'];
console.log(arr.slice()); // shallow copy of arr
console.log(arr.slice(2)); // ['charlie', 'david', 'ethan']
console.log(arr.slice(2, 3)); // ['charlie']
console.log(arr.slice(2, 4)); // ['charlie', 'david']
console.log(arr.slice(-2)); // ['david', 'ethan']
```

#### .splice(startIndex, deleteCount, insertValues)

Returns an array containing the deleted element(s) or an empty array

```js
// .splice() modifies the original array

// insert values into an array
const arr = ['alex', 'ben', 'charlie', 'david', 'ethan'];
arr.splice(2, 0, 'brandon', 'bob');
console.log(arr); // ['alex', 'ben', 'brandon', 'bob', 'charlie', 'david', 'ethan']

// delete values in an array
const arr = ['alex', 'ben', 'charlie', 'david', 'ethan'];
arr.splice(2, 1);
console.log(arr); // ['alex', 'ben', 'david', 'ethan']

// get the elements that are removed
const arr = ['alex', 'ben', 'brandon', 'bob', 'charlie', 'david', 'ethan'];
const removedValues = arr.splice(2, 2);
console.log(removedValues); // ['brandon', 'bob']
console.log(arr); // ['alex', 'ben', 'charlie', 'david', 'ethan']

// replace values in an array
const arr = ['alex', 'ben', 'charlie', 'david', 'ethan'];
arr.splice(3, 1, 'daniel');
console.log(arr); // ['alex', 'ben', 'charlie', 'daniel', 'ethan']
```

#### .forEach(callback)

.forEach() executes the callback function once for each array element

```js
const arr = [1, 2, 3, 4, 5];
arr.forEach(i => console.log(`the number is ${i}`));
// the number is 1
// the number is 2
// the number is 3
// the number is 4
// the number is 5
```

#### .map(callback)

.map() creates a new array with the results of the callback function

```js
const arr = [1, 2, 3, 4, 5];
const doubleArr = arr.map(i => i * 2);
console.log(doubleArr); // [2, 4, 6, 8, 10]
```

#### .filter(callback)

.filter() creates a new array with all elements that pass the test in the callback function

```js
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const moreThanFive = arr.filter(i => i > 5);
console.log(moreThanFive); // [6, 7, 8, 9, 10]
```

#### .reduce(callback, initialValue)

.reduce() executes a reducer callback function on each member of the array, returns a single output value

```js
const numbers = [1, 2, 3, 4, 5];
const total = numbers.reduce((total, current) => total + current);
console.log(total); // 15
```

```js
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

```js
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

#### for...of

Use for...of to iterate over iterable objects such as strings and arrays

```js
const arr = [1, 2, 3, 4, 5];
let total = 0;
for (let number of arr) {
	total += number;
}
console.log(total); // 15
```

## OBJECT

#### Factory function

```js
// return keyword has to be used with factory function
// note that there is no need for name: name, gender: gender
// get keyword used to define a getter (access an object's method like a property)
function createPerson(name, gender, yearOfBirth) {
	return {
		location: 'Singapore',
		name,
		gender,
		get age() {
			return new Date().getFullYear() - yearOfBirth;
		}
	};
}

const peter = createPerson('peter', 'male', 1995);
console.log(peter.location); // Singapore
console.log(peter.name); // peter
console.log(peter.age); // 23 (AS OF 2018)
```

#### Constructor function

```js
// new keyword has to be used with constructor function
// note uppercase first letter (Pascal case) used for constructor function
function Person(name, gender, yearOfBirth) {
	this.location = 'Singapore';
	this.name = name;
	this.gender = gender;
	this.age = new Date().getFullYear() - yearOfBirth;
}

const alex = new Person('alex', 'male', 2000);
console.log(alex.location); // Singapore
console.log(alex.name); // alex
console.log(alex.age); // 18 (AS OF 2018)
```

#### for...in

Use for...in to iterate over an object

```js
// for...in returns the object's own instance properties/methods and also those from the prototype
const book = {
	title: 'JavaScript: The Definitive Guide',
	author: 'David Flanagan',
	publisher: "O'Reilly Media"
};

for (let key in book) {
	console.log(`${key} is ${book[key]}`);
}
// title is JavaScript: The Definitive Guide
// author is David Flanagan
// publisher is O'Reilly Media
```

#### Object.keys()

Returns an array of the object's keys

```js
// returns only the object's own instance properties/methods
const person = {
	name: 'mary',
	age: 32
};
console.log(Object.keys(person)); // ['name', 'age']
```

#### Object.values()

Returns an array of the object's values

```js
const person = {
	name: 'mary',
	age: 32
};
console.log(Object.values(person)); // ['mary', 32]
```

#### in operator

Returns true if the property is in the object

```js
const person = {
	name: 'mary',
	age: 32
};

if ('name' in person) console.log(`person has a name ${person.name}`);
// person has a name mary
```

#### prototypes

```js
// all objects inherit properties and methods from a prototype, you can think of prototypes as the parent
function Person(name, gender, yearOfBirth) {
	this.location = 'Singapore';
	this.name = name;
	this.gender = gender;
	this.age = new Date().getFullYear() - yearOfBirth;
}

const jack = new Person('jack', 'male', 1980);
console.log(Object.getPrototypeOf(jack)); // returns the prototype of Person

console.log(jack.constructor); // returns the Person function
```

```js
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

const sam = new Person('sam', 'female', 1998);
sam.walk(); // sam is walking...
console.log(sam.getAge()); // 20 (AS OF 2018)
```

```js
// comparing the prototypes of objects, continuing from the example above
const sam = new Person('sam', 'female', 1998);
const daniel = new Person('daniel', 'male', 1950);

console.log(Object.getPrototypeOf(daniel) === Object.getPrototypeOf(sam)); // true

console.log(Object.getPrototypeOf(sam) === Person.prototype); // true
```

### Algorithms?

### TASK: REVERSE A STRING

```js
const alphabets = 'abcdefg';
const reverser = input =>
	input
		.split('')
		.reverse()
		.join('');

console.log(reverser(alphabets)); // gfedcba
```

### TASK: CAPITALISE A STRING

```js
const str = 'foobar';
const caps = input => input[0].toUpperCase() + input.slice(1);
console.log(caps(str)); // Foobar

// Capitalise first letter of every word
const sentence = 'this is a sentence';
const up = input =>
	input
		.split(' ')
		.map(word => word[0].toUpperCase() + word.slice(1))
		.join(' ');

console.log(up(sentence)); // This Is A Sentence
```

### TASK: REMOVE DUPLICATE VALUES IN AN ARRAY

```js
const arr = [1, 1, 2, 2, 2, 3, 3, 4, 4, 4, 5, 5, 6, 6, 7, 7, 8, 9, 0];
```

### USING FOR LOOP

```js
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

```js
const removeDuplicatesSet = input => [...new Set(input)];
console.log(removeDuplicatesSet(arr)); // [1,2,3,4,5,6,7,8,9,0]
```

### TASK: RETURN UNIQUE VALUES IN AN ARRAY

```js
arr = [1, 1, 2, 2, 2, 3, 3, 4, 4, 4, 5, 5, 6, 7, 8, 9, 0];
```

### USING ARRAY.filter

```js
const findUnique = input => {
	return input.filter(i => input.indexOf(i) == input.lastIndexOf(i));
};
console.log(findUnique(arr)); // [6,7,8,9,0]
```
