const range = require("../index.js");

describe("range", function() {
	it("should convert from and to different values", function() {
    expect(range.from(0, 50, 0)).to.be.equal(1);
    expect(range.from(25, 50, 0)).to.be.equal(0.5);
    expect(range.from(50, 50, 0)).to.be.equal(0);

    expect(range.from(0, 0, 50)).to.be.equal(0);
    expect(range.from(25, 0, 50)).to.be.equal(0.5);
    expect(range.from(50, 0, 50)).to.be.equal(1);

    expect(range.from(0, -Infinity, Infinity)).to.be.NaN;

    expect(range.to(1.0, 50, 0)).to.be.equal(0);
    expect(range.to(0.5, 50, 0)).to.be.equal(25);
    expect(range.to(0.0, 50, 0)).to.be.equal(50);

    expect(range.to(1.0, 0, 50)).to.be.equal(50);
    expect(range.to(0.5, 0, 50)).to.be.equal(25);
    expect(range.to(0.0, 0, 50)).to.be.equal(0);

    expect(range.to(0.5, -Infinity, Infinity)).to.be.NaN;
	});
});
