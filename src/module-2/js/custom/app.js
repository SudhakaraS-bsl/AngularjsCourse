(function () {
    'use strict';

    angular.module('Module2App', [])
        .controller('MyFirstController', MyFirstController)
        .filter('name', nameFilterFactory)
        .controller('Controller1', Controller1)
        .controller('Controller2', Controller2)
        .controller('Controller3', Controller3)
        .service('ShoppingListService', ShoppingListService)
        .controller('ShoppingListAddController', ShoppingListAddController)
        .controller('ShoppingListShowController', ShoppingListShowController)
        .factory('CustomServiceFactory', CustomServiceFactory)
        .factory('CustomServiceFactoryByProp', CustomServiceFactoryByProp)
        .controller('ShoppingListController1', ShoppingListController1)
        .controller('ShoppingListController2', ShoppingListController2)
        .controller('ShoppingListController3', ShoppingListController3)
        .controller('ShoppingListController4', ShoppingListController4)
        .provider('ShoppingListService', ShoppingListServiceProvider)
        .controller('ShoppingListController6', ShoppingListController6)
        .config(Config);

        Config.$inject = ['ShoppingListServiceProvider']; // using provider at the end
        function Config(ShoppingListServiceProvider) {
            ShoppingListServiceProvider.defaults.MaxItems = 2;
        }

})();
