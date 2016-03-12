"use strict";

angular.module("project3App").controller("SellerDetailsController",
	function SellerDetailsController($scope, AppResource, $location, $routeParams, EditSellerDlg, ProductDlg) {
		var sellerID = Number($routeParams.id);
		var bestProducts = [];
		var allProducts = [];
		var seller;
		//$scope.bestproducts

		AppResource.getSellerDetails(sellerID).success(function getSellerDetails(currSeller) {
			$scope.currSeller = currSeller;
			seller = currSeller;
		});

		AppResource.getSellerProducts(sellerID).success(function getTopTen(products) {
			allProducts = products;
			$scope.allProducts = allProducts;
			if (products.length > 0)
			{
				products.sort(function(a, b) {
					return b.quantitySold - a.quantitySold;
				});

				
				if (products.length > 10)
				{
					for (var i = 0; i < 10; i++)
					{
						bestProducts[i] = products[i];
					}
				}
				else
				{
					bestProducts = products;
				}
				$scope.bestProducts = bestProducts;
			}
		});
        
        
        $scope.onEditSeller = function onEditSeller() {
		EditSellerDlg.show().then(function(seller) {
            console.log("Controller: " + seller);
			AppResource.updateSeller(sellerID, seller).success(function(seller) {
				// var newSeller = seller;
				// $scope.sellers.push(seller);
			}).error(function() {
				//TODO: implement error notification
			});
		});

	};

	$scope.onAddProduct = function onAddProduct() {
		ProductDlg.show().then(function(newprod) {
			console.log("newprod = " + newprod);
			AppResource.addSellerProduct(sellerID, newprod).success(function(newprod) {
				console.log("Inside AppResource addproduct function: " + newprod.name);
			}).error(function() {
				//TODO: implement error notification
			});
		});

	};
});