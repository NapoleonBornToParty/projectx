'use strict'
/* Controllers */
var xApp = angular.module('xApp',  ['ngRoute']);
xApp.controller('xAppMainCtrl', function($scope) {
    $scope.alert = {
        'search': 'Nothing there...'
    }
})
xApp.controller('xAppListCtrl', function($scope, $http) {
      $http.get('files/colors.json').then(function(response) {
      $scope.content = response.data;
      $scope.statuscode = response.status;
      $scope.statustext = response.statusText;
    });
    $scope.colors = [{
        'color': 'black',
        'hex': '#000'
    }, {
        'color': 'white',
        'hex': '#fff'
    }]
});