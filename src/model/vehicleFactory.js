VehicleFactory = function () {
	var vehiclePrototypes = [
		PetrolVehicle,
		DieselVehicle,
		ElectricVehicle
	];

	this.getAvailableTypes = function () {
		return vehiclePrototypes.map(function (proto) {
			return proto.description;
		});
	};

	var getVehicleType = function (typeName) {
		var proto = vehiclePrototypes.filter(function (proto) {
			return proto.description === typeName;
		})[0];
		if (proto) {
			return proto;
		}
		throw new Error("Do not know vehicle type : " + typeName);
	};

	this.manufacture = function (typeName, make, model, year) {
		var vehicleType = getVehicleType(typeName);
		return new vehicleType(make, model, year);
	};
};