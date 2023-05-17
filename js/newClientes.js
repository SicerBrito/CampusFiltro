import { newClientes } from "../apiConnection/API.js";


    const newCli = document.querySelector('#formularioClientes')
    newCli.addEventListener('submit' , añadirClientes)

    function añadirClientes() {
        const nombre = document.querySelector('#nombreCli').value;
        const direccion = document.querySelector('#direccion').value;
        const telefono = document.querySelector('#telefono').value;
        const imagen = document.querySelector('#imagen').value;


        const cliente = {
            imagen,
            nombre,
            direccion,
            telefono
        }

        if (validar(cliente)) {
            alert('Todos los campos son necesarios')
        }
        else{
            newClientes(cliente)
        } 
    }

    function validar(doc) {
        return !Object.values(doc).every(empleado2 => empleado2 !== "")
    }
