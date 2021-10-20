for (var i = 0; i < 100; i++) {
  if (i%3==0 && i%5==0) {
    document.write("Hey Fizzbozz: " + i);
  }
  else if (i%3==0) {
    document.write("Fizz: " + i);

 }
else if (i%5==0) {
  document.write("Bozz: " + i);
}
  document.write("<br />");
}
