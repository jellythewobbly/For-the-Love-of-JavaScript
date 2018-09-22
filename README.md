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

```js
// returns the index of the first element that satisfies the condition
// this is essentially .indexOf() but with a search condition instead of a search value
const arr = [5, 12, 8, 130, 44];
console.log(arr.findIndex(element => element > 20)); // 3
```

#### .find(callback)

```js
// returns the value of the first element that satisfies the condition
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

```js
// returns true if all elements in the array pass the condition
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

```js
// returns true if at least one element in the array passes the condition
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

```js
// adds one or more elements to the END of the array, it returns the new length of the array
const arr = ['alex', 'ben', 'charlie', 'david', 'ethan'];
const arrLength = arr.push('felix', 'gerald');
console.log(arr); // ['alex', 'ben', 'charlie', 'david', 'ethan', 'felix', 'gerald']
console.log(arrLength); // 7
```

#### .unshift(values)

```js
// adds one or more elements to the START of an array, it returns the new length of the array
const arr = ['alex', 'ben', 'charlie', 'david', 'ethan'];
const arrLength = arr.unshift('adam', 'alan');
console.log(arr); // ['adam', 'alan', 'alex', 'ben', 'charlie', 'david', 'ethan']
console.log(arrLength); // 7
```

#### .pop()

```js
// removes the LAST element from an array, it returns the element that was removed
const arr = ['alex', 'ben', 'charlie', 'david', 'ethan'];
const popValue = arr.pop();
console.log(arr); // ['alex', 'ben', 'charlie', 'david']
console.log(popValue); // 'ethan'
```

#### .shift()

```js
// removes the FIRST element from an array and returns the element that was removed
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

```js
// returns an array containing the deleted element(s) or an empty array
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

```js
// .forEach() executes the callback function once for each array element
const arr = [1, 2, 3, 4, 5];
arr.forEach(i => console.log(`the number is ${i}`));
// the number is 1
// the number is 2
// the number is 3
// the number is 4
// the number is 5
```

#### .map(callback)

```js
// .map() creates a new array with the results of the callback function
const arr = [1, 2, 3, 4, 5];
const doubleArr = arr.map(i => i * 2);
console.log(doubleArr); // [2, 4, 6, 8, 10]
```

#### .filter(callback)

```js
// .filter() creates a new array with all elements that pass the test in the callback function
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const moreThanFive = arr.filter(i => i > 5);
console.log(moreThanFive); // [6, 7, 8, 9, 10]
```

#### .reduce(callback, initialValue)

```js
// .reduce() executes a reducer callback function on each member of the array, returns a single output value
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

```js
// use for...of to iterate over iterable objects such as strings and arrays
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

```js
const book = {
	title: 'JavaScript: The Definitive Guide',
	author: 'David Flanagan',
	publisher: "O'Reilly Media"
};

for (let property in book) {
	console.log(`${property} is ${book[property]}`);
}
// title is JavaScript: The Definitive Guide
// author is David Flanagan
// publisher is O'Reilly Media
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

"The Set object lets you store unique values of any type, whether primitive values or object references."

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
