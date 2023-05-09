let form = document.querySelector("form");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  let name = form.elements.name.value;
  let email = form.elements.email.value;
  let subject = form.elements.subject.value;
  let message = form.elements.message.value;

  let formData = {
    name: name,
    email: email,
    subject: subject,
    message: message
  };

  let data = JSON.parse(localStorage.getItem("formData")) || [];
  data.push(formData);
  localStorage.setItem("formData", JSON.stringify(data));

  form.reset();

  showMessages();
});

function showMessages() {
  let data = JSON.parse(localStorage.getItem("formData")) || [];

  let messagesList = document.querySelector("#messages-list");
  messagesList.innerHTML = "";

  for (let i = 0; i < data.length; i++) {
    let message = data[i];

    let messageItem = document.createElement("li");
    messageItem.innerHTML = "<strong>Nombre:</strong> " + message.name + "<br>" +
                             "<strong>Correo electrónico:</strong> " + message.email + "<br>" +
                             "<strong>Asunto:</strong> " + message.subject + "<br>" +
                             "<strong>Mensaje:</strong> " + message.message + "<br>";

    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Eliminar" ;
    deleteButton.addEventListener("click", function() {
      deleteMessage(i);
    });
    messageItem.appendChild(deleteButton);

    messagesList.appendChild(messageItem);
  }
}

function deleteMessage(index) {
    let data = JSON.parse(localStorage.getItem("formData")) || [];
    data.splice(index, 1);
    localStorage.setItem("formData", JSON.stringify(data));
    showMessages();
}

showMessages();
