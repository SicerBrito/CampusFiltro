import {getClientes , deleteCliente} from "../apiConnection/API.js"



    const listar = document.querySelector('.listaCliente')
    document.addEventListener('DOMContentLoaded' , obtenerCliente)
    listar.addEventListener('click' , quitarCliente)

    async function obtenerCliente() {
        const clientes = await getClientes();
        console.log(clientes);
        clientes.forEach(cliente => {
            const {id,  imagen , nombre , direccion , telefono} = cliente
            const cuerpo = document.querySelector('tbody')
            const row = document.createElement('tr')
            row.innerHTML = `
            <td>${id}</td>
            <td><img src="img/${imagen}" class="cuenta"></td>
            <td>${nombre}</td>
            <td>${telefono}</td>
            <td>${direccion}</td>
            <td><button type="button" data-cliente="${id}" class="delete btn btn-danger" >Borrar</button></td>
            `
            cuerpo.appendChild(row)
        });
    }
    function quitarCliente(e) {
        if (e.target.classList.contains('delete')) {
            const clienteId = Number(e.target.dataset.cliente)
            console.log(clienteId);
            const confirmar = confirm('Seguro quieres eliminar el cliente')
            if (confirmar) {
                deleteCliente(clienteId)
            }
        }
    }

