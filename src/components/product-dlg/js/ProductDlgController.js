"use strict";

angular.module("project3App").controller("ProductDlgController", 
	function ProductDlgController($scope, $routeParams, centrisNotify) {


		$scope.onOk = function onOk() {
			//TODO: validation
			if ($scope.newprod.name === undefined) {
				centrisNotify.error("product-dlg.Messages.EditFailed");
				$scope.$dismiss();
			}else{
				centrisNotify.success("product-dlg.Messages.SaveSucceeded");
				$scope.$close($scope.newprod);
			}
		};

		$scope.onCancel = function onCancel() {
			$scope.$dismiss();
		};

	});