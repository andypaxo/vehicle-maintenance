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

	this.operations = [
		new TireChangeOperation()
	];

	this.findOperation = function (nameOfOperation) {
		var result = this.operations.filter(function (operation) {
			return operation.name == nameOfOperation;
		})[0];
		if (!result)
			throw new Error("This vehicle does not require the maintenance operation : " + nameOfOperation);
		return result;
	};

	this.getOperations = function () {
		return this.operations.map(function (operation) {
			return operation.name;
		});
	};

	this.performOperation = function (nameOfOperation) {
		this.findOperation(nameOfOperation).performOn(this);
	};

	this.requiresOperation = function (nameOfOperation) {
		var operation = this.findOperation(nameOfOperation);
		return operation.isDueFor(this);
	};
};