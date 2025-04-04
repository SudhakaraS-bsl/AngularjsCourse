WeightLossFilterService.$inject = ['$q'];
function WeightLossFilterService($q) {
    var svc = this;
    svc.checkName = function (itemName) {
        var result = { message: "" };
        var deferred = $q.defer();

        if (itemName.toLowerCase().indexOf('cookie') === -1) {
            result.message = 'valid itemname';
            deferred.resolve(result);
        } else {
            result.message = 'Cookie found in the item name';
            deferred.reject(result);
        }
        return deferred.promise;
    };

    svc.checkQuantity = function (Quanity) {
        var result = { message: "" };
        var deferred = $q.defer();
        if (Quanity <= 5) {
            result.message = 'valid quantity';
            deferred.resolve(result);
        } else {
            result.message = 'Item quantity can not be greater than 5';
            deferred.reject(result);
        }
        return deferred.promise;
    };
}