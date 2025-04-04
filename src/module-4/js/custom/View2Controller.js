View2Controller.$inject = ['CustomServiceFactoryByProp'];
function View2Controller(CustomServiceFactoryByProp) {
    var v2ctrl = this;
    var ShoppingListService = CustomServiceFactoryByProp.GetShoppingListServiceFactory();
    v2ctrl.name = 'sudhakar from view2 controller';
    v2ctrl.place = 'Bengaluru new';
    v2ctrl.items = ShoppingListService.getItems();
}