import { getcategorias,deleteCategoria } from "../apiConnection/API.js";

(function(){
    const listaCategorias = document.querySelector('.listaCategorias')
    document.addEventListener('DOMContentLoaded',
    showCategorias)
    listaCategorias-addEventListener('click', confirmDeleteCategoria)
    async function showCategorias(){
        const categoria = await getcategorias()
        console.log(categoria);
        const contenedorcategoria = document.querySelector('#tbodyC')
        categoria.forEach((catego)=>{
            const {id, nombre} = catego
            const rowsCas = document.createElement('tr')
            rowsCas.innerHTML = `
            <th scope="row">${id}</th>
            <td>${nombre}</td>
            <td><button type="button" data-categoria="${id}" class="btn btn-danger delete1">Borrar</button></td>

            `
            contenedorcategoria.appendChild(rowsCas)
        })  
    }
    function confirmDeleteCategoria(r){
        if (r.target.classList.contains('delete1')){
            /* console.log('diste click al boton delete'); */
            const categoriaId = parseInt(r.target.dataset.categoria)
            const confirmar1 = confirm('¿deseas eliminar la categoria?')
            if (confirmar1){
                deleteCategoria(categoriaId);
            }
        }
    }
})()