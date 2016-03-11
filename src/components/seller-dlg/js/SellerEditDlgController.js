"use strict";

angular.module("project3App").controller("SellerDlgController", 
function SellerDlgController($scope) {
    
    // TODO: Láta núverandi upplýsingar vera í input-unum

    $scope.onOk = function onOk() {
    //TODO: validation
        if ($scope.seller.name.length === 0) {
            //birta validation skilaboð
        }
        $scope.$close($scope.seller);
    };

    $scope.onCancel = function onCancel() {
        $scope.$dismiss();
    };

});