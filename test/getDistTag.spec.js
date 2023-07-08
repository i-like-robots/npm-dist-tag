const { describe, it } = require('node:test')
const assert = require('node:assert')
const subject = require('../lib/getDistTag')

describe('lib/getDistTag', () => {
  describe('with highest version', () => {
    it('returns "latest" tag', () => {
      const result = subject('1.0.0', '0.1.0')
      assert.equal(result, 'latest')
    })
  })

  describe('with lower version', () => {
    it('returns "maintenance" tag', () => {
      const result = subject('1.0.1', '2.0.0')
      assert.match(result, /maintenance/)
    })

    it('prefixes "maintenance" tag with major version', () => {
      const result = subject('1.0.1', '2.0.0')
      assert.match(result, /v1-/)
    })
  })

  describe('with pre-release version', () => {
    it('returns "next" tag', () => {
      const result = subject('3.0.0-beta.1', '2.0.0')
      assert.equal(result, 'next')
    })
  })
})
