// Local stand-in for lodash.pick (flat keys only, as drei 9.22.4 uses it).
// Remove with the Phase 2 drei upgrade.
const unsafe = new Set(['__proto__', 'constructor', 'prototype'])

module.exports = function pick(object, ...paths) {
  const result = {}
  if (object == null) return result
  for (const key of paths.flat()) {
    if (!unsafe.has(key) && key in object) result[key] = object[key]
  }
  return result
}
