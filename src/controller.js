$(function () {
	var factory = new VehicleFactory();

	var setup = function () {
		var options = factory.getAvailableTypes().map(function (type) {
			return $("<option/>").val(type).text(type);
		});
		$("#add-vehicle-type").append(options);
	};

	var updateVehicleDescription = function (vehicle, element) {
		element.find(".vehicle-odometer").text(vehicle.getOdometer());
		vehicle.getOperations().forEach(function (operation) {
			var needsMaintenance = vehicle.requiresOperation(operation);
			element.find("[data-type='"+operation+"'] .maintenance-ok").
				toggle(!needsMaintenance).
				text("Due in " + vehicle.kmUntilDue(operation) + " km");
			element.find("[data-type='"+operation+"'] .maintenance-due").toggle(needsMaintenance);
		});
	};

	var addVehicleToPage = function (vehicle) {
		var element = $("#vehicle-panel").clone().removeAttr("id");
		element.find(".vehicle-make").text(vehicle.make);
		element.find(".vehicle-model").text(vehicle.model);
		element.find(".vehicle-year").text(vehicle.year);

		var maintenanceElements = vehicle.getOperations().map(function (operation) {
			var maintenanceElement = $("#vehicle-maintenance").
				clone().
				removeAttr("id").
				attr("data-type", operation);
			maintenanceElement.find(".maintenance-description").text(operation);
			maintenanceElement.find(".vehicle-perform-operation").on("click", function () {
				vehicle.performOperation(operation);
				updateVehicleDescription(vehicle, element);
			});
			return maintenanceElement;
		});
		element.find(".vehicle-maintenance-panel").append(maintenanceElements);

		element.find(".vehicle-update-odometer").on("click", function () {
			$("#update-odometer-button").off("click").on("click", function () {
				var newReading = Number.parseInt($("#update-odometer-km").val());
				vehicle.setOdometer(newReading);
				updateVehicleDescription(vehicle, element);
				$("#update-odometer-modal input").val("");
			})
		});

		element.find(".remove-vehicle-button").on("click", function () {
			element.remove();
		});

		updateVehicleDescription(vehicle, element);
		$("#garage").append(element);

		var searcher = new google.search.ImageSearch();
		searcher.setSearchCompleteCallback(null, function (result) {
			if (searcher.results.length)
				element.find(".vehicle-image").css("background-image", "url(" + searcher.results[0].unescapedUrl + ")");
		});
		searcher.setResultSetSize(1);
		searcher.execute(vehicle.year + " " + vehicle.make + " " + vehicle.model);

		$("#add-vehicle-modal input").val("");
	};

	$("#add-vehicle-button").on("click", function (e) {
		e.preventDefault();
		var make = $("#add-vehicle-make").val();
		var model = $("#add-vehicle-model").val();
		var year = Number.parseInt($("#add-vehicle-year").val());
		var type = $("#add-vehicle-type").val();
		var vehicle = factory.manufacture(type, make, model, year);
		addVehicleToPage(vehicle);
	});

	setup();

	// TEMP ///////////////////////

	addVehicleToPage(new PetrolVehicle("Mitsubishi", "RVR", 2012));
});