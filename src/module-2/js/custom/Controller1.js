Controller1.$inject = ['$scope'];
function Controller1($scope) {
    var parent = this;
    parent.c1_name = 'Controller1_Sudhakar';
    parent.c1_obj = [{ Name: "hi", Age: 30 }];
    console.log('Controller1 $scope: ', $scope);
}