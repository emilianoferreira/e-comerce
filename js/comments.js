var comments = [];


function getDate() {
    let date = new Date();
    let formatDate = date.getDate().toString().padStart(2, '0') + "/" + (date.getMonth() + 1).toString().padStart(2, '0') + "/" + date.getFullYear().toString();

    return formatDate;
}

function saveComment() {
    let comment = {
        message: document.getElementById("textarea").value,
        date: getDate(),
        
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
                    <dt>${comment.user}-${comment.date}-${drawStars(comment.score)}</dt>
                        <dd>${comment.message}</dd>
                </dl>
            </div>`
    }
document.getElementById("comentarios").innerHTML = html;
document.getElementById("formulario").reset();
}

