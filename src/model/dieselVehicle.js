DieselVehicle = function () {
	Vehicle.apply(this, arguments);

	this.operations.push(new ChangeOilOperation());
};

DieselVehicle.description = "Diesel";