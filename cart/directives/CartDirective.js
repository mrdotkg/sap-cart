'use strict';
var cartModule = angular.module("cart");

cartModule.directive('productList', function () {
    return {
        restrict: 'E',
        scope: false,
        templateUrl: 'cart/templates/product.html'
    }
});

cartModule.directive('grandTotal', function () {
    return {
        restrict: 'E',
        scope: false,
        templateUrl: 'cart/templates/tax.html'
    }
});
