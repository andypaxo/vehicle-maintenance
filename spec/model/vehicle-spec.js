describe("Vehicle", function () {
	it("can be initialized with make, model and year", function () {
		var sut = new Vehicle("Ford", "Mondeo", 1998);
		expect(sut.make).toBe("Ford");
		expect(sut.model).toBe("Mondeo");
		expect(sut.year).toBe(1998);
	});

	it("can have the odometer updated", function () {
		var sut = new Vehicle();
		expect(sut.getOdometer()).toBe(0);
		sut.setOdometer(10538);
		expect(sut.getOdometer()).toBe(10538);
	});

	it("cannot have the odometer dialled back", function () {
		var sut = new Vehicle();
		sut.setOdometer(10538);
		expect(function () {
			sut.setOdometer(1024);
		}).toThrow();
		expect(sut.getOdometer()).toBe(10538);
	});

	it("must have the odometer set to a numeric value", function () {
		var sut = new Vehicle();
		expect(function () {
			sut.setOdometer("One hundred and eighty");
		}).toThrow();
		expect(sut.getOdometer()).toBe(0);
	});
});