"use strict";

angular.module("project3App").controller("ProductDlgController", 
	function ProductDlgController($scope, $routeParams) {

		// $scope.newprod.id = $routeParams.id;

		$scope.onOk = function onOk() {
			//TODO: validation
			if ($scope.newprod.name.length === 0) {
				//birta validation skilaboð
			}
			$scope.$close($scope.newprod);
		};

		$scope.onCancel = function onCancel() {
			$scope.$dismiss();
		};

	});