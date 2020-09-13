# javascript-tasks
This repository contains JavaScript tasks which help during learning and revision.

## How to use it
1. Clone the repository.
2. In the project directory, run the `npm install` command.
3. Write your solutions inside the `tasks` directory, filenames describe the specific task.
4. If you want to check your code, you can run the `npm test` command.
5. Check tips and solutions in the readme file only when it is necessary. You should do it without them.

## Tasks

### Task 1
Create a function (`getMaxNumber`) which returns the max number. 

* The function has infinite arguments
* The arguments should be a `Number` type but you have to check it
* The function returns `null` when it is called without arguments
* Arguments that not valid `Number` type are omitted (pay attention to `NaN`)
* When every argument is not valid, returns `null`

<details><summary>Example results</summary>
  
```javascript
getMaxNumber() // null
getMaxNumber(true, false, '', isNaN) // null 
getMaxNumber(true, 'test', null, 7, undefined) // 7 
getMaxNumber(1, true, 'test', null, 7, undefined, '15', '') // 7
```
</details>

<details><summary>Tips</summary>

The task concerns: Math.max, typeof, rest operator, spread operator, Array.filter, isNaN
</details>

<details><summary>Solution</summary>
 
```javascript
export function getMaxNumber(...numbers) {
  if (!numbers || !numbers.length) {
    return null;
  }
  const onlyNumbers = numbers.filter(num => typeof num === 'number' && !isNaN(num));

  if (!onlyNumbers.length) {
    return null;
  }
  return Math.max(...onlyNumbers);
}
```
</details>

---

### Task 2
Create a function (`isEven`) which checks that number is even.

* The function has one argument
* The argument should be a `Number` type but you have to check it
* The function returns `null` when it is called without the argument
* When argument is not valid `Number` type, returns `null`

<details><summary>Example results</summary>
  
```javascript
isEven() // null
isEven('') // null
isEven(false) // null
isEven(NaN) // null
isEven(15) // false
isEven('15') // null
isEven(6) // true
```
</details>

<details><summary>Tips</summary>
The task concerns: typeof, modulus operator
</details>

<details><summary>Solution</summary>
 
```javascript
export function isEven(num) {
  if (!num || typeof num !== 'number' || isNaN(num)) {
    return null
  }

  return num % 2 === 0;
}
```
</details>

---

### Task 3
Using the function from Task 2 (`isEven`), create another function (`getEvenNumbers`) which returns even numbers.

* The function has one argument
* The argument should be a `Number` type array but you have to check it
* The function returns `No even numbers.` when it is called without the argument
* If the argument is an empty array or does not have any valid number, returns `No even numbers.`
* If the argument contains even numbers, it is returned as text, according to the pattern `Even numbers: <evenNumbers>`, even numbers are split by a comma with extra whitespace

<details><summary>Example results</summary>
  
```javascript
getEvenNumbers() // 'No even numbers.'
getEvenNumbers([]) // 'No even numbers.'
getEvenNumbers(['', 'asd']) // 'No even numbers.'
getEvenNumbers(['', '15', 15]) // 'No even numbers.'
getEvenNumbers([2, 3, 5, 6, 9, 8, '10']) // 'Even numbers: 2, 6, 8'
```
</details>

<details><summary>Tips</summary>
The task concerns: Array.filter, Array.join
</details>

<details><summary>Solution</summary>
 
```javascript
import { isEven } from './task-2';

const noEvenNumbersMsg = 'No even numbers.'

export function getEvenNumbers(numbers) {
  if (!numbers || !numbers.length) {
    return noEvenNumbersMsg;
  }

  const onlyEvenNumbers = numbers.filter(num => isEven(num));

  if (!onlyEvenNumbers.length) {
    return noEvenNumbersMsg;
  }


  return `Even numbers: ${onlyEvenNumbers.join(', ')}`;
}
```
</details>

---

### Task 4
Create a function (`getPeopleFullNames`) which returns a formatted `String` array.

* The function has one argument which is an object array
* The function argument is required, you do not have to check it but it can be an empty array
* Every object contains `firstName` and `lastName` keys. You do not have to check that object keys exist and have value as `String` type.
* In the result, firstName and lastName key values are combined together, separated by whitespace
* If `firstName` or `lastName` have extra whitespace on the left or right text side, you have to remove it

<details><summary>Example results</summary>
  
```javascript
getPeopleFullNames([]) // []
getPeopleFullNames([{firstName: 'John', lastName: 'Smith'}, {firstName: 'Frank', lastName: 'Camp'}] ) // ['John Smith', 'Frank Camp']
getPeopleFullNames([{firstName: 'John   ', lastName: 'Smith'}, {firstName: 'Frank', lastName: '  Camp'}] ) // ['John Smith', 'Frank Camp']
```
</details>

<details><summary>Tips</summary>
The task concerns: template literals, Array.map, String.trim
</details>

<details><summary>Solution</summary>
 
```javascript
export function getPeopleFullNames(people) {
  return people.map(person => `${person.firstName.trim()} ${person.lastName.trim()}`);
}
```
</details>

---

### Task 5
Create a function (`logPeople`) which shows every person in the different line in terminal, according to the pattern `<the first letter of firstName>. <lastName> - <age>`

* People array to use inside the function:
```javascript
const people = [
  {firstName: 'John', lastName: 'Smith', age: 40},
  {firstName: 'Frank', lastName: 'Camp', age: 30}
]
```

<details><summary>Result</summary>
  
```javascript
console.log('J. Smith - 40')
console.log('F. Camp - 30')
```
</details>

<details><summary>Tips</summary>
The task concerns: template literals, Array.forEach
</details>

<details><summary>Solution</summary>
 
```javascript
export function logPeople() {
  const people = [
    {firstName: 'John', lastName: 'Smith', age: 40},
    {firstName: 'Frank', lastName: 'Camp', age: 30}
  ]

  people.forEach(person => console.log(`${person.firstName[0]}. ${person.lastName} - ${person.age}`))
}
```
</details>

---

### Task 6
Create a function (`sumCart`) which returns value of products in the cart. 

* The function has one argument which is object array
* The argument is required. You do not have to check it
* The array can be empty and then the function returns `0`
* Every object inside the array has `id`, `count`, `price` keys, Every key has value as `Number` type. You do not have to check it
* A product value is equal to count times price

<details><summary>Example results</summary>
  
```javascript
sumCart([]) // 0
sumCart([{id: 1, count: 1, price: 3}, {id: 2, count: 2, price: 2}]) // 7
```
</details>

<details><summary>Tips</summary>
The task concerns: Array.reduce
</details>

<details><summary>Solution</summary>
 
```javascript
export function sumCart(products) {
  return products.reduce((prev, next) => prev + next.count * next.price, 0);
}
```
</details>

---

### Task 7
Create a function (`formatCreditCardNumber`), which formats credit card number by adding extra whitespaces, according to the pattern `<4 digits> <4 digits> <4 digits> <4 digits>`.

* The function has one argument which is `String` type
* The argument can have whitespaces inside the text or on the left or right side, you have to remove them
* When the text after removing whitespaces has not length 16, you should return `null`
* You do not have to check that every char in the text is a digit
* The function returns `null` when it is called without the argument

<details><summary>Example results</summary>
  
```javascript
formatCreditCardNumber() // null
formatCreditCardNumber('') // null
formatCreditCardNumber('12') // null
formatCreditCardNumber(' 1 2 ') // null
formatCreditCardNumber('1111222233334444') // '1111 2222 3333 4444'
formatCreditCardNumber(' 11 11222 2333 34444 ') // '1111 2222 3333 4444'
```
</details>

<details><summary>Tips</summary>
The task concerns: String.replace
</details>

<details><summary>Solution</summary>
 
```javascript
export function formatCreditCardNumber(cardNumber) {
  if (!cardNumber) {
    return null
  }

  const cardNumberWithoutWhitespaces = cardNumber.replace(/ /g, '');

  if (cardNumberWithoutWhitespaces.length !== 16) {
    return null
  }

  return cardNumberWithoutWhitespaces.replace(/(.{4})/g, '$1 ').trim();
}

```
</details>

---

### Task 8
Create a function (`isPalindrome`), which checks that the passed argument is a palindrome. 

* The funcion has one argument as `String` type
* The function returns `false` when it is called without the argument
* You do not have to check that the argument is correct `String` type
* The size of the characters does not matter

> A palindrome is a phrase which reads the same backward as forward.

<details><summary>Example results</summary>
  
```javascript
isPalindrome() // false
isPalindrome('') // false
isPalindrome('dog') // false
isPalindrome('level') // true
isPalindrome('My gym') // true
```
</details>

<details><summary>Tips</summary>
The task concerns: String.split, Array.reverse, Array.join, String.toLowerCase
</details>

<details><summary>Solution</summary>
 
```javascript
export function isPalindrome(phrase) {
  if (!phrase) {
    return false;
  }

  const formattedPhrase = phrase.toLowerCase().replace(/ /g, '');
  const reversedPhrase = phrase.split('').reverse().join('').toLowerCase().replace(/ /g, '');

  return formattedPhrase === reversedPhrase;
}
```
</details>

---

### Task 9
Create a function (`getProductPrice`) which returns product price.

* The function has one argument as `Number` type
* The argument is a product `id`
* The argument is required, you do not have to check it
* The function looks for in the object array correct product and returns price
* If the product does not exist, returns null
* Every object inside the array has `id` and `price` keys. Every key has value as `Number` type. You do not have to check it
* Products array to use inside the function:
```javascript
const products = [
  {id: 1, price: 5},
  {id: 2, price: 10}
]
```
<details><summary>Example results</summary>
  
```javascript
getProductPrice(0) // null
getProductPrice(1) // 5
getProductPrice(2) // 10
getProductPrice(3) // null
```
</details>

<details><summary>Tips</summary>
The task concerns: Array.find
</details>

<details><summary>Solution</summary>
 
```javascript
export function getProductPrice(id) {
  const products = [
    {id: 1, price: 5},
    {id: 2, price: 10}
  ]

  const product = products.find(product => product.id === id);

  return product ? product.price : null
}

```
</details>

---

### Task 10
Create a function (`getPeople`) which returns people that match to the passed searching phrase.

* The function has one argument as `String` type
* You should get the people array that matches the passed searching phrase
* The argument should have minimum 3 chars
* If the argument has less than 3 chars, returns an empty array.
* If every person does not match to the passed searching phrase, returns an empty array.
* The size of the characters does not matter
* People array to use inside the function:
```javascript
const people = [
  {firstName: 'John', lastName: 'Smith', age: 40},
  {firstName: 'Frank', lastName: 'Camp', age: 30},
  {firstName: 'John', lastName: 'Camp', age: 20}
]
```

<details><summary>Example results</summary>
  
```javascript
getPeople() // []
getPeople('aa') // []
getPeople('aaa') // []
getPeople('joh') // [{firstName: 'John', lastName: 'Smith', age: 40}, {firstName: 'John', lastName: 'Camp', age: 20}]
getPeople('joHn s') // [  {firstName: 'John', lastName: 'Smith', age: 40}]
```
</details>

<details><summary>Tips</summary>
The task concerns: String.toLowerCase, String.includes, Array.filter
</details>

<details><summary>Solution</summary>
 
```javascript
export function getPeople(phrase) {
  const people = [
    {firstName: 'John', lastName: 'Smith', age: 40},
    {firstName: 'Frank', lastName: 'Camp', age: 30},
    {firstName: 'John', lastName: 'Camp', age: 20}
  ]

  if (!phrase || phrase.length < 3) {
    return [];
  }

  return people.filter(person => `${person.firstName.toLowerCase()} ${person.lastName.toLowerCase()}`.includes(phrase.toLowerCase()))
}
```
</details>

---

### Task 11
Create a function (`getRandomNumber`) which returns a random integer number between range [5, 10].

* The function does not have any argument

<details><summary>Example results</summary>
  
```javascript
getRandomNumber() // 5
getRandomNumber() // 7
getRandomNumber() // 10
```
</details>

<details><summary>Tips</summary>
The task concerns: Math.random, Math.floor
</details>

<details><summary>Solution</summary>
 
```javascript
export function getRandomNumber() {
  return Math.round(5 + (10 - 5) * Math.random());
}
```
</details>

---

### Task 12
Create a function (`mergeAndSortNumberArrays`) which returns merged sorted number array

* The function has infinite arguments
* The arguments are a `Number` arrays, you do not have to check it
* In the result, you have to merge every arrays together in another array and returns it sorted ascending
* The function returns an empty array when it is called without the argument

<details><summary>Example results</summary>
  
```javascript
mergeAndSortNumberArrays() // []
mergeAndSortNumberArrays([]) // [],
mergeAndSortNumberArrays([], []) // []
mergeAndSortNumberArrays([], [2, 1]) // [1, 2]
mergeAndSortNumberArrays([1, 3], [2, 1]) // [1, 1, 2, 3]
```
</details>

<details><summary>Tips</summary>
The task concerns: Array.sort, Array.reduce, rest operator, spread operator
</details>

<details><summary>Solution</summary>
 
```javascript
export function mergeAndSortNumberArrays(...numbers) {
  return numbers.reduce((prev, next) => [...prev, ...next], []).sort((a,b) => a - b);
}
```
</details>

---

### Task 13
Create a function (`hasPermission`) which checks that the user has correct permission 

* The function has 2 arguments
* The first argument is  `String` array which describes permissions that the user has. This argument is required and can not be null or undefined but can be an empty array
* The second argument is a `String` type which describes permission which is required. This argument is optional.
* Available permission code names:
```javascript
const appPermissions = ['P1', 'P2', 'P3', 'P4', 'P5']
```


<details><summary>Example results</summary>
  
```javascript
hasPermission([]) // true
hasPermission([], 'P1') // false
hasPermission(['P2', 'P3'], 'P1') // false
hasPermission(['P2', 'P3'], 'P3') // true
```
</details>

<details><summary>Tips</summary>
The task concerns: Array.some
</details>

<details><summary>Solution</summary>
 
```javascript
export function hasPermission(userPermissions, requiredPermission) {
  if (!requiredPermission) {
    return true;
  }

  if (!userPermissions.length) {
    return false;
  }

  return userPermissions.some(permission => permission === requiredPermission);
}
```
</details>

---

### Task 14
Create a function (`hasPermissions`) which checks that the user has correct permissions

* The function has 2 arguments
* The first argument is  `String` array which describes permissions that the user has. This argument is required and can not be null or undefined but can be an empty array
* The second argument is a `String` array which describes permissions that are required. This argument is optional.
* Available permission code names:
```javascript
const appPermissions = ['P1', 'P2', 'P3', 'P4', 'P5']
```
<details><summary>Example results</summary>
  
```javascript
hasPermissions([]) // true
hasPermissions([], []) // true
hasPermissions([], ['P1']) // false
hasPermissions(['P2', 'P3'], ['P1']) // false
hasPermissions(['P2', 'P3'], ['P3']) // true
hasPermissions(['P2', 'P3'], ['P2', 'P3']) // true
hasPermissions(['P2', 'P4'], ['P2', 'P3']) // false
```
</details>

<details><summary>Tips</summary>
The task concerns: Array.some, Array.every 
</details>

<details><summary>Solution</summary>
 
```javascript
export function hasPermissions(userPermissions, requiredPermissions) {
  if (!requiredPermissions || !requiredPermissions.length) {
    return true;
  }

  if (!userPermissions.length) {
    return false;
  }

  return requiredPermissions.every(requiredPermission => userPermissions.some(permission => permission === requiredPermission));
}
```
</details>
