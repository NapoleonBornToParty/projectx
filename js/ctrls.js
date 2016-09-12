'use strict'
/* Controllers */
var xApp = angular.module('xApp', []);
xApp.controller('xAppListCtrl', function($scope) {
        //list ot repeat
        $scope.colors = [{
            'color': 'black',
            'hex': '#000'
        }, {
            'color': 'white',
            'hex': '#fff'
        }]
    })
    //compare, against