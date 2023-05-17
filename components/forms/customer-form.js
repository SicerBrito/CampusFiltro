export class CustomerForm extends HTMLElement{
    constructor(){
        super();
        this.render();
    }
    render(){
        this.innerHTML = `
        <div class="login-box">
        <h2>Login</h2>
        <form>
            <div class="user-box">
            <input type="text" name="" required="">
            <label>Username</label>
            </div>
            <div class="user-box">
            <input type="password" name="" required="">
            <label>Password</label>
            </div>
            <a href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
            </a>
        </form>
        </div>`
    }
};

customElements.define("customer-form",CustomerForm);