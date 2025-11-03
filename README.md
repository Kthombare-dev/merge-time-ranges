Merge Time Ranges (Node.js)

This module merges time ranges where intervals overlap or have a small enough gap to be treated as continuous. It follows the assignment rules: [start, end) timestamps in ms, merge if overlapping or if the gap ≤ threshold.

Function
mergeTimeRanges(ranges, threshold)


ranges: Array of [start, end) timestamps

threshold: Max gap (ms) allowed to still merge

returns: Sorted, non-overlapping merged ranges

Quick Example

Input:

[
  [1000, 2000],
  [2500, 4000],
  [3900, 4100],
  [8000, 9000],
  [9050, 9500]
]


Threshold: 200

Output:

[
  [1000, 2000],
  [2500, 4100],
  [8000, 9500]
]

Run
node test.js

Files
mergeTimeRanges.js   // Module
test.js              // Quick test
README.md
