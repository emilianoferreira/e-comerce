//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e){
    function validar(){
 
    let nombre = document.getElementById("user").value;
    let pass = document.getElementById("pass").value;
    if((nombre !=="")&& (pass!== "")){
       
        localStorage.setItem('nombreUsuario', nombre); //Guarda usuario en localstorage
        
        window.location.href="products.html";
     
    }
    else{
        alert("Para continuar, complete los campos con más de 8 dígitos c/u");
    }}});


    document.addEventListener("DOMContentLoaded",function(e){  
        document.getElementById("nombreUsuario").innerHTML="Bienvenid@ " +localStorage.nombreUsuario;
     })
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
