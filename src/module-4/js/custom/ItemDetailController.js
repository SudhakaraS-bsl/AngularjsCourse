ItemDetailController.$inject = ['items', '$stateParams'];
function ItemDetailController(items, $stateParams) {
    var ItemDtlCtrl = this;
    ItemDtlCtrl.item = items[$stateParams.itemid];
}