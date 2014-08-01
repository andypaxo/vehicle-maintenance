describe("Garage", function () {
	it("should list added cars", function () {
		var sut = new Garage();
		var car = new DieselVehicle("Volkswagen", "Golf TDI", 1998);
		sut.add(car);
		expect(sut.getCars()).toContain(car);
	});

	it("should remove added cars", function () {
		var sut = new Garage();
		var car = new DieselVehicle("Volkswagen", "Golf TDI", 1998);
		var van = new PetrolVehicle("Ford", "Transit", 1995);
		sut.add(car);
		sut.add(van);
		sut.remove(van);
		expect(sut.getCars()).toContain(car);
		expect(sut.getCars()).not.toContain(van);
	});
});