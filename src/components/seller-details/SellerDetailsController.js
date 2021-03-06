"use strict";

angular.module("project3App").controller("SellerDetailsController",
	function SellerDetailsController($scope, centrisNotify, AppResource, $location, $routeParams, EditSellerDlg, ProductDlg, EditProductDlg) {
		var sellerID = Number($routeParams.id);
		var bestProducts = [];

		AppResource.getSellerDetails(sellerID).success(function getSellerDetails(currSeller) {
			$scope.currSeller = currSeller;
		});

		AppResource.getSellerProducts(sellerID).success(function getTopTen(products) {
			$scope.allProducts = products;
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
                    centrisNotify.error("product-dlg.Messages.SaveFailed");
                });
            });
        };

        $scope.onAddProduct = function onAddProduct() {
            ProductDlg.show().then(function(newprod) {
                $scope.allProducts.push(newprod);
                AppResource.addSellerProduct(sellerID, newprod).success(function(newprod) {
                    $scope.allProducts.push(newprod);
                }).error(function() {
                    centrisNotify.error("product-dlg.Messages.SaveFailed");
                });
            });
        };

	$scope.onEditProduct = function onEditProduct(product) {
        $location.search('product', product);
        
		EditProductDlg.show(product).then(function(product) {
			AppResource.updateProduct(sellerID, product.id, product).success(function(product) {
				
			}).error(function() {
				centrisNotify.error("product-dlg.Messages.SaveFailed");
			});
		});

	};
});