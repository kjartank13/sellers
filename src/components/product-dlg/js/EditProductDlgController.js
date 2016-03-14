"use strict";

angular.module("project3App").controller("EditProductDlgController", 
	function EditProductDlgController($scope, centrisNotify, $location, $routeParams, AppResource) {
        var sellerID = Number($routeParams.id);
        $scope.newprod = $location.search().product;

		$scope.onOk = function onOk() {
			//TODO: validation
			if ($scope.newprod === undefined || $scope.newprod.name === undefined || $scope.newprod.price === undefined || $scope.newprod.quantitySold === undefined || $scope.newprod.quantityInStock === undefined)
			{	
				centrisNotify.error("product-dlg.Messages.EditFailed");
			}
			else if (isNaN($scope.newprod.price) || isNaN($scope.newprod.quantitySold) || isNaN($scope.newprod.quantityInStock))
			{
				centrisNotify.error("product-dlg.Messages.EditFailed");
			}
			else
			{
				centrisNotify.success("product-dlg.Messages.SaveSucceeded");
				$scope.$close($scope.newprod);
			}
		};

	});