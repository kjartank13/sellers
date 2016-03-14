"use strict";

angular.module("project3App").controller("SellerDlgController", 
	function SellerDlgController($scope, centrisNotify) {


		$scope.onOk = function onOk() {
			//TODO: validation
			if ($scope.seller === undefined || $scope.seller.name === undefined || $scope.seller.category === undefined || !isNaN($scope.seller.name) || !isNaN($scope.seller.category)) {
				centrisNotify.error("sellers.Messages.SaveFailed");
				// $scope.$dismiss();
			}else{
				centrisNotify.success("sellers.Messages.SaveSucceeded");
				$scope.$close($scope.seller);
			}
		};

		$scope.onCancel = function onCancel() {
			$scope.$dismiss();
		};

	});