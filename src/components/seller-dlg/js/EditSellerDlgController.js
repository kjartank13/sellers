"use strict";

angular.module("project3App").controller("EditSellerDlgController", 
function EditSellerDlgController($scope, $routeParams, AppResource, centrisNotify) {
    var sellerId = Number($routeParams.id);
    

    AppResource.getSellerDetails(sellerId).success(function getSellerDetails(currSeller) {
        $scope.seller = currSeller;
    });
    $scope.onOk = function onOk() {
        if ($scope.seller.name === undefined || $scope.seller.category === undefined || !isNaN($scope.seller.name) || !isNaN($scope.seller.category)) {
            centrisNotify.error("seller-dlg.Messages.SaveFailed");
            // $scope.$dismiss();
        }else{
            centrisNotify.success("seller-dlg.Messages.SaveSucceeded");
            $scope.$close($scope.seller);
        }
    };

    // $scope.onCancel = function onCancel() {
    //     $scope.seller = curr;
    //     $scope.$dismiss();
    // };

});