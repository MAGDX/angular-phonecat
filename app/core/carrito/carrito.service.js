angular.
module('core.carrito').
factory('Carrito',
    function () {
        return {
            productos: new Map(),
            getProductos: function () {
                console.debug('getproductos %s', this.productos.size);
                return Array.from(this.productos.values());
            },
            guardarProducto: function (p) {
                console.log('Guardar producto');

                let producto = this.productos.get(p.id);

                if (producto) {
                    producto.cantidad++;
                } else {
                    this.productos.set(p.id, p);
                }
            }
        }; //end return
    } // end function
);