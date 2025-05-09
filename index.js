'use strict'

module.exports = (key) => {
  return {
    capture: require('./lib/capture')(key)
  }
}
