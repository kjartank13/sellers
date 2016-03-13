"use strict";

describe("SellersController unit tests", function() {

	beforeEach(module("project3App"));

	var AppResource;
	var newController;
	var scope;
	var $location;

	beforeEach(inject(function($rootScope, $controller, $injector, _$location_) {
		scope = $rootScope.$new();
		$location = _$location_;
		AppResource = $injector.get("AppResource");
		newController = $controller("SellersController", { 
				$scope: scope,
				AppResource: AppResource
			});

		
	}));

	it ("should successfully get list of sellers", function () {
			expect(scope.sellers).toBeDefined();
		});

	it ("should define onAddSeller function", function() { 
			expect(scope.onAddSeller).toBeDefined();
		});

});

