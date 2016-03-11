"use strict";

angular.module("project3App").controller("SellerDlgController", 
	function($scope, $entity) {
		if ($entity) {
			//Editing
			$scope.model = $entity;
		}
		else {
			$scope.model = {
				//TODO: provide default values
			};
		}
	});