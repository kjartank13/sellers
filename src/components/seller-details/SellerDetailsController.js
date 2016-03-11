"use strict";

angular.module("project3App").controller("SellerDetailsController",
	function SellerDetailsController($scope, AppResource, $location, $routeParams, EditSellerDlg) {
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
                AppResource.updateSeller(sellerID, seller).success(function(seller) {

                }).error(function() {
                    //TODO: implement error notification
                });
            });
        };
        
        $scope.selectProduct = function selectProduct(id) {
            EditProductDlg.show().then(function(product) {
                AppResource.updateProduct(sellerID, id, product).success(function(seller) {

                }).error(function() {
                    //TODO: implement error notification
                });
            });
        };
	
});