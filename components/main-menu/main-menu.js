export class MainMenu extends HTMLElement{
    constructor(){
        super();
        this.render();
    }
    render(){
        this.innerHTML=  `
        <h1>hola mundo</h1>
        <a href="#">categories</a>
        <a href="#">Pruducts</a>
        <a href="#">Customers</a>
        <a href="#">Users</a>
        <a href="#">Sales</a>
        <a href="#">Shopping</a>
        <a href="#">Reports</a>`
    }
}
customElements.define("main-menu",MainMenu);