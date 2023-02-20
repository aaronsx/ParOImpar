function ejerciciopar() 
{
  let parOimpar = prompt("Introduce un numero", 5);
	paroimpar(parOimpar)
}
function paroimpar(c)
{
	if(c%2==0)
  {
	   document.getElementById("parOimpar").innerHTML = "El numero "+c+" es par";
  }
  else
  {
	   document.getElementById("parOimpar").innerHTML = "El numero "+c+" es impar";
  }
}