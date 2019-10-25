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
            setProducto: function (p) {
                //todo cantidad actualizar
                if (this.productos.get(p.id) != undefined) {
                    this.productos.get(p.id).cantidad++;

                } else {
                    this.productos.set(p.id, {
                        "cantidad": 1,
                        "imagen": p.imageUrl,
                        "id": p.id,
                        "name": p.name
                    });
                }
            }
        }; //end return
    } // end function
);