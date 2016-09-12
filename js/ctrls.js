'use strict'
/* Controllers */
var xApp = angular.module('xApp', []);
xApp.controller('xAppListCtrl', function($scope) {
    $scope.colors = [{
        'color': 'black',
        'hex': '#000',
        'color': 'white',
        'hex': '#fff',
    }]
})