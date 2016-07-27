'use strict';
var cartModule = angular.module("cart");

//cart items API
cartModule.factory('cartService', function ($http) {
    return {
        getProductsInCart: function () {
            return $http.get(RESOURCES.CART_PRODUCT_URL)
                .then(function (result) {
                    return result.data;
                });
        }
    }
});