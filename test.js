const { mergeTimeRanges } = require('./mergeTimeRanges');

const demo = [
  [1000, 2000],
  [2500, 4000],
  [3900, 4100],
  [8000, 9000],
  [9050, 9500]
];

console.log('Merged Output:', mergeTimeRanges(demo, 200));
