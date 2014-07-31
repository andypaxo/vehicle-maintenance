Vehicle = function(make, model, year) {
	this.make = make;
	this.model = model;
	this.year = year;
	this.odometer = 0;

	this.setOdometer = function (value) {
		if (isNaN(value) || value < this.odometer)
			throw new Error("Odometer must be set to at least " + this.odometer);
		this.odometer = value;
	};

	this.getOdometer = function () {
		return this.odometer;
	};
};