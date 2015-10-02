function crearTabla() {
    var tabla = document.createElement("table");
    tabla.setAttribute("border", "1");
    for (var i = 0; i < 5; i++) {
        var fila = document.createElement("tr");
        fila.setAttribute("style", "color:red;");
        var c1 = document.createElement("td");
        var t1 = document.createTextNode("Fila " + i + " col 1");
        c1.appendChild(t1);

        var c2 = document.createElement("td");
        var t2 = document.createTextNode("Fila " + i + " col 2");
        c2.appendChild(t2);

        var c3 = document.createElement("td");
        var t3 = document.createTextNode("Fila " + i + " col 3");
        c3.appendChild(t3);
        c3.setAttribute("class", "verde");
        fila.appendChild(c1);
        fila.appendChild(c2);
        fila.appendChild(c3);

        tabla.appendChild(fila);
    }

    document.body.appendChild(tabla);
    
    var link = document.getElementById("lnk");
    link.parentNode.removeChild(link);
}

function cambiarImagen(e) {
    var img = document.getElementById("imagen");
    e.target.appendChild(img);


}


document.getElementById("lnk").onclick = crearTabla;
var capas = document.querySelectorAll("div");
for (var i = 0; i < capas.length; i++) {
    capas[i].onclick = cambiarImagen;
}