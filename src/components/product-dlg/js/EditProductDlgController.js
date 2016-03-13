"use strict";

angular.module("project3App").controller("EditProductDlgController", 
	function ProductDlgController($scope, centrisNotify) {


		$scope.onOk = function onOk() {
			//TODO: validation
			if ($scope.newprod.name === undefined || $scope.newprod.price === undefined)
			{	
				centrisNotify.error("product-dlg.Messages.SaveFailed");
			}
			else
			{
				centrisNotify.successWithParam("product-dlg.Messages.SaveSucceeded");
				$scope.$close($scope.newprod);
			}
		};

		// $scope.onCancel = function onCancel() {
		// 	$scope.$dismiss();
		// };

	});