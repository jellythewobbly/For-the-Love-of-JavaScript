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

## NULL, UNDEFINED

## ARRAY

#### .length

```js
const arr = ['alex', 'ben', 'charlie', 'david', 'ethan'];
console.log(arr.length); // 5
```

#### .indexOf(searchValue, fromIndex)

```js
const arr = ['alex', 'ben', 'charlie', 'david', 'ethan'];
console.log(arr.indexOf('charlie')); // 2
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

#### FOR OF

## OBJECT

#### FOR IN

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
