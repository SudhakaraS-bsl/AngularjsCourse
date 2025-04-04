MyFirstController.$inject = ['$scope', '$filter', '$injector', 'nameFilter', '$timeout'];
function MyFirstController($scope, $filter, $injector, nameFilter, $timeout) {
    $scope.name = "";
    $scope.upperCaseFilter = "";
    $scope.lowerCaseFilter = "";
    $scope.dateFilter = "2025-02-21";
    $scope.currencyFilter = "";
    $scope.limit;
    $scope.Array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    $scope.jsonArray = [{ "name": "Sudhakar", "Place": "BAY" },
    { "name": "name1", "Place": "BLR" }];
    $scope.numberFilter;
    $scope.jsonFilter;
    $scope.spacing;
    $scope.searchText = "";
    $scope.totalvalue = 0;
    $scope.message = "Hello, Coursera.!";
    $scope.imagename = 'Angularjs';
    $scope.customFilter = '';
    $scope.onceCounterVal = 0;
    $scope.counterVal = 0;
    $scope.oneTimeBinding = 100;
    $scope.shoppingList1 = ["Apple", "Mango", "Grapes", "Chips"];
    $scope.shoppingList2 = [
        { "name": "Mango", "Quantity": 100 },
        { "name": "Apple", "Quantity": 200 },
        { "name": "PineApple", "Quantity": 400 },
        { "name": "DragonFruit", "Quantity": 500 }
    ];

    var model = new Model("RS Q8", "Audi");
    $scope.prototypalInheritance = model.DisplayCarModel();

    $scope.oneTimeBindingCounter = function () {
        $scope.oneTimeBinding++;
        console.log('$scope.oneTimeBinding', $scope.oneTimeBinding);
    };

    $scope.onceCounter = function () {
        $scope.onceCounterVal = 1;
        // console.log('$scope.onceCounterVal', $scope.onceCounterVal);

    };
    $scope.counter = function () {
        // setTimeout(function () {
        //     $scope.counterVal++;
        //     console.log('$scope.counterVal', $scope.counterVal);
        //     $scope.$digest();
        // }, 2000);

        // setTimeout(function () {
        //     $scope.$apply(function () {
        //         $scope.counterVal++;
        //         console.log('$scope.counterVal', $scope.counterVal);
        //     });
        // }, 2000);

        $timeout(function () {
            $scope.counterVal++;
            console.log('$scope.counterVal', $scope.counterVal);
        }, 2000);
        // $scope.counterVal++;
        // console.log('$scope.counterVal', $scope.counterVal);
    };

    $scope.AngularjsImage = function () {
        $scope.imagename = 'Angularjs';
    }
    $scope.AngularImage = function () {
        $scope.imagename = 'Angular';
    }
    $scope.sayMessage = function () {
        var message = 'Hello, Coursera from function.!';
        var output = $filter('uppercase')(message);
        return output;
    };
    $scope.HelloMethod = function () {
        return "Hello Sudhakar, Welcome to name calculator App which calculates total numeric value of enterd text.!";
    }
    $scope.DisplayNumeric = function () {
        $scope.totalvalue = CalculateNumericForString($scope.name);
    }

    $scope.upper = function () {
        var upCase = $filter('uppercase');
        $scope.upperCaseFilter = upCase($scope.upperCaseFilter);
    };

    $scope.lower = function () {
        var lowerCase = $filter('lowercase');
        $scope.lowerCaseFilter = lowerCase($scope.lowerCaseFilter);
    };
    $scope.date = function () {
        var date = $filter('date');
        $scope.dateFilter = date($scope.dateFilter, 'longDate', '+0530');
    };
    $scope.currency = function () {
        var currency = $filter('currency');
        $scope.currencyFilter = currency($scope.currencyFilter, '$', '4');
    };
    $scope.limitTo = function () {
        var limitTo = $filter('limitTo');
        var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
        $scope.Array = limitTo(array, $scope.limit);
    };
    $scope.number = function () {
        var number = $filter('number');
        $scope.numberFilter = number($scope.numberFilter, 2);
    };

    $scope.json = function () {
        var json = $filter('json');
        $scope.jsonFilter = json($scope.jsonArray, $scope.spacing);
        console.log('$scope.jsonFilter', $scope.jsonFilter);

    };
    $scope.custom = function () {
        $scope.customFilter = nameFilter($scope.customFilter);
    };

    function CalculateNumericForString(string) {
        var totalStringValue = 0;
        for (let index = 0; index < string.length; index++) {
            totalStringValue += string.charCodeAt(index);
        }
        return totalStringValue;
    }

    $scope.noOfWatchers = function () {
        console.log('# of watchers : ', $scope.$$watchersCount);

    };
    $scope.$watch('onceCounterVal', function (newValue, oldValue) {
        console.log('onceCounter old value : ', oldValue);
        console.log('onceCounter new value : ', newValue);
    });
    $scope.$watch('counterVal', function (newValue, oldValue) {
        console.log('Counter old value : ', oldValue);
        console.log('Counter new value : ', newValue);
    });

    $scope.$watch(function () {
        console.log('Digest loop fired.!');
    });

    $scope.date();
    // console.log('$scope', $scope);
    // console.log($injector.annotate(MyFirstController));
}