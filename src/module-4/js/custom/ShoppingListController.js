ShoppingListController.$inject = ['ShoppingListService'];
function ShoppingListController(ShoppingListService) {
    var ctrl = this;
    ctrl.itemName = 'a';
    ctrl.quautity = 5;
    ctrl.AddItem = function () {
        try {
            ShoppingListService.addItem(ctrl.itemName, ctrl.quautity);
        } catch (error) {
            ctrl.errorMessage = error.message;
        }
    };
    ctrl.items = ShoppingListService.getItems();
    ctrl.removeItem = function (itemIndex) {
        ShoppingListService.removeItem(itemIndex);
    };
}
















