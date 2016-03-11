"use strict";

angular.module("project3App").controller("EditSellerDlgController", 
function EditSellerDlgController($scope, $routeParams, AppResource) {
    var sellerId = Number($routeParams.id);
    
    AppResource.getSellerDetails(sellerId).success(function getSellerDetails(currSeller) {
        $scope.seller = currSeller;
    });
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