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
      assert.equal(result, 'maintenance')
    })
  })

  describe('with pre-release version', () => {
    it('returns "pre-release" tag', () => {
      const result = subject('1.0.0-beta.1', '2.0.0')
      assert.equal(result, 'pre-release')
    })
  })
})
