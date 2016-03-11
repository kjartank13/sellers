"use strict";

angular.module("project3App").factory("SellerDlg", 
	function SellerDlg($uibModal) {
	return {
		show: function () {
			var modalInstance = $uibModal.open({
				controller: "SellerDlgController",
				templateUrl: "components/seller-dlg/seller-dlg.tpl.html"
			});
			return modalInstance.result;
		}
	};
});

