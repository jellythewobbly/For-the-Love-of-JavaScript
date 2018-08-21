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

### STRING

#### String methods

```js
// Template literals ``
let name = 'David';
let school = 'General Assembly';
console.log(`Hello my name is ${name} and I am a student at ${school}.`); // "Hello my name is David and I am a student at General Assembly."

// .toString()
let a = 123;
console.log(a.toString()); // '123'
console.log(a); // 123

// .length
let alphabets = 'abcdefghijklmnopqrstuvwxyz';
console.log(alphabets.length); // 26
// indexing a string
console.log(alphabets[0]); // 'a'
console.log(alphabets[25]); // 'z'

// String.fromCharCode()
console.log(String.fromCharCode(97)); //'a'
console.log(String.fromCharCode(65, 66, 67)); // 'ABC'

// .charCodeAt()
console.log('a'.charCodeAt()); // 97
console.log('HELLO'.charCodeAt()); // 72 (if the argument is not a number, it defaults to 0)
console.log('HELLO'.charCodeAt(1)); // 69 (Char code of index 1 - 'E')
```

### NUMBER

#### Shorthand operators

```js
let a = 12;

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
let i = 1;
console.log(i++); // 1
console.log(i); // 2
```

```js
let i = 1;
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

### FOR OF

## OBJECT

### FOR IN

### Algorithms?

### TASK: REMOVE DUPLICATE VALUES IN AN ARRAY

```js
let arr = [1, 1, 2, 2, 2, 3, 3, 4, 4, 4, 5, 5, 6, 6, 7, 7, 8, 9, 0];
```

### USING FOR LOOP

```js
const removeDuplicatesFor = input => {
	const res = [];
	for (let i = 0; i < input.length; i++) {
		// Single line if statement for only true value
		if (res.indexOf(input[i]) == -1) res.push(arr[i]);
	}
	return res;
};
console.log(removeDuplicatesFor(arr)); // [1,2,3,4,5,6,7,8,9,0]
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
