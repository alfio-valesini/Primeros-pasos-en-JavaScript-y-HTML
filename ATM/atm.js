var caja = [];
caja.push(new Billete(50,3,"50dolar.png"));
caja.push(new Billete(20,2,"20dolar.png"));
caja.push(new Billete(10,2,"10dolar.png"));

var dinero;
var boton = document.getElementById("boton");
var resultado = document.getElementById("resultado");
var entregado =[];
var div;
var papeles;
boton.addEventListener("click", entregarDinero);

function entregarDinero() {
  var texto = document.getElementById("texto");
  dinero = parseInt(texto.value);
  for (var b of caja) {
    if(dinero > 0){
      div = Math.floor(dinero/b.valor);
      if (div > b.cantidad) {
        papeles=b.cantidad;
      }
      else {
        papeles=div;
      }
      entregado.push(new Billete(b.valor, papeles, b.imagen.src));
      dinero = dinero - (b.valor*papeles);
    }
  }
  if (dinero > 0 || dinero!= 0) {
    resultado.innerHTML = "Sorry no tengo ese dinero";
  }
  else {
    for (var print of entregado) {
      if (print.cantidad!=0) {
          //resultado.innerHTML = resultado.innerHTML ; + print.cantidad + " Billetes de " + print.valor + "<br />";
          for (var i = 0; i < print.cantidad ; i++) {
            resultado.innerHTML += "<img src= "+print.imagen.src + "></img>";
          }
          resultado.innerHTML+= "<br />";
      }
  }
  }

}
