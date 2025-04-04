function ListItem() {
    var ddo = {
        restrict: 'E',
        templateUrl: 'src/module-3/views/ListItem.html'
    };
    return ddo;
}

function ShoppingList() {
    var ddo = {
        scope: {
            ctrl: "<",
            title: "@",
            badRemove: "=",
            onRemove: '&'
            //link: ShoppingListDirectiveLink
        },
        restrict: 'AE',
        templateUrl: 'src/module-3/views/ShoppingList.html',
        controller: 'DirectiveController as DirCtrl',
        bindToController: true
    };
    return ddo;
}

// function ShoppingListDirectiveLink(scope, element, attrs, controller) {
//     console.log('scope', scope);
//     console.log('element', element);
//     console.log('attrs', attrs);
//     console.log('controller', controller);

//     // here manipulate the elements either uisng jquery lite or Jquery
// }