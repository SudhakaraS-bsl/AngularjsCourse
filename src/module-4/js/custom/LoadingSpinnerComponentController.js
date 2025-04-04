LoadingSpinnerComponentController.$inject = ['$rootScope', '$timeout'];
function LoadingSpinnerComponentController($rootScope, $timeout) {
    var $ctrl = this;
    //$ctrl.showSpinner = true;
    var cancellers = [];
    var cancelListener = $rootScope.$on('shoppinglist:processing', function (event, data) {
        // console.log('event', event);
        // console.log('data', data);
        if (data.on) {
            //console.log('data.on', data.on);
            $ctrl.showSpinner = true;
        }
        else {
            $timeout(function () {
                $ctrl.showSpinner = false;
            }, 1000);
        }
    });
    console.log('SpinnerController is executed.');

    $ctrl.$onInIt = function () {
        console.log('SpinnerController $onInIt()');
        // var cancel = $rootScope.$on('$stateChangeStart',
        //     function (event, toState, toParams, fromState, fromParams, options) {
        //         $ctrl.showSpinner = true;
        //     });
        // cancellers.push(cancel);

        // cancelListener = $rootScope.$on('shoppinglist:processing', function (event, data) {
        //     console.log('event', event);
        //     console.log('data', data);
        //     if (data.on) {
        //         //console.log('data.on', data.on);

        //         $ctrl.showSpinner = true;
        //     }
        //     else {
        //         $timeout(function () {
        //             $ctrl.showSpinner = false;
        //         }, 1000);
        //     }
        // });
    };

    $ctrl.$onDestroy = function () {

        cancelListener();
        // cancellers.forEach(element => {
        //     element();
        // });
    };
}