### _.pull

Removes all provided values from the given array using strict equality for comparisons, i.e. ===.

  ```js
  // Lodash
  const array = [1, 2, 3, 1, 2, 3];
  _.pull(array, 2, 3);
  console.log(array); // output: [1, 1]
  ```

  ```js
  // Native JS
  const array = [1, 2, 3, 1, 2, 3];
  function pull(arr, ...removeList){
      var removeSet = new Set(removeList)
      return arr.filter(function(el){
          return !removeSet.has(el)
      })
  }
  console.log(pull(array, 2, 3)); // output: [1, 1]
  console.log(array); // still [1, 2, 3, 1, 2, 3]. This is not in place, unlike lodash!
  ```

  ```ts
  // TypeScript
  const array = [1, 2, 3, 1, 2, 3];
  const pull = <T extends unknown>(sourceArray: T[], ...removeList: T[]): T[] => {
    const removeSet = new Set(removeList);
    return sourceArray.filter(el => !removeSet.has(el));
  };
  console.log(pull(array, 2, 3)); // output: [1, 1]
  console.log(array); // still [1, 2, 3, 1, 2, 3]. This is not in place, unlike lodash!
  ```

<!-- caniuse: es6 -->

#### Browser Support for `Set.prototype.has()`

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image] |
:-: | :-: | :-: | :-: | :-: | :-: |
38 ✔ | 12 ✔ | 13 ✔ | 11 ✔ | 25 ✔ | 8 ✔ |
