/**
 * Shuffles array using Fisher-Yates algorithm
 * @param {Array} array - Input array
 * @returns {Array} Shuffled array
 */
function shuffle(array) {
  // 1. 创建数组副本（避免修改原数组）
  const result = [...array];
  
  // 2. 从后向前遍历数组
  for (let i = result.length - 1; i > 0; i--) {
    // 3. 生成随机索引（0 到 i 之间）
    const j = Math.floor(Math.random() * (i + 1));
    
    // 4. ES6 解构交换元素
    [result[i], result[j]] = [result[j], result[i]];
  }
  
  // 5. 返回洗牌后的数组
  return result;
}

// 必须这样导出！
module.exports = { shuffle };