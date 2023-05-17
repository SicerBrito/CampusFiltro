import { newProducto } from "../apiConnection/API.js";
(function(){
    const formularioPro = document.querySelector('#formularioPro')
    formularioPro.addEventListener('submit' , crearProducto)

    function crearProducto() {
        const nombre = document.querySelector('#nombrePro').value;
        const precio = document.querySelector('#precioP').value;
        const stock = document.querySelector('#stock').value;
        const categoriaId = document.querySelector('#selectCategoria').value
        
        const producto = {
            nombre,
            precio,
            stock,
            categoriaId
        }

        if (validamos(producto)) {
            alert('Todos los campos son necesarios')
        }
        newProducto(producto)
    }

    function validamos(doc) {
        return !Object.values(doc).every(element => element !== "")
    }
})()