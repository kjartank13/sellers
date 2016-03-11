"use strict";

angular.module("project3App").controller("EditSellerDlgController", 
function EditSellerDlgController($scope, $routeParams, AppResource) {
    console.log("Ég komst í EditSellerDlgController");
    
    var sellerID = $routeParams.id;
    var seller;
    AppResource.getSellerDetails(Number(sellerID)).success(function getSellerDetails(currSeller) {
            $scope.seller = currSeller;

    });

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