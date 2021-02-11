const { test, expect } = require("@jest/globals");

const uppercase = (str, callback) => {
  callback(str.toUpperCase());
};

test('test callback from uppercas dunction', (done) => {
  const callback = (data) => {
    expect(data).toBe('JOHNE')
  }
  uppercase('johne', callback)
  done();
})