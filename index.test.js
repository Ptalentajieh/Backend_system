const randomnum = require('./index')

test('generates a random number between 1 and 50', () => {
    const result = randomnum()
    expect(result).toBeGreaterThanOrEqual(1)
    expect(result).toBeLessThanOrEqual(50)
})