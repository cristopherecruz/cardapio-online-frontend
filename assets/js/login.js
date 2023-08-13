function loginManual() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if(username && password) {
        alert("Login manual realizado (simulação)");
    } else {
        alert("Por favor, preencha todos os campos!");
    }
}

function loginFacebook() {
    alert("Login com Facebook (simulação)");
}

function loginGoogle() {
    alert("Login com Google (simulação)");
}