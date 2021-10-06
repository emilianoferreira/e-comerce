//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.


function validar() {
    let user = document.getElementById("user").value; // Setea la variable nombre con el usuario ingresado en el login
    let pass = document.getElementById("pass").value;

    if ((user !== "") && (pass !== "") && (user.length >= 6 && user.length <= 8) && (pass.length >= 6 && pass.length <= 8)) {
        
        setUser();
        window.location.href = "products.html";
    }
    else {
        alert("Para continuar, complete los campos con 6 u 8 dígitos c/u");
        window.location.href = "login.html";
    }
};

function setUser() {
    localStorage.setItem("user", document.getElementById("user").value); //Guarda usuario en localstorage con key "user"
};


document.addEventListener("DOMContentLoaded", function (e) {

});

/*
document.addEventListener("DOMContentLoaded", function (e) {
    function login() {
        document.getElementById("btnLogin").addEventListener("click", validar);
    }

    function inicializar() {
        document.addEventListener("DOMContentLoaded", login)
    };
    window.onload = inicializar;
});
/*function validar(){

    let nombre = document.getElementById("user").value;
    let pass = document.getElementById("pass").value;
    if((nombre !=="")&& (pass!== "")){

        localStorage.setItem('nombreUsuario', nombre); //Guarda usuario en localstorage

        window.location.href="products.html";

    }
    else{
        alert("Para continuar, complete los campos con más de 8 dígitos c/u");
    }

}
function validar() {
        var usuario = document.getElementById("user").value
        var contraseña = document.getElementById("pass").value
        if (8 >= usuario.length >= 6 && 8 >= contraseña.length >= 6) {
            window.location.href= "products.html";
        } else {
            alert("Complete los campos para dasingresar");
        }
    }



/*document.addEventListener("DOMContentLoaded", function (e) {
    function login() {
        document.getElementById("btnLogin").addEventListener("click", validar);
    }

    function validar() {
        var usuario = document.getElementById("user").value
        var contraseña = document.getElementById("pass").value
        if (8 >= usuario.value.length >= 6 && 8 >= contraseña.value.length >= 6) {
            location.replace("products.html")
        } else {
            alert("Complete los campos para ingresar");
        }
    }

    function inicializar() {
        document.addEventListener("DOMContentLoaded", login)
    };

    window.onload = inicializar;
});
*/
