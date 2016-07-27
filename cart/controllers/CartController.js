'use strict';
var cartModule = angular.module("cart", ['ui.bootstrap']);

//Cart Controller
cartModule.controller("CartController", CartController);
CartController.$inject = ['$scope', 'cartService'];
function CartController($scope, cartService) {
    cartService.getProductsInCart().then(function (products) {
        $scope.products = [];
        angular.forEach(products['productsInCart'], function (product, k) {
            $scope.products.push(new Product(product));
        });
        $scope.cart = new Cart($scope.products);
    });
};
