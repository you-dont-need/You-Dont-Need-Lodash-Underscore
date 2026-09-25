const { shuffle } = require('../'); // 从根目录导入

describe('shuffle function', () => {
  test('返回数组包含所有原始元素', () => {
    const arr = [1, 2, 3, 4, 5];
    const shuffled = shuffle(arr);
    
    // 排序后应该相等
    expect(shuffled.sort()).toEqual(arr.sort());
  });

  test('产生不同的排序结果', () => {
    const arr = [1, 2, 3];
    const results = new Set();
    
    // 运行100次获取不同排列
    for (let i = 0; i < 100; i++) {
      results.add(JSON.stringify(shuffle(arr)));
    }
    
    // 应该有多种排列（至少2种）
    expect(results.size).toBeGreaterThan(1);
  });

  test('处理空数组', () => {
    expect(shuffle([])).toEqual([]);
  });

  test('处理单个元素数组', () => {
    expect(shuffle([42])).toEqual([42]);
  });
});