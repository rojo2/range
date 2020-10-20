import { expect } from 'chai'
import range from './range.js'

describe('Range', () => {
  it('should extrapolate different values', () => {
    expect(range.from(0, 50, 0)).to.be.equal(1)
    expect(range.from(25, 50, 0)).to.be.equal(0.5)
    expect(range.from(50, 50, 0)).to.be.equal(0)

    expect(range.from(0, 0, 50)).to.be.equal(0)
    expect(range.from(25, 0, 50)).to.be.equal(0.5)
    expect(range.from(50, 0, 50)).to.be.equal(1)

    expect(range.from(0, -Infinity, Infinity)).to.be.NaN
  })

  it('should interpolate linearly different values', () => {
    expect(range.to(1.0, 50, 0)).to.be.equal(0)
    expect(range.to(0.5, 50, 0)).to.be.equal(25)
    expect(range.to(0.0, 50, 0)).to.be.equal(50)

    expect(range.to(1.0, 0, 50)).to.be.equal(50)
    expect(range.to(0.5, 0, 50)).to.be.equal(25)
    expect(range.to(0.0, 0, 50)).to.be.equal(0)

    expect(range.to(0.5, -Infinity, Infinity)).to.be.NaN
  })

  it('should clamp between different ranges', () => {
    expect(range.clamp(250, 0, 10)).to.be.equal(10)
    expect(range.clamp(-250, -10, 0)).to.be.equal(-10)
    expect(range.clamp(Infinity, 0, 10)).to.be.equal(10)
    expect(range.clamp(-Infinity, 0, 10)).to.be.equal(0)
    expect(range.clamp(0, -10, 10)).to.be.equal(0)
    expect(range.clamp(5, 0, 10)).to.be.equal(5)
    expect(range.clamp(NaN, 0, 10)).to.be.NaN
  })

  it('should get the upper part of a range', () => {
    for (let i = -100; i < 100; i++) {
      expect(range.upper(i, 10)).to.be.equal(i > 10 ? i : 10)
    }
  })

  it('should get the lower part of a range', () => {
    for (let i = -100; i < 100; i++) {
      expect(range.lower(i, 10)).to.be.equal(i < 10 ? i : 10)
    }
  })
})
