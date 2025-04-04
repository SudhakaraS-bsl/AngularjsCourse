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
ShoppingListController3.$inject = ['CustomServiceFactoryByProp'];
function ShoppingListController3(CustomServiceFactoryByProp) {
    var ctrl3 = this;
    var ShoppingListService = CustomServiceFactoryByProp.GetShoppingListServiceFactory();
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
        console.log('this is: ', this);
        console.log('itemIndex', itemIndex);


    };

    function GetTitle() {
        return 'Shopping List #1 (' + ctrl3.items.length + ') items';
    }
}

ShoppingListController4.$inject = ['CustomServiceFactoryByProp'];
function ShoppingListController4(CustomServiceFactoryByProp) {
    var ctrl4 = this;
    var ShoppingListService = CustomServiceFactoryByProp.GetShoppingListServiceFactory(3);
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
DirectiveController.$inject = ['$filter'];
function DirectiveController($filter) {
    var DirCtrl = this;
    DirCtrl.name = "";
    DirCtrl.Age = 0;
    var lowerCase = $filter('lowercase');
    DirCtrl.isCookieExistsInList = function () {
        for (let index = 0; index < DirCtrl.ctrl.items.length; index++) {
            var name = DirCtrl.ctrl.items[index].name;
            if (lowerCase(name).indexOf('cookie') != -1) { return true; }
        }
        return false;
    };
    console.log('DirCtrl', DirCtrl);
}