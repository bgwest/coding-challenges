'use strict';

const SpiralMatrix = require('../lib/spiral');

// real tests will be added in the near future -- just getting code up for now

describe('testing spiral.js', () => {
  test('simple test to get travis testing connection setup', () => {
    const SpiralClass = new SpiralMatrix(5);
    expect(SpiralClass.endingInt).toEqual(25);
  });
});
