Garage = function () {
	var vehicles = [];

	this.add = function (vehicle) {
		vehicles.push(vehicle);
	};

	this.remove = function (vehicle) {
		vehicles.splice(vehicles.indexOf(vehicle), 1);
	};

	this.getCars = function () {
		return vehicles;
	};
};