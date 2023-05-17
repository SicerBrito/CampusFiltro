import './components/main-menu/main-menu.js'
import './components/forms/customer-form.js'



export const postMethod = async function(urlApi, data) {
    const response = fetch(urlApi, {
        method : 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-type' : 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response;
};


export const deleteMethod = async function(urlApi) {
    console.log('heyy');
    const response = fetch(urlApi, {
        method : 'DELETE',
        headers: {
            'Content-Type' : 'application/json'
        }
    });
    return response;
};