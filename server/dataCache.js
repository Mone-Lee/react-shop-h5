const LRU = require('lru-cache');

const dataCache = new LRU({
  max: 1000,
  maxAge: 1000 * 60 * 15, // 单位为毫秒，这里设置为十五分钟
})

module.exports = dataCache;