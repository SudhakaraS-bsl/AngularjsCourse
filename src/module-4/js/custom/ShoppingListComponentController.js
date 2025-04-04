ShoppingListComponentController.$inject = ['$filter', '$element', '$rootScope', '$q'];
function ShoppingListComponentController($filter, $element, $rootScope, $q) {
    var $ctrl = this;
    var totalNoOfItems;
    $ctrl.name = "";
    $ctrl.Age = 0;
    var lowerCase = $filter('lowercase');
    $ctrl.isCookieExistsInList = function () {
        for (let index = 0; index < $ctrl.ctrl.items.length; index++) {
            var name = $ctrl.ctrl.items[index].name;
            if (lowerCase(name).indexOf('cookie') != -1) { return true; }
        }
        return false;
    };
    $ctrl.$onInit = function () {
        //console.log('$onInit');
        totalNoOfItems = 0;

    };
    $ctrl.$onChanges = function (changeObj) {
        //console.log('$onChanges', changeObj);
    };
    $ctrl.$postLink = function () {
        // $scope.$watch('$ctrl.isCookieExistsInList()', function (newValue, oldValue) {
        //     console.log('$postLink - $element: ', $element);
        //     console.log('newValue: ', newValue);
        //     console.log('oldValue: ', oldValue);
        //     if (newValue == true) {
        //         var warningElement = $element.find('div.error');
        //         warningElement.slideDown(900);
        //     } else {
        //         var warningElement = $element.find('div.error');
        //         warningElement.slideUp(900);
        //     }
        // });
    };

    $ctrl.$onDestroy = function () {
        //console.log('$onDestroy');

    };

    $ctrl.$doCheck = function (params) {
        //console.log('$doCheck');
        if ($ctrl.ctrl.items.length != totalNoOfItems) {
            totalNoOfItems = $ctrl.ctrl.items.length;
            // if ($ctrl.isCookieExistsInList()) {
            //     var warningElement = $element.find('div.error');
            //     warningElement.slideDown(900);
            // } else {
            //     var warningElement = $element.find('div.error');
            //     warningElement.slideUp(900);
            // }
            //console.log('publishing event with on:true');

            $rootScope.$emit('shoppinglist:processing', { on: true });
            var promises = [];
            for (let index = 0; index < $ctrl.ctrl.items.length; index++) {
                var name = $ctrl.ctrl.items[index].name;
                promises.push(name);
            }
            $q.all(promises)
                .then(function (result) {
                    var warningElement = $element.find('div.error');
                    warningElement.slideUp(900);
                })
                .catch(function (error) {
                    var warningElement = $element.find('div.error');
                    warningElement.slideDown(900);
                })
                .finally(function (result) {
                    //console.log('publishing event with on:false');
                    $rootScope.$emit('shoppinglist:processing', { on: false });
                });

        }
    };
    //console.log('$scope', $scope);
    //console.log('$ctrl', $ctrl);
}