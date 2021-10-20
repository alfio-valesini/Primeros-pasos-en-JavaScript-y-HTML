class Billete {
  constructor(valor, cantidad, url) {
    this.valor=valor;
    this.cantidad=cantidad;
    this.imagen = new Image();
    this.imagen.src = url;
  }
}
