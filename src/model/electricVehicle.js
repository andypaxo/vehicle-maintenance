ElectricVehicle = function () {
	Vehicle.apply(this, arguments);

	this.operations.push(new ReplaceBatteryOperation());
};
