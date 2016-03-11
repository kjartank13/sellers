
"use strict";

angular.module("project3App").controller("SellersController",
function SellersController($scope, AppResource, $location) {
	// TODO: load data from AppResource! Also, add other methods, such as to
	// add/update sellers etc.
	AppResource.getSellers().success(function getSellers(sellers) {
		$scope.sellers = sellers;
	});

	$scope.selectSeller = function selectSeller(seller) {
		$location.path ("/" + seller.id);
	};	

});

