# javascript-tasks
This repository contains JavaScript tasks which help during learning and revision.

### Task 1
Create a function (`getMaxNumber`) which has infinite arguments and returns the max number. The argument should be a `Number` type but you have to check it. 

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

```
</details>

---

### Task 2
Create a function (`isEven`) that has one argument and checks that number is even. The argument should be a `Number` type but you have to check it.

* The function returns `null` when it is called without the argument.
* When argument is not valid `Number` type, returns `null`

<details><summary>Example results</summary>
  
```javascript
isEven() // null
isEven('') // null
isEven(false) // null
isEven(NaN) // null
isEven(15) // false
isEven('15') // false
isEven(6) // true
```
</details>

<details><summary>Tips</summary>
The task concerns: typeof, modulus operator
</details>

<details><summary>Solution</summary>
 
```javascript

```
</details>

---

### Task 3
Using the function from Task 2 (`isEven`), create another function (`getEvenNumbers`) that has one argument and returns even numbers. The argument should be a `Number` type array but you have to check it.

* The function returns `No even numbers.` when it is called without the argument.
* If the argument is an empty array or does not have any valid number, returns `No even numbers.`
* If the argument contains even numbers, it is returned as text, according to the pattern `Even numbers: <evenNumbers>`, even numbers are split by a comma with extra space

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

```
</details>

---

### Task 4
Create a function (`getPersonsFullNames`) that has one argument which is an object array. Every object contains `firstName` and `lastName` keys. The keys always have value as `String` type. The function returns a formatted `String` array.

* In the result, firstName and lastName key values are combined together, separated by whitespace
* If `firstName` or `lastName` have extra whitespace on the left or right text side, you have to remove it
* You do not have to check that object keys exist and have value.
* The function argument is required, you do not have to check it

<details><summary>Example results</summary>
  
```javascript
getPersonsFullNames([]) // []
getPersonsFullNames([{firstName: 'John', lastName: 'Smith'}, {firstName: 'Frank', lastName: 'Camp'}] ) // ['John Smith', 'Frank Camp']
getPersonsFullNames([{firstName: 'John   ', lastName: 'Smith'}, {firstName: 'Frank', lastName: '  Camp'}] ) // ['John Smith', 'Frank Camp']
```
</details>

<details><summary>Tips</summary>
The task concerns: template literals, Array.map, String.trim
</details>

<details><summary>Solution</summary>
 
```javascript

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

```
</details>

---

### Task 6
Create a function (`sumCart`) which returns value of products in the cart. The function has one argument which is object array.

* The argument is required
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

```
</details>

---

### Task 7
Create a function (`formatCreditCardNumber`), which adds extra whitespaces, according to the pattern `<4 digits> <4 digits> <4 digits> <4 digits>`. The function has an argument which is `String` type.

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

```
</details>

---

### Task 8
Create a function (`isPalindrome`), which has an argument as `String` type. The function checks that the passed argument is a palindrome. 

* The function returns `false` when it is called without the argument
* You do not have to check that the argument is correct `String` type
* The size of the characters does not matter

> A palindrome is a phrase which reads the same backward as forward.

<details><summary>Example results</summary>
  
```javascript
isPalindrome() // false
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

```
</details>

---

### Task 9
Create a function (`getProductPrice`) which has one argument as `Number` type. The argument is a product `id`. 

* The argument is required, you do not have to check it
* The function looks for in the object array correct product and return price
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

```
</details>

---

### Task 
Create a function () 

* 

<details><summary>Example results</summary>
  
```javascript

```
</details>

<details><summary>Tips</summary>
The task concerns: 
</details>

<details><summary>Solution</summary>
 
```javascript

```
</details>
