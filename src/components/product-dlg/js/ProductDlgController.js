"use strict";

angular.module("project3App").controller("ProductDlgController", 
	function ProductDlgController($scope, $routeParams, centrisNotify) {


		$scope.onOk = function onOk() {
			//TODO: validation
			if ($scope.newprod.name.length === 0) {
				
			}
			$scope.$close($scope.newprod);
		};

		$scope.onCancel = function onCancel() {
			$scope.$dismiss();
		};

	});