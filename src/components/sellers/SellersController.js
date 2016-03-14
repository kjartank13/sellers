
"use strict";

angular.module("project3App").controller("SellersController",
function SellersController($scope, AppResource, $location, SellerDlg) {

	AppResource.getSellers().success(function getSellers(sellers) {
		$scope.sellers = sellers;
	});

	$scope.selectSeller = function selectSeller(seller) {
		$location.path ("/" + seller.id);
	};	

	$scope.onAddSeller = function onAddSeller() {
		SellerDlg.show().then(function(seller) {
				AppResource.addSeller(seller).success(function(seller) {
			}).error(function() {
			
			});
		});
	};

});

