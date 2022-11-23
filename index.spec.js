const { sum } = require(".");

describe('sum', () => {
  it('should return 3', () => {
    const a = 1, b = 2;
    const expected = 3;
    const result = sum(a, b);
    expect(result).toEqual(expected);
  })
})
