export class CustomerForm extends HTMLElement{
    constructor(){
        super();
        this.render();
    }
    render(){
        this.innerHTML = `
        <form>
            <label for="Categoria">Categoria:</label>
            <input id="Categoria" name="Categoria">

            <label for="name">Nombre:</label>
            <input type="text" id="name" name="name">

            <label for="cedula">Cedula:</label>
            <input type="text" id="cedula" name="cedula">

            <label for="email">Correo electrónico:</label>
            <input type="email" id="email" name="email">

            <button type="submit">Enviar</button>

            <ul id="messages-list"></ul>
        </form>
        <div  style="display: flex; justify-content: flex-end;">
            <a href="../myData/customers.html"><button>Agregar</button></a>
        </div>

        <div style="display: flex; justify-content: flex-end; class="container mt-4 text-center">
            <a href="#" class="btn btn-success" id="btnGuardar">Guardar Cliente</a>
        </div>`
    }
};

customElements.define("customer-form",CustomerForm);