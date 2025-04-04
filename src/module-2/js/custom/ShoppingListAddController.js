ShoppingListAddController.$inject = ['ShoppingListService'];
function ShoppingListAddController(ShoppingListService) {
    var addCtrl = this;
    addCtrl.itemName = 'a';
    addCtrl.quautity = 10;
    addCtrl.AddItem = function () {
        ShoppingListService.addItem(addCtrl.itemName, addCtrl.quautity);
    };
}