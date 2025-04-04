function CustomServiceFactoryByProp() {
    var factory = {
        GetShoppingListServiceFactory: function (maxItem) {
            return new ShoppingListServiceFactory(maxItem);
        }
    };
    return factory;
}