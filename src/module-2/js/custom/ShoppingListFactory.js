function CustomServiceFactory() {
    var factory = function (maxItem) {
        return new ShoppingListServiceFactory(maxItem);
    }
    return factory;
}

function CustomServiceFactoryByProp() {
    var factory = {
        GetShoppingListServiceFactory: function (maxItem) {
            return new ShoppingListServiceFactory(maxItem);
        }
    };
    return factory;
}