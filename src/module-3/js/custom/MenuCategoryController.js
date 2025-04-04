MenuCategoryController.$inject = ['MenuCategoryService', '$filter'];
function MenuCategoryController(MenuCategoryService, $filter) {
    var menuCtrl = this;
    var promise = MenuCategoryService.getMenuCategories();

    promise
        .then(function (response) {
            menuCtrl.MenuCategories = response.data;
        })
        .catch(function (error) {
            console.log('Error: ', error);
        });

    menuCtrl.getMenuCategory = function (short_name) {
        var promise = MenuCategoryService.getMenuForCategory(short_name);
        promise
            .then(function (response) {
                var lowerCase = $filter('lowercase');
                angular.forEach(response.data, function (value, key) {
                    if (lowerCase(key) == lowerCase(short_name)) {
                        menuCtrl.MenuCategory = value;
                    }
                });
            })
            .catch(function (error) {
                console.log('Error: ', error);
            });
    }
}