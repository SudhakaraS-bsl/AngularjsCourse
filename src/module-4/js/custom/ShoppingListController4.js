ShoppingListController4.$inject = ['ServiceFactoryByProp'];
function ShoppingListController4(ServiceFactoryByProp) {
    var ctrl4 = this;
    var ShoppingListService = ServiceFactoryByProp.GetShoppingListService(3);
    ctrl4.itemName = 'a';
    ctrl4.quautity = 10;
    ctrl4.title = 'Shopping list2 (limited to 3 items)';
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

