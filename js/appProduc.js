import { getProductos , deleteProductos , getcategorias } from "../apiConnection/API.js";

(function(){

    const listar = document.querySelector('.listaProducto')
    document.addEventListener('DOMContentLoaded' , ()=>{
        optenProducto()
        selectCate()
    })
    listar.addEventListener('click' , quitarProducto)

    async function selectCate(){
        const categorias = await getcategorias()
        categorias.forEach((optionCategoria)=>{
            const opcion = document.createElement('option');
            opcion.value = optionCategoria.nombre;
            opcion.textContent = optionCategoria.nombre;
            document.querySelector('#selectCategoria').appendChild(opcion)    
})
    }


    async function optenProducto() {
        const producto = await getProductos();
        console.log(producto);
        producto.forEach(cliente => {
            const {id , nombre , precio , categoriaId, stock} = cliente
            const contenedorProducto = document.querySelector('#tbodyP')
            const rowProduc = document.createElement('tr')
            rowProduc.innerHTML = `
            <td>${id}</td>
            <td>${categoriaId}</td>
            <td>${nombre}</td>
            <td>${precio}</td>
            <td><button type="button" data-producto="${id}" class="delete btn btn-danger" >Borrar</button></td>
            `
            contenedorProducto.appendChild(rowProduc)
        });
        /* colar(); */
    }

    /* const colar = ()=>{
        document.querySelectorAll('.delete').forEach((val,id)=>{
            val.addEventListener('click',(e)=>{
                const productoId = Number(e.target.dataset.producto)
                const confirmar = confirm('Seguro quieres eliminar el producto')
                if (confirmar) {
                    console.log(productoId);
                    deleteProductos(productoId)
                }
                e.preventDefault();
                e.stopPropagation()
            })
        })

    } */
    function quitarProducto(e) {
        if (e.target.classList.contains('delete')) {
            const productoId = Number(e.target.dataset.producto)
            console.log(productoId);
            const confirmar = confirm('Seguro quieres eliminar el producto')
            if (confirmar) {
                deleteProductos(productoId)
            }
        }
    }
})()