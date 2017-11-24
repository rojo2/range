describe("clamp", function() {
	it("should clamp values between min and max", function() {
		expect(clamp(10,5,20)).to.be.equal(10);
		expect(clamp(5,10,20)).to.be.equal(5);
		expect(clamp(50,5,20)).to.be.equal(20);
	});
});
