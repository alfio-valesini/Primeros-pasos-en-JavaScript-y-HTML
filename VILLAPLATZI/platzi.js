var vp = document.getElementById("villaPlatzi");
var papel = vp.getContext("2d");

var fondo = {
  url:"tile.png",
  cargaOk: false
};

var vaca = {
  url: "vaca.png",
  cargaOk: false
};
var cantVaca = aleatorio(0, 10);

var pollo = {
  url: "pollo.png",
  cargaOk: false
};
var cantPollo = aleatorio(0, 10);

var cerdo = {
  url: "cerdo.png",
  cargaOk: false
};
var cantCerdo = aleatorio(0, 10);


fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", dibujarFondo);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", dibujarPollos);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", dibujarCerdos);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", dibujarVacas);

function dibujarFondo() {
  fondo.cargaOk = true;
  dibujar();
}

function dibujarVacas() {
  vaca.cargaOk = true;
  dibujar();
}

function dibujarCerdos() {
  cerdo.cargaOk = true;
  dibujar();
}

function dibujarPollos() {
  pollo.cargaOk = true;
  dibujar();
}

function dibujar() {
  if (fondo.cargaOk) {
    papel.drawImage(fondo.imagen, 0, 0);
  }
  if (vaca.cargaOk) {
    for (var v = 0; v < cantVaca; v++) {
      var x = aleatorio (0, 10);
      var y = aleatorio (0, 10);
      var x = x * 80;
      var y = y * 80;
      papel.drawImage(vaca.imagen, x, y);
    }
  }
  if (pollo.cargaOk) {
    for (var p = 0; p < cantPollo; p++) {
      var x = aleatorio (0, 10);
      var y = aleatorio (0, 10);
      var x = x * 80;
      var y = y * 80;
      papel.drawImage(pollo.imagen, x, y);
    }
  }
  if (cerdo.cargaOk) {
    for (var c = 0; c < cantCerdo; c++) {
      var x = aleatorio (0, 10);
      var y = aleatorio (0, 10);
      var x = x * 80;
      var y = y * 80;
      papel.drawImage(cerdo.imagen, x, y);
    }
  }
}

function aleatorio(min, max) {
  var resultado;
  resultado = Math.floor(Math.random() * (max - min + 1)) + min;
  return resultado;
}
