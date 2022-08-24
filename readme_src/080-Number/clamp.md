### _.clamp

Clamps number within the inclusive lower and upper bounds.

```js
// Lodash
_.clamp(-10, -5, 5);
// => -5

_.clamp(10, -5, 5);
// => 5

_.clamp(10, -5);
// => -5

_.clamp(10, 99);
// => 10

// Native
const clamp = (number, boundOne, boundTwo) => {
  if (!boundTwo) {
    return Math.max(number, boundOne) === boundOne ? number : boundOne;
  } else if (Math.min(number, boundOne) === number) {
    return boundOne;
  } else if (Math.max(number, boundTwo) === number) {
    return boundTwo;
  }
  return number;
};

clamp(-10, -5, 5);
// => -5

clamp(10, -5, 5);
// => 5

clamp(10, -5);
// => -5

clamp(10, 99);
// => 10
```
