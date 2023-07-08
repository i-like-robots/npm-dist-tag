const { describe, it } = require('node:test')
const assert = require('node:assert')
const subject = require('../lib/getHighestVersion')

const registryData = {
  versions: {
    '4.0.0': {},
    '4.0.1': {},
    '4.0.2': {},
    '4.1.0': {},
    '4.1.1': {},
    '5.0.0-rc.1': {},
    '5.0.0-rc.2': {},
    '5.0.0': {},
    '5.0.1': {},
    '5.0.2': {},
    '5.0.3': {},
    '5.0.4': {},
    '5.1.0': {},
    '5.2.0': {},
    '6.0.0-beta.0': {},
    '5.3.0': {},
    '5.3.1': {},
    '6.0.0-beta.1': {},
    '5.3.2': {},
    '6.0.0-beta.2': {},
    '6.0.0-beta.3': {}
  }
}

describe('lib/getHighestVersion', () => {
  it('returns the highest non-rerelease version', () => {
    const result = subject(registryData)
    assert.equal(result, '5.3.2')
  })
})
