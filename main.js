alert("Sistema de inventario");

function solicitarEmpleado() {
    let nombreEmpleado = prompt("Ingresar nombre de empleado");
    alert("Bienvenido " + nombreEmpleado);
}

solicitarEmpleado();

function menuInventario() {
    let solicitudSistema = prompt("¿Qué datos quieres conocer? (Toma en cuenta las siguientes opciones: productos, precios, venta)");

    while (solicitudSistema !== "ESC") {
        switch (solicitudSistema) {
            case "productos":
                const arrayProductosExistente = ["pantalla", "tinta", "racleta", "emulsión"];
                alert("Estos son los productos que hay en el almacén: " + arrayProductosExistente.join(", "));

                let productoPregunta = prompt("¿Quieres agregar un nuevo producto al almacén?");

                if (productoPregunta === "si") {
                    // Pedir al usuario que ingrese el nombre del producto
                    let nuevoProducto = prompt("Por favor, ingresa el nombre del nuevo producto:");

                    // Agregar el nuevo producto al array solo si se proporciona un nombre de producto válido
                    if (nuevoProducto) {
                        arrayProductosExistente.push(nuevoProducto);
                        alert("¡El producto se ha agregado correctamente!");
                    } else {
                        alert("No se proporcionó un nombre de producto válido. El producto no se agregó.");
                    }
                } else {
                    alert("No se agregó ningún producto al almacén.");
                }
                break;

            case "precios":
                const arrayPrecioExistente = ["pantalla $250.00", "tinta $110.00", "racleta $90.00", "emulsión $180.00"];
                alert("Estos son los productos que hay en el almacén: " + arrayPrecioExistente.join(", "));

                let precioPregunta = prompt("¿Quieres agregar un nuevo precio a un producto?");

                if (precioPregunta === "si") {
                    // Pedir al usuario que ingrese el nuevo precio del producto
                    let nuevoPrecio = prompt("Por favor, ingresa el precio nuevo del producto:");

                    // Agregar el nuevo precio al array solo si se proporciona un precio válido
                    if (nuevoPrecio) {
                        arrayPrecioExistente.push(nuevoPrecio);
                        alert("¡El precio se ha agregado correctamente!");
                    } else {
                        alert("No se proporcionó un precio válido. El precio no se modificó.");
                    }
                } else {
                    alert("No se agregó ningún precio nuevo.");
                }
                break;

            default:
                alert("No se encontró la opción");
                break;
        }
        solicitudSistema = prompt("¿Qué datos necesitas conocer? (Toma en cuenta las siguientes opciones: productos, precios, venta)");
    }
}

menuInventario();
