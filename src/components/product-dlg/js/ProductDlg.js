"use strict";


angular.module("project3App").factory("ProductDlg", 
	function ProductDlg($uibModal) {
	return {
		show: function () {
			var modalInstance = $uibModal.open({
				// size: "sm",
				controller: "ProductDlgController",
				templateUrl: "components/product-dlg/product-dlg.tpl.html"
			});
			console.log("Inside ProductDlg.js");
			return modalInstance.result;
		}
	};
});