document.addEventListener("keydown", dibujarTeclado);
var d=document.getElementById("canvas");
var papel = d.getContext("2d");
var x = 100;
var y = 100;

function dibujarLinea(color, xinicial, yinical, xfinal, yfinal, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(xinicial,yinical);
  lienzo.lineTo(xfinal,yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujarTeclado(evento)
{
  var teclas = {
    UP:38,
    DOWN:40,
    LEFT:37,
    RIGHT:39
  };
  var colorcito="Blue";
  var movimiento = 10;

  switch (evento.keyCode) {
    case teclas.UP:
      dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
      y = y - movimiento;
    break;
    case teclas.DOWN:
     dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
     y = y + movimiento;
    break;
    case teclas.LEFT:
      dibujarLinea(colorcito, x, y, x - movimiento, y, papel);
      x = x - movimiento;
    break;
    case teclas.RIGHT:
      dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
      x = x + movimiento;
    break;
    default:
      console.log("Otra tecla");
  }
}
