"use strict";

describe("EditSellerDlgController testing", function() {

	beforeEach(module("project3App"));

	var scope;
	var centrisNotify;
	var newController;
	var AppResource;
	var $routeParams;
	var errorMessage = "seller-dlg.Messages.SaveFailed";
	var successMessage = "seller-dlg.Messages.SaveSucceeded";
	var testNotify = {
		success: function(string){},
		error: function(string){}
	};


	beforeEach(inject(function($rootScope, $controller, $injector, _$routeParams_) {
		scope = $rootScope.$new();
		$routeParams = _$routeParams_;
		$routeParams.id = "1";
		centrisNotify = testNotify;
		AppResource = $injector.get("AppResource");
		scope.$close = function(seller) {};
		newController = $controller("EditSellerDlgController", { 
				$scope: scope,
				$routeParams: $routeParams,
				AppResource: AppResource,
				centrisNotify: centrisNotify
			});

	}));


	it ("should have defined function onOk", function() {
		expect(scope.onOk).toBeDefined();
	});

	it ("should have defined scope.seller", function() {
		expect(scope.seller).toBeDefined();
	});

	it ("should post an error message, and not close the dialog when seller is empty", function() {
		scope.seller = {
			id: "",
			name: "",
			category: "",
			imagePath: ""
		};
		spyOn(centrisNotify, "error");
		spyOn(scope, "$close");
		scope.onOk();
		expect(centrisNotify.error).toHaveBeenCalledWith(errorMessage);
		expect(scope.$close).not.toHaveBeenCalled();
	});

	it ("should post an error message, and not close the dialog when seller name is a number", function() {
		scope.seller = {
			id: "",
			name: 1,
			category: "",
			imagePath: ""
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


});