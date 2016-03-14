"use strict";

describe("SellersController unit tests", function() {

	beforeEach(module("project3App"));

	var AppResource;
	var newController;
	var scope;
	var $location;
	var testSeller = {
		id: 		100,
		name: 	   "Kjarri",
		category:  "Vefforritun",
		imagePath: "http://i.imgur.com/B7qbFh5.jpg"
	};


	var mockSellerDlg = {
		show: function() {
			return {
				then: function(fn){
					fn(testSeller);
				}
			};
		}
	};

	beforeEach(inject(function($rootScope, $controller, $injector, _$location_) {
		scope = $rootScope.$new();
		$location = _$location_;
		AppResource = $injector.get("AppResource");
		newController = $controller("SellersController", { 
				$scope: scope,
				AppResource: AppResource,
				$location: $location,
				SellerDlg: mockSellerDlg
			});

	}));


	it ("should successfully get list of sellers", function () {
		expect(scope.sellers).toBeDefined();
	});

	it ("should define selectSeller function", function() {
		expect(scope.selectSeller).toBeDefined();
	});
	
	it ("should define onAddSeller function", function() { 
		expect(scope.onAddSeller).toBeDefined();
	});

	it ("should navigate to <location>/<id>", function() {
		spyOn($location, "path");
		scope.selectSeller(testSeller);
		expect($location.path).toHaveBeenCalledWith("/" + testSeller.id);
	});

	it ("should call addSeller, with testSeller as parameter, from onAddSeller", function() {
		// console.log(mockSellerDlg.show());
		spyOn(mockSellerDlg, "show").and.callThrough();
		spyOn(AppResource, "addSeller").and.callThrough();
		scope.onAddSeller();
		expect(AppResource.addSeller).toHaveBeenCalledWith(testSeller);
		
	});


});