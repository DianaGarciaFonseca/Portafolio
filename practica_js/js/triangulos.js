/*let op=prompt('Ingrese el nombre de la figura que desea calcular 1. cuadrado 2. circulo 3. triangulo')
op=parseInt(op)
let resultado
let base
let alt
let lado
let radio
switch(op){
	case 1:
	console.log('Area del cuadrado')
	lado=prompt('Ingrese lado')
	resultado=lado*lado
	console.log('EL AREA CUADRADO ES', resultado)
	break;

	case 2:
	console.log('Area del circulo')
	radio=prompt('Digite el radio')
	radio=parseInt(radio)
	resultado= 2 * Math.PI * radio
	console.log('EL AREA DEL CIRCULO ES', resultado)
	break;

	case 3:
	console.log('Area del triangulo')
    base=parseInt(base)
    base=prompt('Ingrese la base')
    alt=parseInt(alt)
    alt=prompt('Ingrese la altura')

    resultado=(base * alt) /2
    console.log('EL AREA DEL TRIANGULO ES', resultado)
    break;

}*/

//Funciones por declaracion

/*function saludar(){
	console.log('Hola mundo')
}

saludar()

let saludo=()=>´Hola mundo´
console.log(saludo())*/

//Funcion que pasa parametros

/*function ingresardtk(e){
	mayoredad=(e>=18)
	?alert('Usted es mayor de edad Bienvenido')
	:alert('Usted es menor de edad pa la casa')
}

let mayor=(e)=>{
	if(e>=18){
		console.log('Bienvenido')
	}
	else{
		console.log('Despedido')
	}
}

let edad=prompt('ingrese su edad')
mayor(edad)

//Funciones que retornan datos

/*function promedio(sumatoria,numerodatos){
	return(sumatoria/numerodatos)
}+/

/*function promedio(sumatoria,numerodatos){
	promedio=(sumatoria/numerodatos)
	return promedio
}*/
/*let prom1=function (sumatoria,numerodatos){
	return(sumatoria/numerodatos).toFixed(1)
}*/

/*let res=true
let sum=0
let con=0
while(res==true){
	let nota=prompt('Ingrese la nota')
	console.log('la nota ingresada es',nota)

	sum=sum+parseFloat(nota)
	con=con+1
    
    res=confirm('Desea ingresar mas notas')


}
let prom=prom1(sum,con)
let nf=(prom*0.5)+(3.5*0.5)

console.log('El promedio de sus notas es',nf)*/

//Funciones por expresion



/*let n=prompt('ingrese la cantidad de los productos')
n=parseInt(n)

let total=0
total=parseInt(total)


for (let i=1; i<=n; i++){
let nombre=prompt('ingrese el nombre del producto')

let cantidad=prompt('ingrese la cantidad del producto')
cantidad=parseInt(cantidad)


let precio=prompt('ingrese el precio del producto')
precio=parseInt(precio)


let valorp=cantidad*precio              


total=total+valorp


console.log('El producto es',nombre,'la cantidad es',cantidad,'el precio es',precio,' total del valor es',valorp,)

}
let iva=function subtotal(total,valorp)
  subtotal(total*0.19)
  return iva
  console.log('El valor de iva de su compra es',iva)


console.log('El valor total de la compra es', total)
let pagar=prompt('ingrese dinero con que paga')
pagar=parseInt(pagar)
 
vueltas=pagar-total
 
console.log('sus vueltas son',vueltas)*/


