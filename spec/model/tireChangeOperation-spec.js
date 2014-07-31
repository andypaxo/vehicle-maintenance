describe("Tire change", function () {
	it("should required when due", function () {
		var vehicle = new Vehicle();
		var sut = new TireChangeOperation();

		vehicle.setOdometer(32000);
		
		expect(sut.isDueFor(vehicle)).toBe(true);
	});

	it("should not be required early", function () {
		var vehicle = new Vehicle();
		var sut = new TireChangeOperation();

		vehicle.setOdometer(9000);

		expect(sut.isDueFor(vehicle)).toBe(false);
	});

	it("should reset after being performed", function () {
		var vehicle = new Vehicle();
		var sut = new TireChangeOperation();

		vehicle.setOdometer(32000);
		sut.performOn(vehicle);
		vehicle.setOdometer(35000);

		expect(sut.isDueFor(vehicle)).toBe(false);
	});
});