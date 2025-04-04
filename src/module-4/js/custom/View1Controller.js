View1Controller.$inject = ['ServiceFactoryByProp', 'items', 'newitems', 'thirdKey'];
function View1Controller(ServiceFactoryByProp, items, newitems, thirdKey) {
    var v1ctrl = this;
    var ShoppingListService = ServiceFactoryByProp.GetShoppingListService();
    v1ctrl.name = 'sudhakar from view1 controller';
    v1ctrl.place = 'Bengaluru';
    v1ctrl.items = PopulateItems();
    v1ctrl.itemsByResolve = items;
    v1ctrl.newitems = newitems;
    v1ctrl.thirdKey = thirdKey;
    //console.log('v1ctrl.items', v1ctrl.items);
}

function PopulateItems() {
    var items = [];
    for (let index = 1; index <= 10; index++) {
        items.push({ name: "item" + index, quantity: 100 + index, description: 'description for ' + index });
    }
    return items;
}