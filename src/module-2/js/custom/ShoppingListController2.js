ShoppingListController2.$inject = ['CustomServiceFactory'];
function ShoppingListController2(CustomServiceFactory) {
    var ctrl2 = this;
    var ShoppingListService = CustomServiceFactory(3);
    ctrl2.itemName = 'a';
    ctrl2.quautity = 10;
    ctrl2.AddItem = function () {
        try {
            ShoppingListService.addItem(ctrl2.itemName, ctrl2.quautity);
        } catch (error) {
            ctrl2.errorMessage = error.message;
        }
    };
    ctrl2.items = ShoppingListService.getItems();

    ctrl2.removeItem = function (itemIndex) {
        ShoppingListService.removeItem(itemIndex);
    };
}


ShoppingListController4.$inject = ['CustomServiceFactoryByProp'];
function ShoppingListController4(CustomServiceFactoryByProp) {
    var ctrl4 = this;
    var ShoppingListService = CustomServiceFactoryByProp.GetShoppingListServiceFactory(3);
    ctrl4.itemName = 'a';
    ctrl4.quautity = 10;
    ctrl4.AddItem = function () {
        try {
            ShoppingListService.addItem(ctrl4.itemName, ctrl4.quautity);
        } catch (error) {
            ctrl4.errorMessage = error.message;
        }
    };
    ctrl4.items = ShoppingListService.getItems();
    ctrl4.removeItem = function (itemIndex) {
        ShoppingListService.removeItem(itemIndex);
    };
}

ShoppingListController6.$inject = ['ShoppingListService'];// not used provider at the end
function ShoppingListController6(ShoppingListService) {
    var ctrl6 = this;
    //var ShoppingListService = CustomServiceFactoryByProp.GetShoppingListServiceFactory();
    ctrl6.itemName = 'a';
    ctrl6.quautity = 10;
    ctrl6.AddItem = function () {
        try {
            ShoppingListService.addItem(ctrl6.itemName, ctrl6.quautity);
        } catch (error) {
            ctrl6.errorMessage = error.message;
        }
    };
    ctrl6.items = ShoppingListService.getItems();
    ctrl6.removeItem = function (itemIndex) {
        ShoppingListService.removeItem(itemIndex);
    };
}