MenuCategoryService.$inject = ['$http', 'ApiBasePath'];
function MenuCategoryService($http, ApiBasePath) {
    var service = this;
    var gblResponse;

    service.getMenuCategories = function () {
        var response =
            $http({
                method: "GET",
                url: ApiBasePath + "/categories.json"
            });
        return response;
    };

    service.getMenuForCategory = function (short_name) {
        var response =
            $http({
                method: "GET",
                url: ApiBasePath + "/menu_items.json",
                params: {
                    category: short_name
                }
            });
        return response;
    };
}