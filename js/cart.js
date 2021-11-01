//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
var productosCarrito = [];

function mostrarProductos(array) {
    let html = ""
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        html +=
            `
            <div class="container" style="background-color: lightgreen;">
            <div class="row">
              <div class="col-5">Productos</div>
              <div class="col-2">Precio</div>
              <div class="col-2">Cantidad</div>
              <div class="col-3-">Subtotal</div>
              <div class="w-100"></div>
              <div class="col-5"><img style="height: 100px;" src="${element.src}"></div>
              <div class="col-2"> ${element.currency}${element.unitCost}</div>
              <div class="col-2" ><input style=" width: 100px;" type="number" class="productCount" id="${[i]}" data-cost="${element.unitCost}" value=${element.count}></input></div>
              <div class="col-3" id="subtotal${[i]}" currency="${element.currency}" data-subtotal="0">${element.currency} ${element.count * element.unitCost}</div>
            </div>
          </div>
    
    `
    }

/*<div>
        <table>
        <tr >
            <th>Producto</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Subtotal</th>
        </tr>
        <tr>
            <td><img style="height: 120px;" src="${element.src}"> ${element.name}</td>
            <td>  ${element.currency}${element.unitCost}</td>
            <td><input type="number" class="productCount" id="${[i]}" data-cost="${element.unitCost}" value=${element.count}></input></td>
            <td id="subtotal${[i]}" currency="${element.currency}" data-subtotal="0">${element.currency} ${element.count * element.unitCost}</td>
        </tr>
        </table>
    </div> */
    document.getElementById("productos_carrito").innerHTML += html
    juntarData();
}

function juntarData() {
    let inputs = document.getElementsByClassName("productCount");
    for (let input of inputs) {
        input.addEventListener("change", (ev) => {
            let cost = parseFloat(ev.target.dataset.cost);
            let count = parseInt(ev.target.value);
            let id = ev.target.getAttribute("id");
            let currency = ev.target.currency

            subtotal(cost, count, id, currency)
        })
    }
}

function subtotal(cost, count, id, currency) {
    console.log(currency)
    let subtotal = count * cost
    if (subtotal >= 0) {
        document.getElementById("subtotal" + id).innerHTML = + subtotal;
    }
    else {
        alert("Ingrese como minimo 1 articulo o deje la bandeja en 0")
        subtotal = 0
    }

}


document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(CART_INFO_URL).then(resultObj => {
        if (resultObj.status === "ok") {
            productosCarrito = resultObj.data.articles
            console.log(productosCarrito);
            mostrarProductos(productosCarrito);
        }
    })
});
/*{
    "articles": [
        {
            "name": "Pino de olor para el auto",
            "count": 2,
            "unitCost": 100,
            "currency": "UYU",
            "src": "img/tree1.jpg"
        }
        asdasd
*/
