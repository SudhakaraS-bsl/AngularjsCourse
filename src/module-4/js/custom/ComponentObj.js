var shoppingListComponentObj = {
    templateUrl: 'src/module-4/views/ShoppingList.html',
    controller: ShoppingListComponentController,
    bindings: {
        ctrl: "<",
        title: "@",
        badRemove: "=",
        onRemove: '&'
    }
};
var loadingSpinnerComponentObj = {
    templateUrl: 'src/module-4/views/Spinner.html',
    controller: LoadingSpinnerComponentController
};