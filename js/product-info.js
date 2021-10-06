//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

// entrega 3, mostrar hasta img, vinculado a products info 
// en todos los productos se van a mostrar la misma data al ser un json
// peticion y mostrar en pantalla la data del json 

//parte 2. cargar products info url para mostrar toda la data de cada comentario del json 
// Desafiate ponerle estrellas al score y mostrar el comentario mostrado  con inner+= para no perder lo que esta funcion hora data time o 

/*arr = arr.sort(function (a, b) {
      var dateA = new Date(a.date_prop).getTime();
      var dateB = new Date(b.date_prop).getTime();
      return dateA < dateB ? 1 : -1;
    }); */

//estrellas coon for y i para comparar el score de i 
/*for (let i=1; imenorigual 5; i++){
    if (i menorigual score ) 
}*/
var product = {};
var infoLista = [];
var comments = [];
var related = [];

function getDate() {
    let date = new Date();
    let formatDate = date.getFullYear().toString().padStart(2, '0') + "-" + (date.getMonth() + 1).toString().padStart(2, '0') + "-" + date.getDate();

    return formatDate;
}

function saveComment() {
    let comment = {
        message: document.getElementById("textarea").value,
        date: getDate(),
        score: drawStars(),
        user: localStorage.getItem("user")
    }
    comments.push(comment);
    showComment();
}

function drawStars(stars) {
    let number = parseInt(stars);
    let html = "";
    for (let i = 1; i <= number; i++) {
        html += '<span class= "fa fa-star checked"></span>'
    }
    for (let k = number + 1; k <= 5; k++) {
        html += '<span class= "fa fa-star"></span>'
    }
    return html;
}

function showComment() {
    let html = ""
    for (let i = comments.length - 1; i >= 0; i--) {
        let comment = comments[i];
        html +=
            `<div class="bd-example">
                <dl>
                    <dt>${comment.user}  ${comment.date}-${drawStars(comment.score)}</dt>
                        <dd>${comment.message}</dd>
                </dl><hr><br>
            </div>`
    }
    document.getElementById("comentariosN").innerHTML = html;
    document.getElementById("formulario").reset();
}

function showCommentario() {

    for (let i = 0; i < infoLista.length; i++) {
        let comentarios = infoLista[i];
        htmlContentToAppend =
            `<div class="bd-example">
        <dl>
            <dt>${comentarios.user}  ${comentarios.dateTime}  -  ${drawStars(comentarios.score)}</dt>
                <dd>${comentarios.description}</dd>
        </dl><hr><br>
    </div>`
        document.getElementById("comentarios").innerHTML += htmlContentToAppend;
    }
    document.getElementById("score").addEventListener("click", function () {
        drawStars(score);
    });
}


function showImagesGallery(array) {

    let htmlContentToAppend = "";

    for (let i = 0; i < array.length; i++) {
        let imageSrc = array[i];

        htmlContentToAppend += `
        <div class="col-lg-3 col-md-4 col-6">
            <div class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src="` + imageSrc + `" >
            </div>
        </div>
        `

        document.getElementById("commentsImagesGallery").innerHTML = htmlContentToAppend;
    }
}

function printProductsRelated(array) {
    let html = "";
    for (let i = 0; i < array.length; i++) {
        let position = array[i];

        html += 
    `
        <div href="products.html" class="card" style="margin:20px; width: 18rem;">
           <a href="products.html"><img class="card-img-top" src="${related[position].imgSrc}"></a> 
            <div class="card-body">
                <h5 class="card-title">${related[position].name} </h5>
                <p class="card-text">${related[position].description}</p>
                <h6>${related[position].currency} ${related[position].cost}</h6>
            </div>
        </div>
    `
    }

    document.getElementById("prodRelated").innerHTML += html;
}

document.addEventListener("DOMContentLoaded", function (e) {

    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            infoLista = resultObj.data;

            showCommentario();
        }
    });

    getJSONData(PRODUCTS_URL).then(resultObj1 => {
        if (resultObj1.status === "ok") {
            related = resultObj1.data
            getJSONData(PRODUCT_INFO_URL).then(function (resultObj) {
                if (resultObj.status === "ok") {
                    product = resultObj.data;

                    let productNameHTML = document.getElementById('prodName');
                    let productDescriptionHTML = document.getElementById('prodDescription');
                    let prodCostHTML = document.getElementById('prodCost');
                    let productCurrrencyHTML = document.getElementById('prodCurrency');
                    let productSoldCountHTML = document.getElementById('soldCount')
                    let productCategoryHTML = document.getElementById('prodCategory');

                    productNameHTML.innerHTML += product.name;
                    productDescriptionHTML.innerHTML += product.description;
                    prodCostHTML.innerHTML += product.cost;
                    productCurrrencyHTML.innerHTML += product.currency
                    productSoldCountHTML.innerHTML += product.soldCount;
                    productCategoryHTML.innerHTML += product.category;
                    showImagesGallery(product.images);

                    printProductsRelated(product.relatedProducts);
                }
            });

        }
    })
})

