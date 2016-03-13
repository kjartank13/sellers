
"use strict";

angular.module("project3App").controller("SellersController",
function SellersController($scope, AppResource, $location, SellerDlg) {
	// TODO: load data from AppResource! Also, add other methods, such as to
	// add/update sellers etc.
	var sellers;

	AppResource.getSellers().success(function getSellers(sellers) {
		$scope.sellers = sellers;
		sellers = sellers;
	});

	$scope.selectSeller = function selectSeller(seller) {
		$location.path ("/" + seller.id);
	};	

	$scope.onAddSeller = function onAddSeller() {
		SellerDlg.show().then(function(seller) {
			AppResource.addSeller(seller).success(function(seller) {
				//centrisNotify.success("sellers.Messages.SaveSucceeded");
				// var newSeller = seller;
				// $scope.sellers.push(seller);
			}).error(function() {
				//centrisNotify.error("sellers.Messages.SaveFailed");
				//TODO: implement error notification
			});
		});
	};

});

