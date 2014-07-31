TireChangeOperation = function () {
	this.name = "Change tires";
	this.frequency = 50000;
};

TireChangeOperation.prototype = MaintenanceOperation;