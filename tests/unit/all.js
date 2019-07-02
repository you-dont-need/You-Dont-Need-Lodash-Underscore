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
    var object = { 'a': 1, 'b': null, 'c': 3, 'd': false, 'e': undefined };
    function pickBy(object) {
      const obj = {};
      for (const key in object) {
        if (object[key] !== null && object[key] !== false && object[key] !== undefined) {
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
      let source = [];
      sources.forEach(src => {
        source = source.concat([src, Object.getPrototypeOf(src)])
      })
      return Object.assign(target, ...source)
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
  describe('get', () => {
    // add array notation
    const get = (obj, path, defaultValue = null) =>
      String.prototype.split.call(path, /[,[\].]+?/)
        .filter(Boolean)
        .reduce((a, c) => (Object.hasOwnProperty.call(a,c) ? a[c] : defaultValue), obj)

    var obj = { aa: [{ b: { c: 0 }, 1: 0 }], dd: { ee: { ff: 2 } } };

    it ("should handle falsey values", () => {
      var val = _.get(obj, 'aa[0].b.c', 1)
      assert.equal(val, get(obj, 'aa[0].b.c', 1))
      assert.notEqual(val, 1)
    })
    it ("should handle just bracket notation", () => {
      var val = _.get(obj, 'aa[0][1]', 1)
      assert.equal(val, get(obj, 'aa[0][1]', 1))
      assert.notEqual(val, 1)
    })
    it ("should handle just period notation", () => {
      var val = _.get(obj, 'dd.ee.ff', 1)
      assert.equal(val, get(obj, 'dd.ee.ff', 1))
      assert.notEqual(val, 1)
    })
    it ("should handle neither notation", () => {
      var val = _.get(obj, 'aa', 1)
      assert.deepEqual(val, get(obj, 'aa', 1))
      assert.notEqual(val, 1)
    })
    it ("should handle both notation", () => {
      var val = _.get(obj, 'aa[0].b.c', 1)
      assert.equal(val, get(obj, 'aa[0].b.c', 1))
      assert.notEqual(val, 1)
    })
    it ("should handle array path", () => {
      var val = _.get(obj, ['aa', [0], 'b', 'c'], 1)
      assert.equal(val, get(obj, ['aa', [0], 'b', 'c'], 1))
      assert.notEqual(val, 1)
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
    
    const random = (...args) => {
      let [lower, upper, isFloat] = [0, 1, true];
      if (args.length === 1) {
        upper = args[0];
        isFloat = args[0] % 1;
      } else if (args.length === 2) {
        if (typeof args[1] === 'boolean') {
          [upper, isFloat] = args;
        } else {
          [lower, upper] = args;
          isFloat = args[0] % 1 || args[1] % 1;
        }
      } else if (args.length === 3) {
        [lower, upper, isFloat] = args;
      }
      // if the bounds are float, but isFloat === false
      if (!isFloat) {
        lower = Math.ceil(lower);
        upper = Math.floor(upper);
      }
      const randomNum = lower + Math.random() * (upper - lower);
      return !isFloat ? Math.round(randomNum) : randomNum;
    };

    // it's random, we have to test many times
    const everyAssert = (testFunc, iterNum = 100) => Array(iterNum).fill(void 0).every(testFunc);

    it('_.random(0, 5)', () => {
      assert(everyAssert(() => {
        const randomValue = random(0, 5);
        return randomValue >= 0 && randomValue <= 5 && Number.isInteger(randomValue);
      }));
    });

    it('_.random(5)', () => {
      assert(everyAssert(() => {
        const randomValue = random(5);
        return randomValue >= 0 && randomValue <= 5 && Number.isInteger(randomValue);
      }));
    });

    it('_.random(5, true)', () => {
      assert(everyAssert(() => {
        const randomValue = random(5, true);
        return randomValue >= 0 && randomValue <= 5;
      }));
    });

    it('_.random(1.2, 5.2)', () => {
      assert(everyAssert(() => {
        const randomValue = random(1.2, 5.2);
        return randomValue >= 1.2 && randomValue <= 5.2;
      }));
    });
    it('_.random()', () => {
      assert(everyAssert(() => {
        const randomValue = random();
        return randomValue >= 0 && randomValue <= 1;
      }));
    });
    it('_.random(1, 5, true)', () => {
      assert(everyAssert(() => {
        const randomValue = random(1, 5, true);
        return randomValue >= 1 && randomValue <= 5;
      }));
    });
    it('_.random(1.2, 5.2, false)', () => {
      assert(everyAssert(() => {
        const randomValue = random(1.2, 5.2, false);
        return randomValue >= 1.2 && randomValue <= 5.2 && Number.isInteger(randomValue);
      }));
    });
    it('_.random(100000, 100001)', () => {
      assert(everyAssert(() => {
        const randomValue = random(100000, 100001);
        return randomValue >= 100000 && randomValue <= 100001 && Number.isInteger(randomValue);
      }));
    });
    it('_.random(100000, 100000.99)', () => {
      assert(everyAssert(() => {
        const randomValue = random(100000, 100000.99);
        return randomValue >= 100000 && randomValue <= 100000.99;
      }));
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
})
