/**
 * Merge system activity time ranges. Two ranges get merged if they overlap
 * OR if the gap between them is small enough (<= threshold).
 *
 * Example: 
 * [1000, 2000] and [2050, 3000] with threshold 100 → merged into [1000, 3000]
 *
 * @param {Array<[number, number]>} ranges - List of [start, end) timestamps
 * @param {number} threshold - Allowed gap (ms) to still consider ranges continuous
 * @returns {Array<[number, number]>}
 */
function mergeTimeRanges(ranges, threshold) {
  if (!Array.isArray(ranges) || ranges.length === 0) return [];

  // Step 1: Normalize & sort by start time (so we can scan left-to-right)
  const sorted = ranges
    .map(([start, end]) => [start, end])  // clone to avoid mutating user input
    .sort((a, b) => a[0] - b[0]);

  const merged = [];
  let active = sorted[0];

  // Helper to check if next range should stick with the current active block
  const shouldMerge = (current, next) => {
    const [cStart, cEnd] = current;
    const [nStart] = next;
    const gap = nStart - cEnd;

    return nStart <= cEnd || gap <= threshold;
  };

  for (let i = 1; i < sorted.length; i++) {
    const nextRange = sorted[i];

    if (shouldMerge(active, nextRange)) {
      // Expand the active range to include the new one
      active[1] = Math.max(active[1], nextRange[1]);
    } else {
      // This block is done. Store it and start a new one.
      merged.push(active);
      active = nextRange;
    }
  }

  // Push the final accumulated range
  merged.push(active);

  return merged;
}

module.exports = { mergeTimeRanges };
