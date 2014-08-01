PetrolVehicle = function () {
	Vehicle.apply(this, arguments);

	this.operations.push(new ChangeOilOperation());
	this.operations.push(new ChangeSparkPlugsOperation());
};

PetrolVehicle.description = "Petrol";
