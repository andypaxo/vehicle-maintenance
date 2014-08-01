describe("Vehicle factory", function () {
	it("should know about some car types", function () {
		var sut = new VehicleFactory();
		expect(sut.getAvailableTypes()).toContain("Electric");
	});

	it("should create a car", function () {
		var sut = new VehicleFactory();
		var result = sut.manufacture("Petrol", "Chevrolet", "Lumina", 1999);
		expect(result.model).toBe("Lumina");
	});
});