### _.throttle
Create a new function that limits calls to _func_ to once every given timeframe.

  ```js
  function throttle(func, timeFrame) {
    var lastTime = 0;
    return function (...args) {
        var now = new Date();
        if (now - lastTime >= timeFrame) {
            func(...args);
            lastTime = now;
        }
    };
  }

  // Avoid running the same function twice within the specified timeframe.
  jQuery(window).on('resize', throttle(calculateLayout, 150));

  ```
#### Browser Support for `throttle`

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
 :-: | :-: | :-: | :-: | :-: | :-: |
  5.0 ✔  |  12.0 ✔ | 3.0 ✔ |  9.0 ✔ |  10.5 ✔ |  4.0 ✔  |

