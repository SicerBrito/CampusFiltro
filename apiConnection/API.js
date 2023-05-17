//-------------------categorias

const url2 = "http://localhost:3000/categories"

export const getcategorias = async () => {
    try {
        const resultado = await fetch(url2)
        const categorias = await resultado.json()
        return categorias
    } catch (error) {
        console.log(error);
    }
}

export const newCategoria = async categoria =>{
    console.log(categoria);
    try {
        await fetch(url2, {
            method: 'POST',
            body: JSON.stringify(categoria),
            headers: {
                'Content-Type':'application/json'
            }
        })
        window.location.href= '../html/categories.html'
    } catch (error) {
        error = 'No sirvio ni mrd'
        console.log(error);
    }
}

export const deleteCategoria = async id =>{
    try {
        await fetch(`${url2}/${id}`, {
            method: 'DELETE'
        })
    } catch (error) {
        console.log(error);
    }
}   

//------------PRODUCTOS

const url3 = "http://localhost:3000/products"

export const getProductos = async ()=>{
    try {
        const respuestaP = await fetch (url3)
        const producto = await respuestaP.json();
        return producto
    } catch (error) {
        console.log(error);
    }
}

export const newProducto = async producto =>{
    try {
        await fetch (url3 , {
            method: 'POST',
            body: JSON.stringify(producto),
            headers:{
                "Content-Type": "application/json"
            } 
        })
        window.location.href = "../html/pruducts.html"
    } catch (error) {
        console.log(error);
    }
}

export const deleteProductos = async id =>{
    try {
        await fetch(`${url3}/${id}`, {
            method: 'DELETE'
        })
    } catch (error) {
        console.log(error);
    }
}

//----------------cliente

const url4 = "http://localhost:3000/customers"

export const getClientes = async()=>{
    try {
        const respuestaCliente = await fetch(url4)
        const datasss = await respuestaCliente.json();
        return datasss
    } catch (error) {
        console.log(error);
    }
}

export const newClientes = async cliente=>{
    try {
        await fetch (url4 , {
            method: 'POST',
            body: JSON.stringify(cliente),
            headers:{
                "Content-Type": "application/json"
            } 
        })
        window.location.href = "../html/customers.html"
    } catch (error) {
        console.log(error);
    }
}

export const deleteCliente = async id=>{
    try {
        await fetch(`${url4}/${id}`, {
            method: 'DELETE'
        })
    } catch (error) {
        console.log(error);
    }
}
