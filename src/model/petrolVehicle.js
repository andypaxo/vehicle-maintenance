PetrolVehicle = function () {
	Vehicle.apply(this, arguments);

	this.operations.push(new ChangeOilOperation());
};

PetrolVehicle.description = "Petrol";
