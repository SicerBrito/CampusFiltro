import { newCategoria } from "../apiConnection/API.js"
const formulario1 = document.querySelector('#formulario')
formulario1.addEventListener('submit', validerteCate)

function validerteCate(e){
    e.preventDefault()
    const  nombre = document.querySelector('#nombreCat').value
    

    const categoria = {
        nombre
    }

    if (validate1(categoria)){
        alert('todos los campos son obligatorios')
        return
    }
    newCategoria(categoria)
}

function validate1(objetos){
    return !Object.values(objetos).every(element=>element !== '')
}