(function () {
    'use strict';

    angular.module('module1', ['module2'])
        .config(function () {
            console.log('module1 config');
        })
        .run(function () {
            console.log('module1 run');
        });

    angular.module('module2', [])
        .config(function () {
            console.log('module2 config');
        })
        .run(function () {
            console.log('module2 run');
        });

    angular.module('module3', ['module1'])
        .config(function () {
            console.log('module3 config');
        })
        .run(function () {
            console.log('module3 run');
        });
})();