var RESOURCES = function () {

    return {

        CART_PRODUCT_URL: 'https://api.myjson.com/bins/19ynm&callback=callbackFN',

        DISCOUNT_RULES: [
            {min: '3', max: '3', type: '%', discount: '5', message: '5% Discount Applied :-)'},
            {min: '4', max: '6', type: '%', discount: '10', message: '10% Discount Applied :-))'},
            {min: '10', max: Infinity, type: '%', discount: '25', message: '25% Discount Applied :-)))'},
        ],

        SIZE_OPTIONS : [1,2,3,4,5]
    };
}();