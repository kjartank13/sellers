"use strict";

angular.module("project3App").factory("SellerDlg", 
	function SellerDlg($uibModal) {
	return {
		show: function () {
			var modalInstance = $uibModal.open({
				size: "sm",
				controller: "SellerDlgController",
				templateUrl: "components/seller-dlg/seller-dlg.tpl.html"
			});
			return modalInstance.result;
		}
	};
});

angular.module("project3App").factory("EditSellerDlg", 
	function EditSellerDlg($uibModal) {
	return {
		show: function () {
			var modalInstance = $uibModal.open({
				size: "sm",
				controller: "EditSellerDlgController",
				templateUrl: "components/seller-dlg/seller-edit-dlg.tpl.html"
			});
			return modalInstance.result;
		}
	};
});
