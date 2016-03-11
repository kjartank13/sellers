"use strict";

angular.module("project3App").controller("langController",
function langController($scope, $translate) {

  $scope.switchLanguage = function (languageKey) {
    $translate.use(languageKey);
  };

});