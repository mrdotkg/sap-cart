'use strict';
var cartModule = angular.module("cart");

cartModule.controller("modalController", ModalController);
ModalController.$inject = ['$scope', '$uibModal'];

function ModalController($scope, $uibModal) {

    $scope.open = function (size) {
        var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: 'common/modal/product-modal.html',
            controller: 'ModalInstanceCtrl',
            size: size,
            resolve: {
                product: function () {
                    return $scope.product;
                }
            }
        });

        modalInstance.result.then(function (selectedItem) {
            $scope.selected = selectedItem;
            console.log(selectedItem);
        }, function () {
            // $log.info('Modal dismissed at: ' + new Date());
        });
    };

    $scope.toggleAnimation = function () {
        $scope.animationsEnabled = !$scope.animationsEnabled;
    };
}


cartModule.controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, product) {

    $scope.product = product;

    $scope.ok = function () {
        $uibModalInstance.close($scope.product);
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
});