describe("Vehicle", function () {
	it("can be initialized with make, model and year", function () {
		var sut = new Vehicle("Ford", "Mondeo", 1998);
		expect(sut.make).toBe("Ford");
		expect(sut.model).toBe("Mondeo");
		expect(sut.year).toBe(1998);
	});
});