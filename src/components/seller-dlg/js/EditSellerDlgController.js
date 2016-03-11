"use strict";

angular.module("project3App").controller("EditSellerDlgController", 
function EditSellerDlgController($scope) {
    console.log("Ég komst í EditSellerDlgController");
    
    // TODO: Láta núverandi upplýsingar vera í input-unum

    $scope.onOk = function onOk() {
    //TODO: validation
        console.log($scope.seller);
        if ($scope.seller.name.length === 0) {
            //birta validation skilaboð
        }
        $scope.$close($scope.seller);
    };

    $scope.onCancel = function onCancel() {
        $scope.$dismiss();
    };

});