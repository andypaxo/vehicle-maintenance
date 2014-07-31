describe("Electric vehicle", function () {
	it("should get constructed just like a base vehicle", function () {
		var sut = new ElectricVehicle("Tesla", "Model S", 2012);
		expect(sut.make).toBe("Tesla");
	});
});