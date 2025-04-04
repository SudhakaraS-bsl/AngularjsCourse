Controller2.$inject = ['$scope'];
function Controller2($scope) {
    var child = this;
    child.c1_name = 'Controller2_Sudhakar';
    child.c1_obj = [{ Name: "hii", Age: 40 }];
    console.log('Controller2 $scope: ', $scope);

}