var imagenes = [];
imagenes["Cauchin"] = "vaca.png";
imagenes["Pokacho"] = "pollo.png"
imagenes["Tocinauro"] = "cerdo.png"

var coleccion = [];
coleccion.push(new Packiman("Cauchin", 100, 30));
coleccion.push(new Packiman("Pokacho", 80, 50));
coleccion.push(new Packiman("Tocinauro", 120, 40));

/*for (var packin of coleccion) {
  packin.mostrar();
}
*/
for (var packin in coleccion){
  coleccion[packin].mostrar();
}
