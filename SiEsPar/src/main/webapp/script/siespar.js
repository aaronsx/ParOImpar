function ejerciciopar() {
  let parOimpar = prompt("Introduce un numero", 5);
  if(parOimpar%2==0)
  {
	   document.getElementById("parOimpar").innerHTML = "El numero "+parOimpar+" es par";
  }
  else
  {
	   document.getElementById("parOimpar").innerHTML = "El numero "+parOimpar+" es impar";
  }

}