### _.orderBy

Sorts an array of object based on an object key provided by a parameter (note this is more limited than Lodash).

  ```js
  const fruits = [
    {name:"banana", amount: 2},
    {name:"apple", amount: 4},
    {name:"pineapple", amount: 2},
    {name:"mango", amount: 1}
  ];

  // Lodash
  _.orderBy(fruits, ['name'],['asc']);
  // => [{name:"apple", amount: 4}, {name:"banana", amount: 2}, {name:"mango", amount: 1}, {name:"pineapple", amount: 2}]

  // Native
  const orderBy = (key) => {
    return (a, b) => (a[key] > b[key]) ? 1 : ((b[key] > a[key]) ? -1 : 0);
  };

  // The native sort modifies the array in place. `_.orderBy` and `_.orderBy` do not, so we use `.concat()` to
  // copy the array, then sort.
  fruits.concat().sort(orderBy("name"));
  // => [{name:"apple", amount: 4}, {name:"banana", amount: 2}, {name:"mango", amount: 1}, {name:"pineapple", amount: 2}]
  ```

<!-- caniuse: es6 -->
