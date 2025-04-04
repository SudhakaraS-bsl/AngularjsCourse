ShoppingListController1.$inject = ['CustomServiceFactory'];
function ShoppingListController1(CustomServiceFactory) {
    var ctrl1 = this;
    var ShoppingListService = CustomServiceFactory();
    ctrl1.itemName = 'a';
    ctrl1.quautity = 10;
    ctrl1.AddItem = function () {
        ShoppingListService.addItem(ctrl1.itemName, ctrl1.quautity);
    };
    ctrl1.items = ShoppingListService.getItems();
    ctrl1.removeItem = function (itemIndex) {
        ShoppingListService.removeItem(itemIndex);
    };
}

ShoppingListController3.$inject = ['CustomServiceFactoryByProp'];
function ShoppingListController3(CustomServiceFactoryByProp) {
    var ctrl3 = this;
    var ShoppingListService = CustomServiceFactoryByProp.GetShoppingListServiceFactory();
    ctrl3.itemName = 'a';
    ctrl3.quautity = 10;
    ctrl3.AddItem = function () {
        ShoppingListService.addItem(ctrl3.itemName, ctrl3.quautity);
    };
    ctrl3.items = ShoppingListService.getItems();
    ctrl3.removeItem = function (itemIndex) {
        ShoppingListService.removeItem(itemIndex);
    };
}

