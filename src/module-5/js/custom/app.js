(function () {
    'use strict';

    angular.module('RegistrationApp', [])
        .controller('RegistrationController', RegistrationController);

    function RegistrationController() {


        var str = "This is the string to look for characters count";

        console.log('str:', str);

        var strArray = [];
        for (let index = 0; index < str.length; index++) {
            if (str[index] != ' ')
                strArray.push(str[index]);
        }
        console.log('strArray: ', strArray);
        var uniqueArray = Array.from(new Set(strArray));
        console.log('uniqueArray: ', uniqueArray);
        for (let index = 0; index < uniqueArray.length; index++) {
            var count = strArray.filter(val => val == uniqueArray[index]).length;
            console.log(uniqueArray[index] + " = " + count);
        }


        var regCtrl = this;
        regCtrl.username = '';
        regCtrl.email = '';
        regCtrl.phone = '';
        regCtrl.dummy = '';
        regCtrl.Submit = function () {
            console.log('submit button clicked.');
            regCtrl.completed = true;
        };
    }

})();