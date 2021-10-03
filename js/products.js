//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
const ORDER_ASC_BY_COST = "09";
const ORDER_DESC_BY_COST = "90";
const ORDER_BY_SOLD_COUNT = "Cant."
var currentProductsArray = []; //creo el arreglo vacio donde cargar 
var cuerrentSortCriteria = undefined;
var minCount = undefined;
var maxCount = undefined;

//sortAsc, sortDesc, sortByRel
function sortProducts(criteria, array) {
    let result = [];
    if (criteria === ORDER_ASC_BY_COST) {
        result = array.sort(function (a, b) {/* .sort para ordenar el arreglo de menor a mayor, al ser objetos, que ordene por el campo nombre, ordenándolos con la funcion anónima function(a,b), la cual toma el nombre de a y de b, los compara y si a<b = -1, devuelve a antes que b ordenados   */
            if (a.cost < b.cost) { return -1; }
            if (b.cost < a.cost) { return 1; }
            return 0;/*ambos son iguales, los deja como estan */
        })
    }
    else if (criteria === ORDER_DESC_BY_COST) {
        result = array.sort(function (a, b) {
            if (a.cost > b.cost) { return -1; }
            if (a.cost < b.cost) { return 1; }
            return 0;
        })
    }
    else if (criteria === ORDER_BY_SOLD_COUNT) {
        result = array.sort(function (a, b) {
            if (a.soldCount > b.soldCount) { return -1; }
            if (b.soldCount > a.soldCount) { return 1; }
            return 0;
        })
    }
    return result;

}




function showProductsList() { //funcion  que muestra el json 
    let htmlContentToAppend = "";
    for (let i = 0; i < currentProductsArray.length; i++) {
        let product = currentProductsArray[i];
/*con parseInt convierto el dato con "" en numero entero */
        if (((minCount == undefined) || (minCount != undefined && product.cost >= minCount)) &&
            ((maxCount == undefined) || (maxCount != undefined && product.cost <= maxCount))) {

            htmlContentToAppend += `
        <a href="product-info.html" class="list-group-item list-group-item-action">
            <div class="row"> 
                <div class="col-3">
                    <img src="` + product.imgSrc + `" alt="` + product.description + `" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <h4 class="mb-1">`+ product.name + `</h4>
                        <small class="text-muted">` + product.soldCount + ` artículos vendidos</small>
                    </div>
                    <p class="mb-1">` + product.description + `</p> <br>
                    <h4 class="mb-1">`+ product.currency + " " + product.cost + `</h4>
                </div>
            </div>
        </a>
        `
            document.getElementById("prod-list-container").innerHTML = htmlContentToAppend;
        }
    }
}

function sortAndShowProducts(sortCriteria, categoriesArray) {
    currentSortCriteria = sortCriteria;
     /*la funcion ordena y muestra la categoría, para usar una única función. LLama 2 funciones ordenar y mostar */
    if (categoriesArray != undefined) {
        /*guardó globalmente  el criterio y la lista  */
        currentProductsArray = categoriesArray;
    }
    currentProductsArray = sortProducts(currentSortCriteria, currentProductsArray);
    //Muestro los productos ordenadas
    showProductsList();
}

function buscar() {
    var input, filter, links, h3, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();

    links = document.getElementsByTagName("h3");
    for (i = 0; i < links.length; i++) {
        h3 = links[i];
        txtValue = h3.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            h3.parentNode.parentNode.parentNode.style.display = "";


        } else {
            h3.parentNode.parentNode.parentNode.style.display = "none";

        }
    }
}
document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(PRODUCTS_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            currentProductsArray = resultObj.data;
        }
        showProductsList();
    });

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
    document.getElementById("sortAsc").addEventListener("click", function () {
        sortAndShowProducts(ORDER_ASC_BY_COST);
    });

    document.getElementById("sortDesc").addEventListener("click", function () {
        sortAndShowProducts(ORDER_DESC_BY_COST);
    });

    document.getElementById("sortByRel").addEventListener("click", function () {
        sortAndShowProducts(ORDER_BY_SOLD_COUNT);
    })


    //evento para limpiar el filtro 
    document.getElementById("clearRangeFilter").addEventListener("click", function () {
        document.getElementById("rangeFilterCountMin").value = "";
        document.getElementById("rangeFilterCountMax").value = "";

        minCount = undefined;
        maxCount = undefined;

        showProductsList();
    });

    document.getElementById("rangeFilterCount").addEventListener("click", function () {
        //Obtengo el mínimo y máximo de los intervalos para filtrar por cantidad
        //de productos por categoría.
        minCount = document.getElementById("rangeFilterCountMin").value;
        maxCount = document.getElementById("rangeFilterCountMax").value;

        if ((minCount != undefined) && (minCount != "") && parseInt(minCount) >= 0) {
            minCount = parseInt(minCount);
        }
        else {
            minCount = undefined;
        }

        if ((maxCount != undefined) && (maxCount != "") && (parseInt(maxCount)) >= 0) {
            maxCount = parseInt(maxCount);
        }
        else {
            maxCount = undefined;
        }

        showProductsList();
    });
})