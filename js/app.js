/**
 * Created by supriyag on 12-08-2014.
 */

var app = angular.module('ITForm',['ui.bootstrap']);

/*app.controller('ItemCtrl', ['$scope', function($scope){
    $scope.item = {
        name: 'Potato',
        cost: 350,
        minAge: 10,
        maxAge: 20
    };
    $scope.currencyFormatting = function(value) { return value.toString() + " $"; };
}]);*/
//var app = angular.module('sliderDemoApp',['ui.slider']);

//var app = angular.module("CombineModule", ["ITForm", "sliderDemoApp"]);


/*
angular.element(document).ready(function() {
    angular.bootstrap(document, ['ITForm','sliderDemoApp']);
    });*/

/*
app.directive('slider', function() {
    return function(scope, element, attrs) {
        $(element).slider({
            min: 0, max: 10, value: attrs.uiSlider,
            slide: function(event, ui) { scope.slider = ui.value; scope.$apply(); },
            create: function() { scope.slider = 5; }
        });
    }
});*/
