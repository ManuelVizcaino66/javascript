
var i=0

do{
    var num1=parseInt(prompt("ingrese el primer numero"));
    var num2=parseInt(prompt("ingrese el segundo numero"));
    var num3=parseInt(prompt("ingrese el tercer numero"));
    var promedio=(num1+num2+num3)/3;
    document.write("su promedio es de: "+promedio+"<br>");
    i++;
    var parar=parseInt(prompt("Si deesea finalizar introduzca el nuemero CERO (0) "));
} while(parar!==0);
