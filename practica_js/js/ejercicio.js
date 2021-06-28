//1. funcion expresion con nombre
//2. funcion de expresion anonima
//calcular el subtotal sacar el iva mostrar el total

//sintaxis basicas de funciones
/*let nombrevariable=function nombrede la funcion(parametros entrada=in o salida=out entrada-salida=inout
  condiciones procesos
)
funcion anonima
let nombrevariable=(parametros entrada=in o salida=out entrad-salida=inout
  condiciones procesos
)
entradas: nombre de producto, cantidad producto, precio producto
proceso: calcular subtotal, iva, total de la venta, calcular el cambio
salida: resultadoe de los procesos*/
// inicializacion, condicion e incremento

/*let iva=function calcularIva(valorcompra){
	return ivarproduc=(valorcompra*0.19).toFixed(2)
}

let subt=function(valor,iva){
	return((valor-iva).toFixed(2))

}

let resp=true
let preciototalp,total=0

while(resp=true){
	let nombrep=prompt('Ingrese el nombre del producto')
	let cantidadp=prompt('Ingrese la cantidad de'+nombrep+ 'que desea comprar')
	let precio=prompt('Ingrese el precio del' +nombrep)

	preciototalp=cantidadp*precio
	total=total+preciototalp
	console.log(cantidadp,'unidades de' +nombrep+ 'cuestan' +preciototalp)
	resp=confirm('¿desea ingresar otro Producto?')
}
console.log('El subtotal sin Iva',subt(total,iva(total)))
console.log('El iva 19% es',iva(total))
console.log('El total de la compra es' +total)*/

/*const circulo={
	radio:3,
	perimetro:0,
	area:0,

	carea(){
		this.area=3.14*this.radio*this.radio
		console.log('El area de un circulo con redio'+this.radio+'es'+(this.area).toFixed(2))
	}
	,
	cperimetro(){
		this.perimetro=2*3.14*this.radio
		console.log('El perimetro de un circulo con radio'+this.radio+'es'(this.perimetro).toFixed(2))

	}
}*/

//constructor de objetos
/*function Circulo(radio){
   this.radio=radio
   this.area=area
   this.perimetro=perimetro	
}
//metodos del objeto
function area(){
	let area=(Math.PI*(Math.pow(parseFloat(this.radio),2))
	console.log('El area del circulo es',area.toFixed(2))
}


function perimetro(){
	let perimetro=2*Math.PI*this.radio
	console.log('El perimetro del circulo es',perimetro)
}

function llenar(){
	let r=prompt('Ingrese el valor del radio')
	circulo1=new Circulo(r)//instancia ---<crear objetos
	circulo1.area()
	circulo1.perimetro()
}

llenar()*/

function Calculadora(num1,num2){
this.num1=num1
this.num2=num2
this.suma=suma
this.resta=resta
this.multiplicacion=multiplicacion
this.division=division
this.raizcuadrada=raizcuadrada
this.potencia=potencia

}
function suma(){
   let suma=parseInt(this.num1)+parseInt(this.num2)
   console.log('La suma de los numeros es',suma)
}

function resta(){
let resta=parseInt(this.num1)-parseInt(this.num2)
console.log('La resta de los numeros es',resta)
}
function multiplicacion(){
	let multiplicacion=parseInt(this.num1)*parseInt(this.num2)
	console.log('La multiplicacion de los numeros es',multiplicacion)
}
function division(){
	let division=parseInt(this.num1)/parseInt(this.num2)
	console.log('La division de los numeros es',division)
}

function raizcuadrada(){
	let raizcuadrada=parseInt(Math.pow(this.num1,this.num2));
    console.log('La raiz cuadrada de los numeros es',raizcuadrada)
}
function potencia(){
	let potencia=parseInt(Math.pow(this.num1,this.num2))
	console.log('La potencia del numero es',potencia)
}
let op=prompt('Escoja una operacion 1. suma 2. resta 3. multiplicacion 4. division 5. raizcuadrada 6. potencia')
    op=parseInt(op)
  
function ingresanum(){
	let num1=prompt('Ingrese el primer numero')
	let num2=prompt('Ingrese el segundo numero')
	operacion=new Calculadora(num1,num2)

 
    
    switch(op){
    	case 1:
           operacion.suma()
    	break;
           
    	case 2:
    	 operacion.resta()
    	 break;
    	 case 3:
    	   operacion.multiplicacion()
    	 break;
    	 case 4:
           operacion.division()
    	 break;
    	 case 5:
           operacion.raizcuadrada()
    	 break;
    	 case 6:
    	    operacion.potencia()
    	 break;
    
}
    
}
ingresanum()
