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

### NUMBER

#### Number.toFixed(n)

Returns a string representation of the number rounded to n decimal places

(12345.6789).toFixed(3); // "12345.679"

#### Number.toPrecision(n)

Returns a string representation of the number rounded to n digits

(12345.6789).toPrecision(6); // "12345.7"

## BOOLEAN

## NULL, UNDEFINED

## ARRAY

### FOR IN

### FOR OF

## OBJECT

### Algorithms?

### TASK: REMOVE DUPLICATE VALUES IN AN ARRAY

IN: [1,1,2,2,2,3,3,4,4,4,5,5,6,6,7,7,8,9,0]
OUT: [1,2,3,4,5,6,7,8,9,0]

let arr = [1, 1, 2, 2, 2, 3, 3, 4, 4, 4, 5, 5, 6, 6, 7, 7, 8, 9, 0];

### USING FOR LOOP

const removeDuplicatesFor = input => {
const res = [];
for (let i = 0; i < input.length; i++) {
// Single line if statement for only true value
if (res.indexOf(input[i]) == -1) res.push(arr[i]);
}
return res;
};
// console.log(removeDuplicatesFor(arr));

### USING SET

"The Set object lets you store unique values of any type, whether primitive values or object references."

const removeDuplicatesSet = input => [...new Set(input)];
console.log(removeDuplicatesSet(arr));

### TASK: RETURN UNIQUE VALUES IN AN ARRAY

IN: [1,1,2,2,2,3,3,4,4,4,5,5,6,7,8,9,0]
OUT: [6,7,8,9,0]

arr = [1, 1, 2, 2, 2, 3, 3, 4, 4, 4, 5, 5, 6, 7, 8, 9, 0];

### USING ARRAY.filter

const findUnique = input => {
return input.filter(i => input.indexOf(i) == input.lastIndexOf(i));
};
console.log(findUnique(arr));
