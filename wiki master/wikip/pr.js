
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
/*
<img src="ejemplo.jpg" id="efe" alt="">
<script src="pr.js"></script>*/
window.onload=setTimeout(() => {
    document.getElementsByTagName("input")[0].focus();
}, 5);