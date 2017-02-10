var ancho = prompt("ancho de la matriz");
var alto1 = prompt("alto de la matriz");


//se obtiene el body
var body = document.getElementsByTagName("body")[0];

//crear una tabla
var tabla = document.createElement("table");
var tblBody = document.createElement("tbody");



//Crear las celdas----------------------
for(var i=0;i<alto1;i++){
  //se crean el alto
var alto = document.createElement("tr");
    for (var j= 0; j < ancho;j++) {
    //Crear un elemento <td> osea el ancho
    // un nodo de texto

      var celda = document.createElement("td");
      var textoCelda = document.createTextNode("0");
      celda.appendChild(textoCelda);
      alto.appendChild(celda);
    }

  //agrega la siguiente hilera al final de la tabla
  tblBody.appendChild(alto);
}
//posiciona el <tbody> debajo del elemento <table>
tabla.appendChild(tblBody);
body.appendChild(tabla);
