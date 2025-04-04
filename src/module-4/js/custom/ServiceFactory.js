function ServiceFactoryByProp() {
    var factory = {
        GetShoppingListService: function (maxItem) {
            return new ShoppingListServiceFactory(maxItem);
        }
    };
    return factory;
}
function ServiceFactoryByFunction() {
    var factory = function () {
        return new ShoppingListService();
    }
    return factory;
}