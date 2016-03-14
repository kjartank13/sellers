"use strict";

describe("EditProductDlgController testing", function() {
	beforeEach(module("project3App"));

	var scope;
	var centrisNotify;
	var newController;
	var $location;
	var $routeParams;
	var AppResource;
	var errorMessage = "product-dlg.Messages.EditFailed";
	var successMessage = "product-dlg.Messages.SaveSucceeded";
	var testNotify = {
		success: function(string){},
		error: function(string){}
	};




	beforeEach(inject(function($rootScope, $controller, $injector, _$routeParams_, _$location_) {
		scope = $rootScope.$new();
		AppResource = $injector.get("AppResource");
		centrisNotify = testNotify;
		$location = _$location_;
		$routeParams = _$routeParams_;
		$routeParams.id = "1";
		scope.$close = function(product) {};
		newController = $controller("EditProductDlgController", {
				$scope: scope,
				centrisNotify: centrisNotify,
				$location: $location,
				$routeParams: $routeParams,
				AppResource: AppResource
		});
	}));

	it ("should have defined function onOk", function() {
		expect(scope.onOk).toBeDefined();
	});

	it ("should post an error message and not close the dialog when product is empty", function() {
		scope.newprod = {
			
		};
		spyOn(centrisNotify, "error");
		spyOn(scope, "$close");
		scope.onOk();
		expect(centrisNotify.error).toHaveBeenCalledWith(errorMessage);
		expect(scope.$close).not.toHaveBeenCalled();
	});

	it ("should post an error message and not close the dialog when price is not a number", function() {
		scope.newprod = {
			id: "",
			name: "Hattur",
			price: "Vefforritun",
			quantitySold: 42,
			quantityInStock: 42,
			imagePath: "http://i.imgur.com/B7qbFh5.jpg"
		};
		spyOn(centrisNotify, "error");
		spyOn(scope, "$close");
		scope.onOk();
		expect(centrisNotify.error).toHaveBeenCalledWith(errorMessage);
		expect(scope.$close).not.toHaveBeenCalled();
	});

	it ("should post a success message, and call scope.$close (with product as parameter) when product is valid", function() {
		scope.newprod = {
			id: "",
			name: "Hattur",
			price: 42,
			quantitySold: 42,
			quantityInStock: 42,
			imagePath: "http://i.imgur.com/B7qbFh5.jpg"
		};
		spyOn(centrisNotify, "success");
		spyOn(scope, "$close");
		scope.onOk();
		expect(centrisNotify.success).toHaveBeenCalledWith(successMessage);
		expect(scope.$close).toHaveBeenCalledWith(scope.newprod);
	});

});