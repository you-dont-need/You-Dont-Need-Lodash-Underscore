### _.random

Produces a random number between the inclusive lower and upper bounds. If only one argument is provided a number between 0 and the given number is returned. If floating is true, or either lower or upper are floats, a floating-point number is returned instead of an integer.

  ```js
    // Lodash
    _.random(0, 5);
    // => an integer between 0 and 5

    _.random(5);
    // => also an integer between 0 and 5

    _.random(5, true);
    // => a floating-point number between 0 and 5

    _.random(1.2, 5.2);
    // => a floating-point number between 1.2 and 5.2

    //Native ES6
    const random = (a = 1, b = 0) => {
      const lower = Math.min(a, b);
      const upper = Math.max(a, b);
      return lower + Math.random() * (upper - lower);
    };

    const randomInt = (a = 1, b = 0) => {
      const lower = Math.ceil(Math.min(a, b));
      const upper = Math.floor(Math.max(a, b));
      return Math.floor(lower + Math.random() * (upper - lower + 1))
    };

    random();
    // => a floating-point number between 0 and 1

    random(5);
    // => a floating-point number between 0 and 5

    random(0, 5);
    // => also a floating-point number between 0 and 5

    random(1.2, 5.2);
    // => a floating-point number between 1.2 and 5.2

    randomInt();
    // => just 0 or 1

    randomInt(5);
    // => an integer between 0 and 5

    randomInt(0, 5);
    // => also an integer between 0 and 5

    randomInt(1.2, 5.2);
    // => an integer between 2 and 5

  ```
