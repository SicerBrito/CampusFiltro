export class MainMenu extends HTMLElement{
    constructor(){
        super();
        this.render();
    }
    render(){
        this.innerHTML=  `
        <nav class="navbar navbar-light bg-light">
        <div class="container-fluid cabeza">
          <a class="navbar-brand imga" href="#"><img src="../img/channels.png" alt="" width="90px" height="90px" class="d-inline-block align-text-top">UP TO YOU</a>
        </div>
      </nav>
      <button class="d-flex flex-end">Agregar</button>`
    }
}
customElements.define("main-menu",MainMenu);