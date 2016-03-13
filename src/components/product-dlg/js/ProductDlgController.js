"use strict";

angular.module("project3App").controller("ProductDlgController", 
	function ProductDlgController($scope, $routeParams, centrisNotify) {


		$scope.onOk = function onOk() {
			//TODO: validation
			if ($scope.newprod === undefined || $scope.newprod.name === undefined || isNaN($scope.newprod.price) || isNaN($scope.newprod.quantitySold) || isNaN($scope.newprod.quantityInStock)) {
				centrisNotify.error("product-dlg.Messages.SaveFailed");
				// $scope.$dismiss();
			}else{
				centrisNotify.success("product-dlg.Messages.SaveSucceeded");
				$scope.$close($scope.newprod);
			}
		};

		$scope.onCancel = function onCancel() {
			$scope.$dismiss();
		};

	});