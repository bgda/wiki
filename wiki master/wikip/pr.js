//window.onload = document.getElementById("fi").focus();

function boton() {
    field = fi.value;
    if (field== "1") {
        r = document.getElementById("rem");
        document.getElementById("body").removeChild(r);
        var imagen = document.createElement("img");
        imagen.src= "wiki master/wikip/ejemplo.jpg";
        document.getElementById("body").appendChild(imagen);
    }
}

var tg = document.getElementsByTagName("input")[0];
window.onload = function ij(){tg.focus();}


var chus = document.getElementById("di");

/*
<img src="ejemplo.jpg" id="efe" alt="">
    <script src="pr.js"></script>*/