"use strict";

describe("SellersDetailsController unit tests", function() {

	beforeEach(module("project3App"));

	var AppResource;
	var centrisNotify;
	var newController;
	var scope;
	var $location;
	var $routeParams;
	var sellerID = 100;

	var testSeller = {
		id: 		100,
		name: 	   "Kjarri",
		category:  "Vefforritun",
		imagePath: "http://i.imgur.com/B7qbFh5.jpg"
	};

	var testProduct = {
			id: "",
			name: "Hattur",
			price: 42,
			quantitySold: 42,
			quantityInStock: 42,
			imagePath: "http://i.imgur.com/B7qbFh5.jpg"
		};

	var testNotify = {
		success: function(string){},
		error: function(string){}
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

	var mockProductDlg = {
		show: function() {
			return {
				then: function(fn){
					fn(testProduct);
				}
			};
		}
	};


	beforeEach(inject(function($rootScope, $controller, $injector, _$location_, _$routeParams_) {
		scope = $rootScope.$new();
		$location = _$location_;
		$routeParams = _$routeParams_;
		$routeParams.id = "1";
		AppResource = $injector.get("AppResource");
		centrisNotify = testNotify;
		newController = $controller("SellerDetailsController", { 
				$scope: scope,
				AppResource: AppResource,
				$location: $location,
				$routeParams: $routeParams,
				EditSellerDlg: mockSellerDlg,
				ProductDlg: mockProductDlg
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


	it ("should call addSellerProduct from onAddProduct", function() {
		spyOn(mockProductDlg, "show").and.callThrough();
		spyOn(AppResource, "addSellerProduct").and.callThrough();
		scope.onAddProduct();
		expect(AppResource.addSellerProduct).toHaveBeenCalledWith(sellerID, testProduct);
	});

	//This test fails. Probably because of test implementation being incorrect.
	it ("should call updateSeller from onEditSeller", function() {
		spyOn(mockSellerDlg, "show").and.callThrough();
		spyOn(AppResource, "updateSeller").and.callThrough();
		scope.onEditSeller();
		expect(AppResource.updateSeller).toHaveBeenCalled();
	});
});

