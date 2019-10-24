angular.
module('core.carrito').
factory('Carrito',
    function () {
        return {
            producto: [],
            getProducto: function () {
                return this.producto;
            },
            setProducto: function (msg) {
                this.producto = msg;
            }
        }; //end return
    } // end function
);