"use strict";

describe("SellersDetailsController unit tests", function() {

	beforeEach(module("project3App"));

	var AppResource;
	var centrisNotify;
	var newController;
	var scope;
	var $location;
	var $routeParams;

	beforeEach(inject(function($rootScope, $controller, $injector, _$location_, _$routeParams_) {
		scope = $rootScope.$new();
		$location = _$location_;
		$routeParams = _$routeParams_;
		$routeParams.id = "1";
		AppResource = $injector.get("AppResource");
		centrisNotify = $injector.get("centrisNotify");
		newController = $controller("SellerDetailsController", { 
				$scope: scope,
				AppResource: AppResource,
				$location: $location,
				$routeParams: $routeParams
			});

		
	}));
    
    it ("should successfully get current seller", function () {
        console.log(scope.currSeller);
        expect(scope.currSeller).toBeDefined();
    }); // Virkar ekki


	it ("should successfully get list of products", function () {
        expect(scope.allProducts).toBeDefined();
	});

	it ("should successfully get list of best products", function () {
		expect(scope.bestProducts).toBeDefined();
	});

	it ("should successfully get current seller", function () {
		expect(scope.currSeller).toBeDefined();
	});

	it ("should define onAddProduct function", function() { 
		expect(scope.onAddProduct).toBeDefined();
	});

	it ("should have defined onEditSeller function", function() {
		expect(scope.onEditSeller).toBeDefined();
	});

	it ("should have defined onEditProduct function", function() {
		expect(scope.onEditProduct).toBeDefined();
	});
});

