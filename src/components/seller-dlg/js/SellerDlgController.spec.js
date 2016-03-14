"use strict";

describe("SellerDlgController testing", function() {

	beforeEach(module("project3App"));

	var scope;
	var centrisNotify;
	var newController;
	var errorMessage = "sellers.Messages.SaveFailed";
	var successMessage = "sellers.Messages.SaveSucceeded";
	var testNotify = {
		success: function(string){},
		error: function(string){}
	};


	beforeEach(inject(function($rootScope, $controller, $injector) {
		scope = $rootScope.$new();
		centrisNotify = testNotify;
		scope.$close = function(seller) {};
		scope.$dismiss = function() {};
		newController = $controller("SellerDlgController", { 
				$scope: scope,
				centrisNotify: centrisNotify
			});

	}));


	it ("should have defined function onOk", function() {
		expect(scope.onOk).toBeDefined();
	});

	it ("should have defined function onCancel", function() {
		expect(scope.onCancel).toBeDefined();
	});

	it ("should post an error message and not close the dialog when seller is empty", function() {
		scope.seller = {
			
		};
		spyOn(centrisNotify, "error");
		spyOn(scope, "$close");
		scope.onOk();
		expect(centrisNotify.error).toHaveBeenCalledWith(errorMessage);
		expect(scope.$close).not.toHaveBeenCalled();
	});

	it ("should post an error message and not close the dialog when seller name is a number", function() {
		scope.seller = {
			id: "",
			name: 1,
			category: "Vefforritun",
			imagePath: "http://i.imgur.com/B7qbFh5.jpg"
		};
		spyOn(centrisNotify, "error");
		spyOn(scope, "$close");
		scope.onOk();
		expect(centrisNotify.error).toHaveBeenCalledWith(errorMessage);
		expect(scope.$close).not.toHaveBeenCalled();
	});

	it ("should post a success message, and call scope.$close (with seller as parameter) when seller is valid", function() {
		scope.seller = {
			id: "",
			name: "Kjarri",
			category: "Vefforritun",
			imagePath: "http://i.imgur.com/B7qbFh5.jpg"
		};
		spyOn(centrisNotify, "success");
		spyOn(scope, "$close");
		scope.onOk();
		expect(centrisNotify.success).toHaveBeenCalledWith(successMessage);
		expect(scope.$close).toHaveBeenCalledWith(scope.seller);
	});


	it ("should call the $dismiss function in onCancel", function() {
		spyOn(scope, "$dismiss");
		scope.onCancel();
		expect(scope.$dismiss).toHaveBeenCalled();
	});

});