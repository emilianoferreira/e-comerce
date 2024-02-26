//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
var productosCarrito = [];
let comisionEnvio = 0.15;
let MONEY_SYMBOL = "$";
let subtotal = 0;
let total = 0;
let productUnitCost = 0;
let metodoDePago = false;
let objetoCompra = {
    nombre: "",
    calle: "",
    departamento: "",
    postal: "",
    numTarj: "",
    codTarj: "",
    venTarj: "",
    subtotal: "",
    envio: "",
    carrito: [],
};

//Aca puedo usar node ##############
function mostrarProductos() {
    let html = ""
    for (let i = 0; i < productosCarrito.length; i++) {
        const element = productosCarrito[i];
        html +=
            `
        <div class="container">
            <div class="row">
              <div class="w-100"></div>
              <div class="col-2"><img style="height: 70px;" src="${element.src}"></div>
              <div class="col-3">${element.name}</div>
              <div class="col-2"> ${element.currency} ${element.unitCost}</div>
              <div class="col-2" ><input style=" width: 100px;" type="number" class="productCount" id="${i}" data-cost="${element.unitCost}" data-currency="${element.currency}" value=${element.count}></input></div>
              <div class="col-1 subtotalProd" id="subtotal${i}"  data-subtotal="0">${element.currency} ${element.count * element.unitCost}</div>
              <div class="col-1"><button type="button" onclick="eliminarArticulo(${i})"><i class="far fa-times-circle" ></i></button></div>
              </div><br>
        </div>
    `


    }

    document.getElementById("productos_carrito").innerHTML = html
    juntarData();
    subtotalCarrito();
    //calcEnvio();
    calcTotlal()
}

function juntarData() {
    let inputs = document.getElementsByClassName("productCount");
    for (let input of inputs) {
        input.addEventListener("change", (ev) => {
            let cost = parseFloat(ev.target.dataset.cost);
            let count = parseInt(ev.target.value);
            let id = ev.target.getAttribute("id");
            let currency = ev.target.getAttribute("data-currency")

            subtotalUnitario(cost, count, id, currency)
            subtotalCarrito()
        })
    }
}

function eliminarArticulo(i) {
    for (let index = 0; index < productosCarrito.length; index++) {

        let cant = document.getElementById(index)
        productosCarrito[index].count = parseInt(cant.value)
    }
    productosCarrito.splice(i, 1)
    mostrarProductos()
}

function subtotalUnitario(cost, count, id, currency) {

    let subtotal = count * cost
    if (subtotal > 0) {
        document.getElementById("subtotal" + id).innerHTML = currency + " " + subtotal;
    }
    else {
        alert("Ingrese como minimo 1 articulo o deje la bandeja en 0")
        subtotal = 0
    }
}

function subtotalCarrito() {
    // obtengo subtotales de html, recorro y sumo... muestro en pantalla y guardo en variable global
    // .value solo obtengo data de inputs +-
    let subtotalesHTML = document.getElementsByClassName("subtotalProd");
    subtotal = 0;
    for (let index = 0; index < subtotalesHTML.length; index++) {
        const element = subtotalesHTML[index].innerHTML //sacar el string para obtener la data del div;
        let elementData = element.split(" ");
        let currency = elementData[0]
        let value = parseFloat(elementData[1])
        if (currency == "USD") {
            value = value * 40
        }

        subtotal += value

    }
    document.getElementById("SubtotalGnral").innerHTML = "UYU " + subtotal;
}

function calcTotlal() {

    let costoEnvioHTML = document.getElementById("comisionEnvio");
    let total = document.getElementById("totalCarrito")

    let costoEnvio = Math.round(comisionEnvio * subtotal);


    costoEnvioHTML.innerHTML = "UYU " + costoEnvio;
    total.innerHTML = "UYU " + (subtotal + costoEnvio);

}


function validarEnvio() {
    //SETEO LOS VALORES INGRESADOS EN VARIABLES PARA COMODIDAD
    let dir = document.getElementById("validationCustom01").value;
    let city = document.getElementById("validationCustom02").value;
    let postal = document.getElementById("validationCustom03").value;

    //VERIFICO QUE LOS CAMPOS NO ESTEN VACIOS
    if ((dir !== "") && (city !== "") && (postal !== "")) {
        return true
    } else {

        alert("Complete todos los campos para continuar")
        return false
    }
}
//CONSULTO PERO PARA LA FORMA DE PAGO
function validarPago() {
    let num = document.getElementById("validationCustom04").value;
    let vencimiento = document.getElementById("validationCustom05").value;
    let codigo = document.getElementById("validationCustom06").value;

    if ((num !== "") && (vencimiento !== "") && (codigo !== "")) {
        objetoCompra.numTarj = num;
        objetoCompra.codTarj = codigo;
        objetoCompra.venTarj = vencimiento;
        return true

    } else {
        alert("Complete todos los campos para continuar")
        return false
    }
}
// function validarPagoBanco() {
//     let cuenta = document.getElementById("validationCustom04").value;

//     if (cuenta !== "") {
//         return true
//     } else {
//         alert("Complete todos los campos para continuar")
//         return false
//     }
// }

// function alertaCompra() {
//     let compraRealizada = `<div id="mensajeCompra" class="alert alert-success" role="alert">
// <h4 class="alert-heading">Well done!</h4>
// <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
// <hr>
// <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
// </div>`

// document.getElementById("alertaCompra").innerHTML += compraRealizada;
// }

// tengo que calcular 
document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(CART_INFO_URL).then(resultObj => {
        if (resultObj.status === "ok") {
            productosCarrito = resultObj.data.articles

            mostrarProductos();
        }
    })
    document.getElementById("tipoEnvio1").addEventListener("click", function () {
        comisionEnvio = 0.05;
        calcTotlal();
    })
    document.getElementById("tipoEnvio3").addEventListener("click", function () {
        comisionEnvio = 0.15;
        calcTotlal();
    })
    document.getElementById("tipoEnvio2").addEventListener("click", function () {
        comisionEnvio = 0.07;
        calcTotlal();
    });

    document.getElementById("btnFormaPago").addEventListener("click", () => {
        let validarMEnvio = validarEnvio()
        if (validarMEnvio) {
            $('#exampleModal').modal('show')
        }
    })

    document.getElementById("guardarFormaPago").addEventListener("click", () => {
        let validarMPago = validarPago()
        if (validarMPago) {
            $('#exampleModal').modal('hide')
            objetoCompra.nombre = localStorage.getItem("user");
            objetoCompra.calle = document.getElementById("validationCustom01").value;
            objetoCompra.departamento = document.getElementById("validationCustom02").value;
            objetoCompra.postal = document.getElementById("validationCustom03").value;
            objetoCompra.subtotal = subtotal;
            objetoCompra.envio = comisionEnvio;
            objetoCompra.carrito = productosCarrito;

        fetch("http://localhost:3000/compraExitosa",{
            method:"POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(objetoCompra) 
        })

            alert("Compra realizada con exito!")
            // window.location.href = "index.html";
            console.log(objetoCompra)
        } else {
            alert("Complete forma de pago")
        }
    })


})
