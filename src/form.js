
let form = document.getElementById("form-email");
let mailWindow = document.getElementById("correo");

form.addEventListener("submit", onsubmit);

function onsubmit(event) {
    event.preventDefault()
    console.log(form.elements["nombre"].value);
    mailWindow.setAttribute("href", "mailto:madelintania@gmail.com?subject=" + form.elements["nombre"].value + "&body=test")
    mailWindow.click()

}


