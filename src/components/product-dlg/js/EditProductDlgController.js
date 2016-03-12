"use strict";

angular.module("project3App").controller("EditProductDlgController", 
	function ProductDlgController($scope, $routeParams, centrisNotify) {

		// $scope.newprod.id = $routeParams.id;

		$scope.onOk = function onOk() {
			//TODO: validation
			
			$scope.$close($scope.newprod);
		};

		$scope.onCancel = function onCancel() {
			$scope.$dismiss();
		};

	});