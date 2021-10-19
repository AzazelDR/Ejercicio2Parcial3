var Nombre = prompt("Ingrese su nombre: ", "");
var Edad = parseInt(prompt("Ingrese su edad: ", ""));


document.write("<h1>" + "Tu nombre es: " + Nombre + "</h1>");
document.write("<h1>" + " Tu edad es: " + Edad + "</h1>")

var vida = (Edad * 365);

document.write("<h1>" + "Dias que has vivido son: " + vida + "</h1>");