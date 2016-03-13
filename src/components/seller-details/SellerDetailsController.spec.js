"use strict";

describe("SellersDetailsController unit tests", function() {

	beforeEach(module("project3App"));

	var AppResource;
	var newController;
	var scope;
	var $location;

	beforeEach(inject(function($rootScope, $controller, $injector, _$location_) {
		scope = $rootScope.$new();
		$location = _$location_;
		AppResource = $injector.get("AppResource");
		newController = $controller("SellerDetailsController", { 
				$scope: scope,
				AppResource: AppResource
			});

		
	}));

	it ("should successfully get list of products", function () {
			expect(scope.allProducts).toBeDefined();
		});

	it ("should define onAddProduct function", function() { 
			expect(scope.onAddProduct).toBeDefined();
		});


});
