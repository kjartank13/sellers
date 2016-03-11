"use strict";

angular.module("project3App")
.factory("SellerDlg", function($modal) {
	return {
		SellerDlg.show: function show(entity) {
			var dlg = $modal.open({
				controller: "SellerDlgController",
				templateUrl: "seller-dlg/seller-dlg.tpl.html",
				resolve: {
					$entity: function() {
						return entity;
					}
				}
			});
			return dlg.result;
		};
	};
});

