function ShoppingListService() {
    // var maxItem = 3;
    var service = this;
    var items = [];

    service.addItem = function (name, quantity) {
        // if (maxItem == undefined || (maxItem != undefined && items.length < maxItem)) {
        console.log('ShoppingListService.addItem()');
        var item = { name: name, quantity: quantity };
        console.log('item', item);
        items.push(item);
        console.log('items', items);
        // }
        // else {
        //     throw new Error('Max items count ' + maxItem + ' reached.')
        // }
    };
    service.getItems = function () {
        return items;
    };
    service.removeItem = function (itemIndex) {
        items.splice(itemIndex, 1);
    };
}