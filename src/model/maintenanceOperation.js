MaintenanceOperation = {
	lastPerformedAt : 0,

	performOn : function (vehicle) {
		this.lastPerformedAt = vehicle.getOdometer();
	},

	isDueFor : function (vehicle) {
		return this.lastPerformedAt + this.frequency <= vehicle.getOdometer();
	},

	kmUntilDueFor : function (vehicle) {
		return this.lastPerformedAt + this.frequency - vehicle.getOdometer();
	}
};

