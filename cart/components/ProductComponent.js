'use strict';
function Product(product) {

    this.c_currency = product.c_currency;
    this.p_available_options = product.p_available_options;
    this.p_id = product.p_id;
    this.p_name = product.p_name;
    this.p_originalprice = product.p_originalprice;
    this.p_price = product.p_price;
    this.p_quantity = product.p_quantity;
    this.p_selected_color = product.p_selected_color;
    this.p_selected_size = product.p_selected_size;
    this.p_style = product.p_style;
    this.p_variation = product.p_variation;

}

Product.prototype = {
    constructor: Product,
    setQuantity: function (q) {
        this.p_quantity = q;
    },

    setSelectedColor: function (q) {
        this.p_quantity = q;
    },

    setSelectedSize: function (s) {
        this.p_selected_size = s;
    },

    getProductDetails: function () {
        return this;
    }
};
