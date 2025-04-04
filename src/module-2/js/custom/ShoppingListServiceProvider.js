

function ShoppingListServiceProvider() {
    var provider = this;
    provider.defaults = {
        MaxItems: 10
    };
    provider.$get = function () {
        var factory = new ShoppingListServiceFactory(provider.defaults.MaxItems);
        return factory;
    };
}