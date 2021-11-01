//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
function guardarDatos() {
    let datos = {
        nombre: document.getElementById("nameProfile").value,
        apellido: document.getElementById("lasName").value,
        email: document.getElementById("email").value,
        edad: document.getElementById("edad").value,
        celular: document.getElementById("cellphone").value,
        dirección: document.getElementById("direccion").value,
    }
    localStorage.setItem("perfil", JSON.stringify(datos));

    


}
function mostrarDatos() {
    let datosLocal = JSON.parse(localStorage.getItem("perfil"));//convierte estructura json en objeto

    console.log(datosLocal);
if(datosLocal === ""){
    
}else{
    document.getElementById("nombreUsuario").innerHTML += datosLocal.nombre;
    document.getElementById("edadUsuario").innerHTML += datosLocal.edad;
    document.getElementById("emailUsuario").innerHTML += datosLocal.email;
    document.getElementById("contactoUsuario").innerHTML += datosLocal.celular; 
}
   
}

document.addEventListener("DOMContentLoaded",()=>{
    mostrarDatos();
} )
