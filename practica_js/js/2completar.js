/*let numero1 = 5;
let numero2 = 8;

numero1=parseInt(numero1)
numero2=parseInt(numero2)

Incremento=numero1+1

if(numero1<numero2||numero2>numero1){

console.log("numero1 no es mayor que numero2");

}

if(numero2=0){

console.log('numero2 no es mayor que numero2');

}

if(numero1=0){

console.log("numero1 es negativo o distinto de cero");

}

if(Incremento<numero2){

console.log('Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2')
}*/
//Ejercicio 1

//1. declarar la variable

/*let nota

//2. solicitar valores

nota=prompt('Digite su nota')
nota=parseInt(nota)
console.log('Su nota es', nota)

//3. condiciones
if (nota>0 && nota<=10) {


if (nota>=0 && nota<3) {
   window.alert('Su nota es Muy Deficiente')
}

else if(nota>=0 && nota<3) {
   window.alert('Su nota es Muy Deficiente')
}

if (nota<3 && nota<=5) {
	window.alert('Su nota es Insuficiente')
}

if (nota>=5 && nota<=6) {
	window.alert('Su nota es Suficiente')
}

if (nota>=6 && nota<7) {
	window.alert('Su nota es BIEN')
}

if (nota=7 && nota<6) {
	window.alert('Su nota es Notable')
}
else{
	window.alert('Digite una nota valida')
}
}*/
//CARA Y SELLO

/*let cara,sello
jugador1=prompt('escoje cara o sello')
jugador2=prompt('escoje cara o sello')

if(jugador1==='cara' && jugador2==='cara'){
	window.alert('empate')
}
else{
	window.alert('intente de nuevo')
}

if(jugador1==='sello' && jugador2==='cara'){
	window.alert('gana jugador1')
}

else{
window.alert('intente de nuevo')
}
if(jugador2==='sello' && jugador1==='sello'){
	window.alert('empate')
}
else{
	window.alert('su juego ha terminado')
}*/

/*let usuario
let password
usuario=prompt("Ingrese su usuario")
password=prompt("Ingrese su contraseña")
password=parseInt(password)

if(usuario==="dianag" && password===246){
	window.alert("BIENVENIDO")
}
else{
	window.alert("Datos incorrectos")
}*/

//triangulos
/*let ladoa,ladob,ladoc
let resultado

ladoa=parseInt(ladoa)
ladoa=prompt('ingresar lado1')
ladob=parseInt(ladob)
ladob=prompt('ingresar lado2')
ladoc=parseInt(ladoc)
ladoc=prompt('ingresar lado3')

if (ladoa==ladob && ladob==ladoc){
	console.log('los lados corresponden a un triangulo Equilatero')
}

	else if (ladoa == ladob || ladoa == ladoc || ladob == ladoc){
		console.log('los lados corresponden a un triangulo Isosceles')
}
		else
			console.log('los lados corresponden a un triangulo Escaleno')*/
let contador=0		
//ciclo DO WHILE
/*do{
console.log('valor del contador No.', contador)
contador++	
}while(contador<=5)*/

// ciclo while con control de usuario
/*let preciop=0
let resp=1
let total=0
let op
let cantidad=0

while(resp){
	op=prompt('Seleccine una opcion 1. papas 2. arroz 3. aceite 4. cebolla 5. fruta')

	console.log('el producto ingresado es',op)
	cantidad=parseInt(cantidad)
	cantidad=prompt('cuantos quiere llevar')
	console.log('ingrese cantidad')
	
    
    
	let billete=prompt('ingrese el precio del producto')
	billete=parseInt(billete)
	console.log('el dinero ingresado es', billete)

	total=total+billete
	resp=prompt('desea ingresar otra compra digite 1 de lo contario digite 2')
    resp=parseInt(resp)
   if(resp===1){
   	continue;
    }
    else{
    	break;
    }
}

console.log('el total a cancelar es', total)
*/
//funciones
/*let texto=prompt('ingrese su nombre')
console.log('la longitud de la cadena es',texto.length)
console.log(texto.charAt(0))
console.log(texto.substring(0,4))
console.log(texto.toLowerCase())
console.log(texto.toUpperCase())
console.log(texto.trim())*/


/*console.log('realice lanzamiento')

let lanzamiento=Math.floor(1+Math.random()*2);
console.log(lanzamiento)
if(lanzamiento===1){
	console.log('Gana Jugador')
	if (lanzamiento===2) {
		console.log('Gana Maquina')
	}
}*/
  
