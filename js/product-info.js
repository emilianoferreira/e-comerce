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
function showImagesGallery(array) {

    let htmlContentToAppend = "";

    for (let i = 0; i < array.length; i++) {
        let imageSrc = array[i];

        htmlContentToAppend += `
        <div class="col-lg-3 col-md-4 col-6">
            <div class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src="` + imageSrc + `" alt="">
            </div>
        </div>
        `

        document.getElementById("images").innerHTML = htmlContentToAppend;
    }
}

fetch(PRODUCT_INFO_URL)
    .then(respuesta => respuesta.json())
    .then(datos => {//del elemento insertar el dato del json
        document.getElementById('name').innerHTML += datos.name;
        document.getElementById('description').innerHTML += datos.description;
        document.getElementById('cost').innerHTML += datos.cost;
        document.getElementById('currency').innerHTML += datos.currency;
        document.getElementById('soldCount').innerHTML += datos.soldCount;
        document.getElementById('category').innerHTML += datos.category;
        document.getElementById('images').innerHTML += datos.images;
    })
    .catch(error => alert("Hubo un rerror: " + error));


fetch(PRODUCT_INFO_COMMENTS_URL)
    .then(response => response.json())
    .then(data => {
        document.getElementById('score').innerHTML += data.score;
        document.getElementById('descriptionC').innerHTML += data.description;
        document.getElementById('user').innerHTML += data.user;
        document.getElementById('dateTime').innerHTML += data.dateTime;
    })
    .catch(error => alert("Hubo un rerror: " + error));

document.addEventListener("DOMCsontentLoaded", function (e) {
    
});

/*
funcion para que dependiendo del puntaje el color de las estrellas if span<2 .class color rojo

bootstrap 4.3 copiar y pegar los links dados en download en órdenes link en head y scripts al final de body
jquery y popper también */
/* let contenedorSlider = document.getElementsByClassName("carousel-inner")[0]
    for (let index = 0; index < currentProduct.images.length; index++) {
        const imagen = currentProduct.images[index];
        contenedorSlider.innerHTML +=
        <div class="carousel-item">
        <img src="${imagen}" class="d-block w-100" alt="...">
      </div>

    }
    let imagenes = document.getElementsByClassName("carousel-item")
    imagenes[0].className += " active"
//inserto los controles del slider
    contenedorSlider.innerHTML +=
    </div>
    <a class="carousel-control-prev" href="#carouselProducto" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselProducto" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span></a></div>} */