
Controller3.$inject = ['$scope'];
function Controller3($scope) {
    var grandChild = this;
    grandChild.c1_name = 'Controller3_Sudhakar';
    console.log('Controller3 $scope: ', $scope);
}