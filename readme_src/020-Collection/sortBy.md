### _.sortBy

Sorts an array of object based on an object key provided by a parameter (note this is more limited than Underscore).

  ```js
  const fruits = [
    {name:"banana", amount: 2},
    {name:"apple", amount: 4},
    {name:"pineapple", amount: 2},
    {name:"mango", amount: 1}
  ];

  // Underscore
  _.sortBy(fruits, 'name');
  // => [{name:"apple", amount: 4}, {name:"banana", amount: 2}, {name:"mango", amount: 1}, {name:"pineapple", amount: 2}]

  // Native
  const sortBy = (key) => {
    return (a, b) => (a[key] > b[key]) ? 1 : ((b[key] > a[key]) ? -1 : 0);
  };

  // The native sort modifies the array in place. `_.orderBy` and `_.sortBy` do not, so we use `.concat()` to
  // copy the array, then sort.
  fruits.concat().sort(sortBy("name"));
  // => [{name:"apple", amount: 4}, {name:"banana", amount: 2}, {name:"mango", amount: 1}, {name:"pineapple", amount: 2}]
  ```

<!-- caniuse: es6 -->
