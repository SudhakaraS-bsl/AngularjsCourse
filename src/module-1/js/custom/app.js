(function () {
    'use strict';

    angular.module('MyFirstApp', [])
        .controller('MyFirstController', MyFirstController);

    MyFirstController.$inject = ['$scope', '$filter', '$injector'];
    function MyFirstController($scope, $filter, $injector) {
        console.log('$scope', $scope);

        $scope.name = "";
        $scope.totalvalue = 0;
        $scope.message = "Hello, Coursera.!";
        $scope.imagename = 'Angularjs';

        $scope.AngularjsImage = function () {
            $scope.imagename = 'Angularjs';
        }
        $scope.AngularImage = function () {
            $scope.imagename = 'Angular';
        }
        $scope.sayMessage = function () {
            return 'Hello, Coursera from function.!';
        };
        $scope.HelloMethod = function () {
            return "Hello Sudhakar, Welcome to name calculator App which calculates total numeric value of enterd text.!";
        }
        $scope.DisplayNumeric = function () {
            $scope.totalvalue = CalculateNumericForString($scope.name);
        }

        $scope.upper = function () {
            var upCase = $filter('Uppercase');
            $scope.name = upCase($scope.name);
        };

        function CalculateNumericForString(string) {
            var totalStringValue = 0;
            for (let index = 0; index < string.length; index++) {
                totalStringValue += string.charCodeAt(index);
            }
            return totalStringValue;
        }
        console.log($injector.annotate(MyFirstController));
    }
})();