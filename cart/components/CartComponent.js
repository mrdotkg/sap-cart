'use strict';
function Cart(items) {

    /** private member variables */
    this.items = items;

    /** private methods */
    this._updateCart = function () {
        this.itemCount = this.items.length;
        this.subTotal = this._calculateSubTotal();
        this.discount = this._calculateDiscount(this.itemCount);
        this.grandTotal = this._calculateGrandTotal();
    };

    this._calculateSubTotal = function () {
        var subTotal = 0.00;
        angular.forEach(this.items, function (item, k) {
            subTotal += item.getProductDetails().p_price * item.getProductDetails().p_quantity;
        });
        return subTotal;
    };

    this._calculateDiscount = function (count) {

        var discountRule = RESOURCES.DISCOUNT_RULES.filter(function (el) {
            return el.min <= count && el.max >= count;
        })[0];

        discountRule = (discountRule == undefined) ? false : discountRule;

        if (discountRule) {
            var amount = 0;
            if (discountRule.type == '%') amount = this.subTotal * discountRule.discount / 100;

            return {amount: amount, rule: discountRule};
        }
        return false;
    };

    this._calculateGrandTotal = function () {

        var grandTotal = this.subTotal;

        if (this.discount) grandTotal = (this.subTotal - this.discount.amount);

        return grandTotal < 0 ? 0 : grandTotal;
    };

    this._itemFound = function (id) {
        return this.items.map(function (el) {
            return el.getProductDetails().p_id;
        }).indexOf(id);
    };

    this._updateCart();

}

Cart.prototype = {
    constructor: Cart,

    /** public methods */
    addItem: function (item) {
        if (item) {
            if (this._itemFound(item.getProductDetails().p_id) >= 0) {
                this.removeItem(item.getProductDetails().p_id);
            }
            this.items.push(item);

            this._updateCart();
            return this.getCartDetails();
        }
        return false;
    },
    removeItem: function (id) {
        var itemIndex = this._itemFound(id);
        if (itemIndex >= 0) {
            this.items.splice(itemIndex, 1);

            this._updateCart();
            return this.getCartDetails();
        }
        return false;
    },
    getGrandTotal: function () {
        return this.grandTotal;
    },
    getSubTotal: function () {
        return this.subTotal;
    },
    getCartDetails: function () {
        return this;
    }
};

