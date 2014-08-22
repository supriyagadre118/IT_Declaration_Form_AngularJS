/**
 * Created by supriyag on 12-08-2014.
 */
app.directive('bodyPanel', function () {
    return{
        restrict: 'E',
        templateUrl: 'js/body-controller/body-panel.html',
        controller: function () {

        },
        controllerAs: 'bodyCtrl'
    }
});
// define other directives
app.directive('homeContent', function () {
    return{
        restrict: 'E',
        templateUrl: 'js/body-controller/home-content.html',
        controller: function () {

        },
        controllerAs: 'homeCtrl'
    }
});
app.directive('onlyNumbers',function() {
    return{
        restrict : 'E',
        link: function (scope, element, attrs) {

            $(element).on('keydown', function (event) {
                var key = event.which || event.keyCode;

                if (!event.shiftKey && !event.altKey && !event.ctrlKey &&
                    // numbers
                    key >= 48 && key <= 57 ||
                    // Numeric keypad
                    key >= 96 && key <= 105 ||
                    // Backspace and Tab and Enter
                    key == 8 || key == 9 || key == 13 ||
                    // Home and End
                    key == 35 || key == 36 ||
                    // left and right arrows
                    key == 37 || key == 39 ||
                    // Del and Ins
                    key == 46 || key == 45)
                    return true;

                return false;
            });
        }
    }
});
app.directive('checkLength',function(){

});
app.directive('deductionSixContent', function () {
    return{
        restrict: 'E',
        templateUrl: 'js/body-controller/deduction-six-content.html',
        controller: function () {

        }
    }

});
app.directive('deductionSixAContent', function () {
    return{
        restrict: 'E',
        templateUrl: 'js/body-controller/deduction-six-a-content.html',
        controller: function () {

        }
    }

});
app.directive('housingContent', function () {
    return{
        restrict: 'E',
        templateUrl: 'js/body-controller/housing-content.html',
        controller: function () {

        }
    }

});
app.directive('hraContent', function () {
    return{
        restrict: 'E',
        templateUrl: 'js/body-controller/hra-content.html',
        controller: function () {

        }
    }

});
app.directive('ltaContent', function () {
    return{
        restrict: 'E',
        templateUrl: 'js/body-controller/lta-content.html',
        controller: function () {

        }
    }

});
app.directive('otherDeclarationsContent', function () {
    return{
        restrict: 'E',
        templateUrl: 'js/body-controller/other-declarations-content.html',
        controller: function () {

        }
    }

});
app.directive('otherExemptionsContent', function () {
    return{
        restrict: 'E',
        templateUrl: 'js/body-controller/other-exemptions-content.html',
        controller: function () {

        }
    }

});