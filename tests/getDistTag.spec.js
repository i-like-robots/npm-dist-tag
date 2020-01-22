const subject = require('../lib/getDistTag')

describe('lib/getDistTag', () => {
  describe('with highest version', () => {
    it('returns "latest" tag', () => {
      const result = subject('1.0.0', '0.1.0')
      expect(result).toBe('latest')
    })
  })

  describe('with lower version', () => {
    it('returns "maintenance" tag', () => {
      const result = subject('1.0.1', '2.0.0')
      expect(result).toBe('maintenance')
    })
  })

  describe('with pre-release version', () => {
    it('returns "pre-release" tag', () => {
      const result = subject('1.0.0-beta.1', '2.0.0')
      expect(result).toBe('pre-release')
    })
  })
})
