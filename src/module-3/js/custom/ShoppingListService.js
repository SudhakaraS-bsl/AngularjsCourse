ShoppingListService.$inject = ['$q', 'WeightLossFilterService'];
function ShoppingListService($q, WeightLossFilterService) {
    var service = this;
    var items = [];

    service.addItem = function (name, quantity) {
        // if (maxItem == undefined || (maxItem != undefined && items.length < maxItem)) {
        //1.separate promises
        // var nameCheckPromise = WeightLossFilterService.checkName(name);
        // nameCheckPromise
        //     .then(function (result) {
        //         console.log('nameCheckPromise:result', result);
        //         var quantityCheckPromise = WeightLossFilterService.checkQuantity(quantity);
        //         quantityCheckPromise
        //             .then(function (result) {
        //                 console.log('quantityCheckPromise:result', result);
        //                 console.log('ShoppingListService.addItem()');
        //                 var item = { name: name, quantity: quantity };
        //                 console.log('item', item);
        //                 items.push(item);
        //                 console.log('items', items);
        //             }, function (result) {
        //                 console.log('quantityCheckPromise:result', result);
        //                 // throw new Error(result.message);
        //             });
        //     }, function (result) {
        //         console.log('nameCheckPromise:result', result);
        //         //throw new Error(result.message);
        //     });

        //2.common error block
        // var nameCheckPromise = WeightLossFilterService.checkName(name);
        // nameCheckPromise
        //     .then(function (result) {
        //         return WeightLossFilterService.checkQuantity(quantity);
        //     })
        //     .then(function (result) {
        //         console.log('result', result);
        //         items.push({ name: name, quantity: quantity });
        //     })
        //     .catch(function (result) {
        //         console.log('error:', result.message);
        //     });
        
        //3.parallel promises
        var nameCheckPromise = WeightLossFilterService.checkName(name);
        var quantityCheckPromise = WeightLossFilterService.checkQuantity(quantity);
        $q.all([nameCheckPromise, quantityCheckPromise])
            .then(function (result) {
                console.log('result', result);
                items.push({ name: name, quantity: quantity });
            })
            .catch(function (result) {
                console.log('error:', result.message);
                setTimeout(function() { throw result; });
            });
    };
    service.getItems = function () {
        return items;
    };
    service.removeItem = function (itemIndex) {
        items.splice(itemIndex, 1);
    };
}