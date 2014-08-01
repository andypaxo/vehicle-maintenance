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

	it("must need its tires changed every so often", function () {
		var sut = new Vehicle();
		expect(sut.getOperations()).toContain("Change tires");
	});

	it("must know when its tires need changing", function () {
		var sut = new Vehicle();
		sut.setOdometer(45000);
		expect(sut.kmUntilDue("Change tires")).toBe(5000);
	});

	it("must know when its tires need changing next, after they've been done", function () {
		var sut = new Vehicle();
		var sut = new Vehicle();
		sut.setOdometer(45000);
		sut.performOperation("Change tires");
		sut.setOdometer(55000);
		expect(sut.kmUntilDue("Change tires")).toBe(40000);
	});

	it("must know if its tires need changing", function () {
		var sut = new Vehicle();
		sut.setOdometer(190000);
		expect(sut.requiresOperation("Change tires")).toBe(true);
	});

	it("must not affect other vehicles", function () {
		var sut1 = new Vehicle();
		var sut2 = new Vehicle();

		sut1.setOdometer(659877);
		sut2.setOdometer(565656);
		sut2.performOperation("Change tires");


		expect(sut1.requiresOperation("Change tires")).toBe(true);
		expect(sut2.requiresOperation("Change tires")).toBe(false);
	});
});