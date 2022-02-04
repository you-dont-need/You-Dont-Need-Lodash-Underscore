### _.inRange
Checks if n is between start and up to, but not including, end. If end is not specified, it's set to start with start then set to 0. If start is greater than end the params are swapped to support negative ranges.

  ```js
    // Lodash
    _.inRange(3, 2, 4);
    // output: true
    _.inRange(-3, -2, -6);
    // output: true

    //Native
    const inRange = (num, init, final) => {
      if(final === undefined){
        final = init;
        init = 0;
      }
      return (num >= Math.min(init, final) && num < Math.max(init, final));
    }

    //Native
    const inRange = (num, a, b=0) => (Math.min(a,b) <= num && num < Math.max(a,b));

    inRange(3, 2, 4);
    // output: true
    inRange(-3, -2, -6);
    // output: true
  ```

  #### Browser Support for `Math.min() and Math.max()`

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: | :-: |
✔  |  ✔  |  ✔  |  ✔  |  ✔  |  ✔  |

**[⬆ back to top](#quick-links)**
