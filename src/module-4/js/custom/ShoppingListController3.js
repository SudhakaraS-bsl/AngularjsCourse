ShoppingListController3.$inject = ['ServiceFactoryByProp', '$rootScope'];
function ShoppingListController3(ServiceFactoryByProp, $rootScope) {
    var ctrl3 = this;
    var ShoppingListService = ServiceFactoryByProp.GetShoppingListService();
    ctrl3.itemName = 'a';
    ctrl3.quautity = 10;

    ctrl3.AddItem = function () {
        ShoppingListService.addItem(ctrl3.itemName, ctrl3.quautity);
        ctrl3.title = GetTitle();
    };
    ctrl3.items = ShoppingListService.getItems();
    ctrl3.title = GetTitle();
    ctrl3.removeItem = function (itemIndex) {
        ctrl3.lastRemoved = "Last item removed was " + ctrl3.items[itemIndex].name;
        ShoppingListService.removeItem(itemIndex);
        ctrl3.title = GetTitle();
        //console.log('this is: ', this);
        //console.log('itemIndex', itemIndex);


    };

    function GetTitle() {
        return 'Shopping List #1 (' + ctrl3.items.length + ') items';
    }

    $rootScope.propertyOne = 'propertyOneValue';

    //console.log('$rootScope', $rootScope);

}