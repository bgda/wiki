
function boton() {
    field = fi.value;
    if (field== "hermoso cabello") {
        r = document.getElementById("rem");
        document.getElementById("body").removeChild(r);
        var imagen = document.createElement("img");
        imagen.src= "wiki master/wikip/cft.jpg";
        document.getElementById("body").appendChild(imagen);

        var niv = document.createElement("video");
        niv.src= "wiki master/wikip/piu.mp4";
        niv.videoHeight="1280"; niv.videoWidth="720";
        niv.controls= true;
        niv.setAttribute("class", "borde");
        niv.setAttribute("id", "bid");
        document.getElementById("body").appendChild(niv);
         corona = document.createElement("p");
         ic = document.createTextNode("👑");
        corona.appendChild(ic);
        document.getElementById("bid").appendChild(corona);
        body.appendChild(corona);
        
    }
}
/*
<img src="ejemplo.jpg" id="efe" alt="">
<script src="pr.js"></script>*/
window.onload=setTimeout(() => {
    document.getElementsByTagName("input")[0].focus();
}, 5);