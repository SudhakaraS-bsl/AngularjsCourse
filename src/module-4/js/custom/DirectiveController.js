DirectiveController.$inject = ['$filter'];
function DirectiveController($filter) {
    var DirCtrl = this;
    DirCtrl.name = "";
    DirCtrl.Age = 0;
    var lowerCase = $filter('lowercase');
    DirCtrl.isCookieExistsInList = function () {
        for (let index = 0; index < DirCtrl.ctrl.items.length; index++) {
            var name = DirCtrl.ctrl.items[index].name;
            if (lowerCase(name).indexOf('cookie') != -1) { return true; }
        }
        return false;
    };
    //console.log('DirCtrl', DirCtrl);
}