RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/Home');

    $stateProvider
        .state('Home', {
            url: '/Home',
            templateUrl: 'src/module-4/views/home.html',
        })
        .state('mainList', {
            url: '/main-list',
            templateUrl: 'src/module-4/views/main-shoppinglist.template.html',
            controller: View1Controller,
            controllerAs: 'v1ctrl',
            resolve: {
                items: ['$timeout', function ($timeout) {

                    var items = [];
                    for (let index = 1; index <= 10; index++) {
                        items.push({ name: "item" + index, quantity: 100 + index, description: 'description for ' + index });
                    }
                    return items;

                }],
                newitems: ['$q', function ($q) {
                    return 'this is just a string value from key2';
                }],
                thirdKey: [function () {
                    return 'this is just a string value from key3 which has no dependencies';
                }]
            }
        })
        .state('mainList.itemDetails', {
            url: '/itemdetail/{itemid}', // define parameter
            templateUrl: 'src/module-4/views/itemdetail.template.html',
            controller: ItemDetailController,
            controllerAs: 'ItemDtlCtrl',
            // resolve: {
            //     item: ['$stateParams', function ($stateParams) { // inject $stateParams
            //         var items = [];
            //         for (let index = 1; index <= 10; index++) {
            //             items.push({ name: "item" + index, quantity: 100 + index, description: 'description for ' + index });
            //         }

            //         return items[$stateParams.itemid]; // retrieve the parameter from $stataParams 
            //     }]
            // }
        })
        .state('view1', {
            url: '/view1',
            templateUrl: 'src/module-4/views/view1.html',
            controller: View1Controller,
            controllerAs: 'v1ctrl'
        })
        .state('view2', {
            url: '/view2',
            templateUrl: 'src/module-4/views/view2.html',
            controller: 'View2Controller as v2ctrl'
        });

}