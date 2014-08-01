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
	};

	var addVehicleToPage = function (vehicle) {
		var element = $("#vehicle-panel").clone().removeAttr("id");
		element.find(".vehicle-make").text(vehicle.make);
		element.find(".vehicle-model").text(vehicle.model);
		element.find(".vehicle-year").text(vehicle.year);
		updateVehicleDescription(vehicle, element);

		$("#garage").append(element);

		element.find(".vehicle-update-odometer").on("click", function () {
			$("#update-odometer-button").off("click").on("click", function () {
				var newReading = Number.parseInt($("#update-odometer-km").val());
				vehicle.setOdometer(newReading);
				updateVehicleDescription(vehicle, element);
			})
		});

		element.find(".remove-vehicle-button").on("click", function () {
			element.remove();
		});

		var searcher = new google.search.ImageSearch();
		searcher.setSearchCompleteCallback(null, function (result) {
			if (searcher.results.length)
				element.find(".vehicle-image").css("background-image", "url(" + searcher.results[0].unescapedUrl + ")");
		});
		searcher.setResultSetSize(1);
		searcher.execute(vehicle.year + " " + vehicle.make + " " + vehicle.model);
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