
"use strict";

angular.module("project3App").controller("SellersController",
function SellersController($scope, AppResource, $location, SellerDlg) {
	// TODO: load data from AppResource! Also, add other methods, such as to
	// add/update sellers etc.
	AppResource.getSellers().success(function getSellers(sellers) {
		$scope.sellers = sellers;
	});

	$scope.selectSeller = function selectSeller(seller) {
		$location.path ("/" + seller.id);
	};	

	$scope.onAddSeller = function onAddSeller() {
		SellerDlg.show().then(function(seller) {
            console.log(seller);
			AppResource.addSeller(seller).success(function(seller) {
				// var newSeller = seller;
				// $scope.sellers.push(seller);
			}).error(function() {
				//TODO: implement error notification
			});
		});
	};

});

