'use strict';
const assert = require('assert');
const _ = require('lodash');

describe('code snippet example', () => {

  it('compact', () => {
    assert.deepEqual(
      _.compact([0, 1, false, 2, '', 3]),
      [0, 1, false, 2, '', 3].filter(v => v)
    )
  })

  it('concat', () => {
    const lodashArray = [1]
    const lodashResult = _.concat(lodashArray, 2, [3], [[4]])

    const nativehArray = [1]
    const nativeResult = nativehArray.concat(2, [3], [[4]])

    assert.deepEqual(lodashResult, nativeResult)
  })

  it('pick', () => {
    var object = { 'a': 1, 'b': '2', 'c': 3 };
    function pick(object, paths) {
      const obj = {};
      for (const path of paths) {
        if (object[path]) {
          obj[path] = object[path]
        }
      }
      return obj;
    }
    assert.deepEqual(
      _.pick(object, ['a', 'c']),
      pick(object, ['a', 'c'])
    )
  })

  it('pickBy', () => {
    var object = { 'a': 1, 'b': null, 'c': 3, 'd': false, 'e': undefined, 'f': '', 'g': 0 };
    function pickBy(object) {
      const obj = {};
      for (const key in object) {
        if (object[key]) {
          obj[key] = object[key];
        }
      }
      return obj;
    }
    assert.deepEqual(
      _.pickBy(object),
      pickBy(object)
    )
  })

  describe('fill', () => {
    it("_.fill(array, 'a')", () => {
      var array = [1, 2, 3]
      assert.deepEqual(
        _.fill(array, 'a'),
        array.fill('a')
      )
    })
    it("_.fill(Array(3), 2)", () => {
      assert.deepEqual(
        _.fill(Array(3), 2),
        Array(3).fill(2)
      )
    })

    it("_.fill([4, 6, 8, 10], '*', 1, 3)", () => {
      assert.deepEqual(
        _.fill([4, 6, 8, 10], '*', 1, 3),
        [4, 6, 8, 10].fill('*', 1, 3)
      )
    })
  })
  describe('chunk', () => {
    const chunk = (input, size) => {
      return input.reduce((arr, item, idx) => {
        return idx % size === 0
          ? [...arr, [item]]
          : [...arr.slice(0, -1), [...arr.slice(-1)[0], item]];
      }, []);
    };
    it("_.chunk(['a', 'b', 'c', 'd'], 2);", () => {
      assert.deepEqual(
        _.chunk(['a', 'b', 'c', 'd'], 2),
        chunk(['a', 'b', 'c', 'd'], 2)
      )
    })
    it("_.chunk(['a', 'b', 'c', 'd'], 3);", () => {
      assert.deepEqual(
        _.chunk(['a', 'b', 'c', 'd'], 3),
        chunk(['a', 'b', 'c', 'd'], 3)
      )
    })
  })
  describe('times', () => {
    const times = (n, fn = (_, x) => x) => {
      return Array.from(Array(n), fn)
    };
    it("_.times(10);", () => {
      assert.deepEqual(
        _.times(10),
        times(10)
      )
    })
    it("_.times(10, x => x + 1);", () => {
      assert.deepEqual(
        _.times(10, x => x + 1),
        times(10, (_, x) => x + 1)
      )
    })
  })

  describe('assign', () => {
    function Foo() {
      this.c = 3;
    }
    function Bar() {
      this.e = 5;
    }
    Foo.prototype.d = 4;
    Bar.prototype.f = 6;
    const assign = (target, ...sources) => Object.assign(target, ...sources);
    it("_.assign({}, new Foo, new Bar);", () => {
      assert.deepEqual(
        _.assign({}, new Foo, new Bar),
        assign({}, new Foo, new Bar)
      )
    })
    it("_.assign(new Foo, new Bar);", () => {
      assert.deepEqual(
        _.assign(new Foo, new Bar),
        assign(new Foo, new Bar)
      )
    })
  })
  describe('extend', () => {
    function Foo() {
      this.c = 3;
    }
    function Bar() {
      this.e = 5;
    }
    Foo.prototype.d = 4;
    Bar.prototype.f = 6;

    const extend = (target, ...sources) => {
      const length = sources.length;

      if (length < 1 || target == null) return target;
      for (let i = 0; i < length; i++) {
        const source = sources[i];

        for (const key in source) {
          target[key] = source[key];
        }
      }
      return target;
    };

    it("_.extend({}, new Foo, new Bar);", () => {
      assert.deepEqual(
        _.extend({}, new Foo, new Bar),
        extend({}, new Foo, new Bar)
      )
    })
    it("_.extend(new Foo, new Bar);", () => {
      assert.deepEqual(
        _.extend(new Foo, new Bar),
        extend(new Foo, new Bar)
      )
    })
  })
  describe('isEmpty', () => {
    const isEmpty = (obj) => {
      return (obj ? [Object, Array].includes(obj.constructor) && !Object.entries(obj).length : true);
    };
    it ('_.isEmpty(null)', () => {
      assert.equal(
        _.isEmpty(null),
        isEmpty(null)
      )
    })
    it ("_.isEmpty('')", () => {
      assert.equal(
        _.isEmpty(''),
        isEmpty('')
      )
    })
    it ("_.isEmpty({})", () => {
      assert.equal(
        _.isEmpty({}),
        isEmpty({})
      )
    })
    it ("_.isEmpty([])", () => {
      assert.equal(
        _.isEmpty([]),
        isEmpty([])
      )
    })
    it ("_.isEmpty({a: '1'})", () => {
      assert.equal(
        _.isEmpty({a: '1'}),
        isEmpty({a: '1'})
      )
    })
  })
  describe('isInteger', () => {
    it('_.isInteger(3)', () => {
       assert.equal(
        _.isInteger(3),
        Number.isInteger(3)
      )
    })
    it('_.isInteger("3")', () => {
       assert.equal(
        _.isInteger("3"),
        Number.isInteger("3")
       )
    })
    it('_.isInteger(2.9)', () => {
       assert.equal(
        _.isInteger(2.9),
        Number.isInteger(2.9)
       )
    })
    it('_.isInteger(NaN)', () => {
       assert.equal(
        _.isInteger(NaN),
        Number.isInteger(NaN)
       )
    })
  })
  describe('get', () => {
    const get = (obj, path, defaultValue) => {
      const travel = regexp =>
        String.prototype.split
          .call(path, regexp)
          .filter(Boolean)
          .reduce((res, key) => (res !== null && res !== undefined ? res[key] : res), obj);
      const result = travel(/[,[\]]+?/) || travel(/[,[\].]+?/);
      return result === undefined || result === obj ? defaultValue : result;
    };
    var obj = {
      aa: [{ b: { c: 0 }, 1: 0 }],
      dd: { ee: { ff: 2 } },
      gg: { h: 2 },
      "gg.h": 1,
      "kk.ll": { "mm.n": [3, 4, { "oo.p": 5 }] }
    };

    it ("should handle falsey values", () => {
      var val = _.get(obj, 'aa[0].b.c', 1)
      assert.strictEqual(val, get(obj, 'aa[0].b.c', 1))
      assert.notEqual(val, 1)
    })
    it ("should handle just bracket notation", () => {
      var val = _.get(obj, 'aa[0][1]', 1)
      assert.strictEqual(val, get(obj, 'aa[0][1]', 1))
      assert.notEqual(val, 1)
    })
    it ("should handle just period notation", () => {
      var val = _.get(obj, 'dd.ee.ff', 1)
      assert.strictEqual(val, get(obj, 'dd.ee.ff', 1))
      assert.notEqual(val, 1)
    })
    it ("should handle neither notation", () => {
      var val = _.get(obj, 'aa', 1)
      assert.deepEqual(val, get(obj, 'aa', 1))
      assert.notEqual(val, 1)
    })
    it ("should handle both notation", () => {
      var val = _.get(obj, 'aa[0].b.c', 1)
      assert.strictEqual(val, get(obj, 'aa[0].b.c', 1))
      assert.notEqual(val, 1)
    })
    it ("should handle array path", () => {
      var val = _.get(obj, ['aa', [0], 'b', 'c'], 1)
      assert.strictEqual(val, get(obj, ['aa', [0], 'b', 'c'], 1))
      assert.notEqual(val, 1)
    })
    it ("should handle undefined without default", () => {
      var val = _.get(obj, 'dd.b')
      assert.strictEqual(val, get(obj, 'dd.b'))
    })
    it ("should handle undefined with default", () => {
      var val = _.get(obj, 'dd.b', 1)
      assert.strictEqual(val, get(obj, 'dd.b', 1))
    })
    it ("should handle deep undefined without default", () => {
      var val = _.get(obj, 'dd.b.c')
      assert.strictEqual(val, get(obj, 'dd.b.c'))
    })
    it ("should handle deep undefined with default", () => {
      var val = _.get(obj, 'dd.b.c', 1)
      assert.strictEqual(val, get(obj, 'dd.b.c', 1))
      assert.strictEqual(val, 1);
    })
    it ("should handle null default", () => {
      var val = _.get(obj, 'dd.b', null)
      assert.strictEqual(val, get(obj, 'dd.b', null))
      assert.strictEqual(val, null);
    })
    it ("should handle empty path", () => {
      var val = _.get(obj, '', 1)
      assert.strictEqual(val, get(obj, '', 1))
      assert.notEqual(val, obj);
    })
    it ("should handle undefined obj", () => {
      var val = _.get(undefined, 'aa')
      assert.strictEqual(val, get(undefined, 'aa'))
    })
    it ("should handle path contains a key with dots", () => {
      var val = _.get(obj, 'gg.h')
      assert.strictEqual(val, get(obj, 'gg.h'))
      assert.strictEqual(val, 1)
    })
    it ("should handle array path of keys with dots", () => {
      var val = _.get(obj, ["kk.ll", "mm.n", 0, "oo.p"])
      assert.strictEqual(
        val,
        get(obj, ["kk.ll", "mm.n", 0, "oo.p"])
      );
    })
  })
  describe('split', () => {
    const source = 'a-b-c';
    const separator = '-';
    const limit = 2;
    it(`_.split("${source}", "${separator}")`, () => {
      assert.deepEqual(
        _.split(source, separator),
        source.split(separator)
      );
    })
    it(`_.split("${source}", "${separator}", ${limit})`, () => {
      assert.deepEqual(
        _.split(source, separator, limit),
        source.split(separator, limit)
      );
    })
  })
  describe('inRange', () => {
    const inRange = (num, init, final) => {
      if(final === undefined){
        final = init;
        init = 0;
      }
      return (num >= Math.min(init, final) && num < Math.max(init, final));
    }
    
    it('_.inRange(3, 2, 4)', () => {
      assert.equal(
        _.inRange(3, 2, 4),
        inRange(3, 2, 4)
      )
    });
 
    it('_.inRange(4, 8)', () => {
      assert.equal(
        _.inRange(4, 8),
        inRange(4, 8)
      )
    });
    
    it('_.inRange(4, 2)', () => {
      assert.equal(
        _.inRange(4, 2),
        inRange(4, 2)
      )
    });
    
    it('_.inRange(2, 2)', () => {
      assert.equal(
        _.inRange(2, 2),
        inRange(2, 2)
      )
    });
    
    it('_.inRange(1.2, 2)', () => {
      assert.equal(
        _.inRange(1.2, 2),
        inRange(1.2, 2)
      )
    });
    
    it('_.inRange(5.2, 4)', () => {
      assert.equal(
        _.inRange(5.2, 4),
        inRange(5.2, 4)
      )
    });
    
    it('_.inRange(-3, -2, -6)', () => {
      assert.equal(
        _.inRange(-3, -2, -6),
        inRange(-3, -2, -6)
      )
    });

    it('_.inRange(1, 1, 5)', () => {
      assert.equal(
        _.inRange(1, 1, 5),
        inRange(1, 1, 5)
      )
    });
  })

  describe('random', () => {
    const random = (a = 1, b = 0) => {
      const lower = Math.min(a, b);
      const upper = Math.max(a, b);
      return lower + Math.random() * (upper - lower);
    };

    const array = Array(1000).fill(0);

    it('random() in range [0, 1]', () => {
      assert.ok(array.every(() => {
        const randomValue = random();
        return randomValue >= 0 && randomValue <= 1;
      }));
    });

    it('random() is float', () => {
      assert.ok(array.some(() => {
        const randomValue = random();
        return !Number.isInteger(randomValue);
      }));
    });

    it('random(5) in range [0, 5]', () => {
      assert.ok(array.every(() => {
        const randomValue = random(5);
        return randomValue >= 0 && randomValue <= 5;
      }));
    });

    it('random(5) is float', () => {
      assert.ok(array.some(() => {
        const randomValue = random(5);
        return !Number.isInteger(randomValue);
      }));
    });

    it('random(-10) supports negative', () => {
      assert.ok(array.every(() => {
        const randomValue = random(-10);
        return randomValue <= 0;
      }));
    });

    it('random(10, 5) swap the bounds', () => {
      assert.ok(array.every(() => {
        const randomValue = random(10, 5);
        return randomValue >= 5 && randomValue <= 10;
      }));
    });

    it('random(-10, 10) supports negative', () => {
      assert.ok(array.some(() => {
        const randomValue = random(-10, 10);
        return randomValue > 0;
      }));
      assert.ok(array.some(() => {
        const randomValue = random(-10, 10);
        return randomValue < 0;
      }));
    });

    it('random(-10, 10) in range [-10, 10]', () => {
      assert.ok(array.every(() => {
        const randomValue = random(-10, 10);
        return randomValue >= -10 && randomValue <= 10;
      }));
    });

    it('random(1.2, 5.2) supports floats', () => {
      assert.ok(array.every(() => {
        const randomValue = random(1.2, 5.2);
        return randomValue >= 1.2 && randomValue <= 5.2;
      }));
    });

    it('random(100000, 100001) in range [100000, 100001]', () => {
      assert.ok(array.every(() => {
        const randomValue = random(100000, 100001);
        return randomValue >= 100000 && randomValue <= 100001;
      }));
    });
  });

  describe('randomInt', () => {
    const randomInt = (a = 1, b = 0) => {
      const lower = Math.ceil(Math.min(a, b));
      const upper = Math.floor(Math.max(a, b));
      return Math.floor(lower + Math.random() * (upper - lower + 1))
    };

    const array = Array(1000).fill(0);

    const uniq = (arr) => [...new Set(arr)];

    it('randomInt() return `0` or `1`', () => {
      const randoms = uniq(array.map(() => {
        return randomInt();
      })).sort();
      assert.deepStrictEqual(randoms, [0, 1]);
    });

    it('randomInt(5) in range [0, 5]', () => {
      assert.ok(array.every(() => {
        const randomValue = randomInt(5);
        return randomValue >= 0 && randomValue <= 5;
      }));
    });

    it('randomInt(5) is integer', () => {
      assert.ok(array.some(() => {
        const randomValue = randomInt(5);
        return Number.isInteger(randomValue);
      }));
    });

    it('randomInt(-10) supports negative', () => {
      assert.ok(array.every(() => {
        const randomValue = randomInt(-10);
        return randomValue <= 0;
      }));
    });

    it('randomInt(10, 5) swap the bounds', () => {
      assert.ok(array.every(() => {
        const randomValue = randomInt(10, 5);
        return randomValue >= 5 && randomValue <= 10;
      }));
    });

    it('randomInt(-10, 10) supports negative', () => {
      assert.ok(array.some(() => {
        const randomValue = randomInt(-10, 10);
        return randomValue > 0;
      }));
      assert.ok(array.some(() => {
        const randomValue = randomInt(-10, 10);
        return randomValue < 0;
      }));
    });

    it('randomInt(-10, 10) in range [-10, 10]', () => {
      assert.ok(array.every(() => {
        const randomValue = randomInt(-10, 10);
        return randomValue >= -10 && randomValue <= 10;
      }));
    });

    it('randomInt(1.2, 5.2) supports floats', () => {
      assert.ok(array.every(() => {
        const randomValue = randomInt(1.2, 5.2);
        return randomValue >= 2 && randomValue <= 5;
      }));
    });

    it('randomInt(100000, 100001) return `100000` or `100001`', () => {
      const randoms = uniq(array.map(() => {
        return randomInt(100000, 100001);
      })).sort();
      assert.deepStrictEqual(randoms, [100000, 100001]);
    });
  });
  
  describe('clamp', () => {
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
    it('clamp(-10, -5, 5) returns lower bound if number is less than it', () => {
      assert.deepStrictEqual(clamp(-10, -5, 5), -5);
    });
    it('clamp(10, -5, 5) returns upper bound if number is greater than it', () => {
      assert.deepStrictEqual(clamp(10, -5, 5), 5);
    });
    it('clamp(10, -5) treats second parameter as upper bound', () => {
      assert.deepStrictEqual(clamp(10, -5), -5);
    });
  });

  describe('padStart', () => {
    it('_.padStart("123", 5, "0")', () => {
      assert.equal(
        _.padStart("123", 5, '0'),
        "123".padStart(5, '0')
      );
    })

    it('_.padStart("123", 6, "_-")', () => {
      assert.equal(
        _.padStart("123", 6, '_-'),
        "123".padStart(6, '_-')
      );
    })
  })

  describe('padEnd', () => {
    it('_.padEnd("123", 5, "0")', () => {
      assert.equal(
        _.padEnd("123", 5, '0'),
        "123".padEnd(5, '0')
      );
    })

    it('_.padEnd("123", 6, "_-")', () => {
      assert.equal(
        _.padEnd("123", 6, '_-'),
        "123".padEnd(6, '_-')
      );
    })
  })

  describe('upperFirst', () => {
    const upperFirst = (string) => {
      return string ? string.charAt(0).toUpperCase() + string.slice(1) : ''
    }

    it('_.upperFirst("george")', () => {
      assert.equal(
        _.upperFirst('george'),
        upperFirst('george')
      )
    })

    it('_.upperFirst(null)', () => {
      assert.equal(
        _.upperFirst(null),
        upperFirst(null)
      )
    })

    it('_.upperFirst("")', () => {
      assert.equal(
        _.upperFirst(''),
        upperFirst('')
      )
    })
  })



  describe('isString', () => {
    function isString(str) {
      if (str && typeof str.valueOf() === "string") {
        return true
      }
      return false
    }

    it('_.isString(abc)', () => {
      assert.deepEqual(_.isString("abc"),
        isString("abc"))
    });

    it('_.isString(1)', () => {
      assert.deepEqual(_.isString(1),
        isString(1))
    });


  });


  describe('isUndefined', () => {
    const definedVariable = 1; //defined variable (will return false)
    let undefinedVariable; //undefined variable (will return true)
    
    it('_.isUndefined(definedVariable)', () => {
      assert.equal(_.isUndefined(definedVariable),
        (definedVariable === undefined))
    });

    it('_(definedVariable).isUndefined()', () => {
      assert.equal(_(definedVariable).isUndefined(),
        (definedVariable === undefined))
    });

    it('_.isUndefined(undefinedVariable)', () => {
      assert.equal(_.isUndefined(undefinedVariable),
        (undefinedVariable === undefined))
    });

    it('_(undefinedVariable).isUndefined()', () => {
      assert.equal(_(undefinedVariable).isUndefined(),
        (undefinedVariable === undefined))
    });

  });

  describe('flatten', () => {

    it('_.flatten(twoLayerArray)', () => {
      const testArray = [1,2[3,4]];
      assert.deepEqual(_.flatten(testArray),
        testArray.reduce((a,b) => a.concat(b), []))
    });

    it('_.flatten(multiLayerArray)', () => {
      const testArray = [1,2[3,4,[5,6,[7,8]]]];
      assert.deepEqual(_.flatten(testArray),
        testArray.reduce((a,b) => a.concat(b), []))
    });

  });

  describe('forEach', () => {
    it('_.forEach(array)', () => {
      const testArray = [1,2,3,4];
      
      let lodashOutput = []
      let nativeOutput = []

      _.forEach(testArray, element => {
        lodashOutput.push(element);
      });
      testArray.forEach(element => {
        nativeOutput.push(element);
      });

      assert.deepEqual(lodashOutput,nativeOutput);
    });

    it('_.forEach(object)', () => {
      const testObject = {
        'one':1,
        'two':2,
        'three':3,
        'four':4,
      }

      let lodashOutput = []
      let nativeOutput = []

      _.forEach(testObject, value => {
        lodashOutput.push(value);
      });

      Object.entries(testObject).forEach(([key,value]) => {
        nativeOutput.push(value);
      });

      assert.deepEqual(lodashOutput,nativeOutput);
    });
  });

  describe('startsWith', () => {
    it(`_.startsWith('abc', 'a')`, () => {
      assert.deepEqual(
        _.startsWith('abc', 'a'),
        'abc'.startsWith('a')
      );
    });
    it(`_.startsWith('abc', 'b')`, () => {
      assert.deepEqual(
        _.startsWith('abc', 'b'),
        'abc'.startsWith('b')
      );
    });
    it(`_.startsWith('abc', 'b', 1)`, () => {
      assert.deepEqual(
        _.startsWith('abc', 'b', 1),
        'abc'.startsWith('b', 1)
      );
    });
  });

  describe('endsWith', () => {
    it(`_.endsWith('abc', 'c')`, () => {
      assert.deepEqual(
        _.endsWith('abc', 'c'),
        'abc'.endsWith('c')
      );
    });
    it(`_.endsWith('abc', 'b')`, () => {
      assert.deepEqual(
        _.endsWith('abc', 'b'),
        'abc'.endsWith('b')
      );
    });
    it(`_.endsWith('abc', 'b', 2)`, () => {
      assert.deepEqual(
        _.endsWith('abc', 'b', 2),
        'abc'.endsWith('b', 2)
      );
    });
  });

  describe('throttle', () => {
    function throttle(func, timeFrame) {
      var lastTime = 0;
      return function () {
        var now = new Date();
        if (now - lastTime >= timeFrame) {
          func();
          lastTime = now;
        }
      };
    }

    it('throttle is not called more than once within timeframe', () => {
      let callCount = 0;
      const fn = throttle(() => callCount++, 100);

      fn();
      fn();
      fn();

      assert.equal(callCount, 1);
    });
  })


  describe('isFunction', () => {
    function isFunction(func) {
      if (func && typeof func === "function") {
        return true
      }
      return false
    }

    it('_.isFunction(setTimeout)', () => {
      assert.deepEqual(_.isFunction(setTimeout),
        isFunction(setTimeout))
    });

    it('_.isFunction(1)', () => {
      assert.deepEqual(_.isFunction(1),
        isFunction(1))
    });

    it('_.isFunction(abc)', () => {
      assert.deepEqual(_.isFunction("abc"),
        isFunction("abc"))
    });


  });
});
