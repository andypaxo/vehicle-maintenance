TireChangeOperation = function () {
	this.name = "Change tires";
	this.frequency = 20000;
};

TireChangeOperation.prototype = MaintenanceOperation;