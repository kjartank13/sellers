"use strict";


angular.module("project3App").factory("ProductDlg", 
	function ProductDlg($uibModal) {
	return {
		show: function () {
			var modalInstance = $uibModal.open({
				size: "sm",
				controller: "ProductDlgController",
				templateUrl: "components/product-dlg/product-dlg.tpl.html"
			});
			console.log("Inside ProductDlg.js");
			return modalInstance.result;
		}
	};
});


angular.module("project3App").factory("EditProductDlg", 
	function EditProductDlg($uibModal) {
	return {
		show: function (product) {
			var modalInstance = $uibModal.open({
				size: "sm",
				controller: "EditProductDlgController",
				templateUrl: "components/product-dlg/edit-product-dlg.tpl.html"
			});
			return modalInstance.result;
		}
	};
});