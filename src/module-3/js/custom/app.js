(function () {
    'use strict';

    angular.module('Module3App', [])
        .controller('ShoppingListController', ShoppingListController)
        .service('ShoppingListService', ShoppingListService)
        .service('WeightLossFilterService', WeightLossFilterService)
        .service('MenuCategoryService', MenuCategoryService)
        .controller('MenuCategoryController', MenuCategoryController)
        .constant('ApiBasePath', "https://coursera-jhu-default-rtdb.firebaseio.com")
        .controller('ShoppingListController3', ShoppingListController3)
        .controller('ShoppingListController4', ShoppingListController4)
        .factory('CustomServiceFactoryByProp', CustomServiceFactoryByProp)
        .directive('listItem', ListItem)
        .directive('shoppingList', ShoppingList)
        .controller('DirectiveController', DirectiveController);

})();
