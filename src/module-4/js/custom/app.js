(function () {
    'use strict';
    angular.module('Module4App', ['ui.router','ui.router.state.events'])
        .config(RoutesConfig)
        .run(RunConfiguration)
        .constant('ApiBasePath', "https://coursera-jhu-default-rtdb.firebaseio.com")
        .controller('ShoppingListController', ShoppingListController)
        .controller('View2Controller', View2Controller)
        .controller('DirectiveController', DirectiveController)
        .service('ShoppingListService', ShoppingListService)
        .service('WeightLossFilterService', WeightLossFilterService)
        .controller('ShoppingListController3', ShoppingListController3)
        .controller('ShoppingListController4', ShoppingListController4)
        .factory('ServiceFactoryByProp', ServiceFactoryByProp)
        .component('shoppingList', shoppingListComponentObj)
        .component('loadingSpinner', loadingSpinnerComponentObj);
})();
