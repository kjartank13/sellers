"use strict";

angular.module("project3App").controller("SellerDlgController", 
	function SellerDlgController($scope) {
		
		// $scope.seller = {
		// 	name: "Joe Blobson",
		// 	category: "Meth",
		// 	imagePath: ""
		// };

		$scope.onOk = function onOk() {
			//TODO: validation
			if ($scope.seller.name.length === 0) {
				//birta validation skilaboð
			}
			$scope.$close($scope.seller);
		};

		$scope.onCancel = function onCancel() {
			$scope.$dismiss();
		};

	});