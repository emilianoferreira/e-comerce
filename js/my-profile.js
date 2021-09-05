//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
function usuario(){
 let user = localStorage.getItem("userName")
 let welcome = `Bienvenido @{user}`
};

document.addEventListener("DOMContentLoaded", function (e) {
    document.getElementById("userName").innerHTML = "Bienvenid@ " + localStorage.userName;
});