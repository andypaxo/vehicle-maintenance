$(function () {
	$("#add-vehicle-details").on("submit", function (e) {
		e.preventDefault();
		var make = $("#add-vehicle-make").val();
		var model = $("#add-vehicle-model").val();
		var year = Number.parseInt($("#add-vehicle-year").val());
		var type = $("#add-vehicle-type").val();
		alert(year + " " + make + " " + model);
	});
});