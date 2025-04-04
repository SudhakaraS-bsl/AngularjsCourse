
ShoppingListShowController.$inject = ['ShoppingListService'];
function ShoppingListShowController(ShoppingListService) {
    var showCtrl = this;
    showCtrl.items = ShoppingListService.getItems();;
    showCtrl.removeItem = function (itemIndex) {
        ShoppingListService.removeItem(itemIndex);
    };
}