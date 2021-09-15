//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

// entrega 3, mostrar hasta img, vinculado a products info 
// en todos los productos se van a mostrar la misma data al ser un json
// peticion y mostrar en pantalla la data del json 

//parte 2. cargar products info url para mostrar toda la data de cada comentario del json 
// Desafiate ponerle estrellas al score y mostrar el comentario mostrado  con inner+= para no perder lo que esta funcion hora data time o 

fetch(PRODUCT_INFO_URL)
    .then(respuesta => respuesta.json())
    .then(datos => {//del elemento insertar el dato del json
        document.getElementById('name').innerHTML += datos.name;
        document.getElementById('description').innerHTML += datos.description;
        document.getElementById('cost').innerHTML += datos.cost;
        document.getElementById('currency').innerHTML += datos.currency;
        document.getElementById('soldCount').innerHTML += datos.soldCount;
        document.getElementById('category').innerHTML += datos.category;
        document.getElementById('images').innerHTML += datos.images + ".png";
        document.getElementById('relatedProducts').innerHTML += datos.relatedProducts;
    })
    .catch(error => alert("Hubo un rerror: " + error));


fetch(PRODUCT_INFO_COMMENTS_URL)
    .then(response => response.json())
    .then(datos => {
        document.getElementById('score').innerHTML += datos.score;
        document.getElementById('descriptionC').innerHTML += datos.description;
        document.getElementById('user').innerHTML += datos.user;
        document.getElementById('dateTime').innerHTML += datos.dateTime;
    })
    .catch(error => alert("Hubo un rerror: " + error));

document.addEventListener("DOMCsontentLoaded", function (e) {

});

/*
funcion para que dependiendo del puntaje el color de las estrellas if span<2 .class color rojo

bootstrap 4.3 copiar y pegar los links dados en download en órdenes link en head y scripts al final de body
jquery y popper también */