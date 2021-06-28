/*//1. declarar las variables

let estatura
let peso
//2. solcitar los valores
 
estatura=prompt('Digite su estatura en cm')
estatura=parseInt(estatura)
console.log('Su estatura es', estatura)

peso=prompt('Digite su peso en kg')
peso=parseInt(peso)
console.log('Su peso es', peso)

//3. condiciones

if (peso>55 && estatura>160) {
	window.alert('El atleta puede participar')
}
else if (peso<55 && estatura<160){
	window.alert('El atleta no puede participar')//compuesto anidado
}
else{
	window.alert('El atleta no puede participar')
}

//Ejercicio 1

//1. declarar la variable

let nota

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

if (nota>=6 && nota<7) {
	window.alert('Su nota es BIEN')
}

if (nota=7 && nota<6) {
	window.alert('Su nota es Notable')
}
else{
	window.alert('Digite una nota valida')
}



let numero1=prompt('Introduce el primer numero')
numero1=parseInt(numero1)
let numero2=prompt('Introduce el segundo numero')
numero2=parseInt(numero2)

let  op=prompt('Seleccine una opcion 1. Suma 2. Resta 3. Multiplicacio 4. Division')
op=parseInt(op)
let resultado


switch(op){

case 1:
resultado=numero1+numero2
console.log('La suma de',numero1,'y el',numero2,'es',resultado)
break;

case 2:
resultado=numero1-numero2
console.log('La resta de',numero1,'y el',numero2,'es',resultado)
break;

case 3:

break;

case 4:

break;

default:

break;
}
//cicclo for para

for(let i=0;i<4;i++){
	console.log('Iteracion No. ',i)
}
//tabla de multiplicar
/*let tb=prompt('Escriba el numero de la tabla de multiplicar que desea saber')
tb=parseInt(tb)

let resultado

for(let i=0;i<=10;i++){
	resultado=tb*i
	
	console.log(tb,'*',i,'=', resultado)
}
//ciclo mientras
/*let contador=0 //debe iniciar con un valor
let alcancia=0
while(contador<=3){

	let billete=prompt('ingrese el billete')
    billete=parseInt(billete)
	console.log('su valor es', billete)
    alcancia=alcancia+billete

	contador++
}
console.log('su total acumulado es',alcancia)


//condicional multiple

let  op=prompt('Seleccine una opcion 1. Naranjas 2. Manzanas 3. Platanos 4. fresas 5.mangos y Papayas')
op=parseInt(op)

switch (opcines) {
  case 1:
    console.log('El kilogramo de naranjas cuesta $10000');

    break;
  case 2:
    console.log('El kilogramo de manzanas cuesta $8000');
    break;
  case 3:
    console.log('El kilogramo de platanos cuesta $8000');
    break;
  case 4:
    console.log('El kilogramo de cerezas cuesta $6000');
    break;
  case 5:
    console.log('El kilogramo de mangos y papayas cuesta $4000');
    break;
  default:
  console.log('Lo lamentamos, por el momento no disponemos de ' +op+ '.');
}

console.log("¿Hay algo más que te quisiera consultar?");*/

//caja registradora


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

console.log('El producto es',nombre,'la cantidad es',cantidad,'el precio es',precio,'y total del valor es',valorp,)

total=total+valorp

let   iva=function calculariva(total){
	return(total*0.19)
}
let subtotal=function(cantidad,valorp){
	return(cantidad*valorp)

}
console.log('El valor total de la compra es', total)
let pagar=prompt('ingrese dinero con que paga')
pagar=parseInt(pagar)
 
vueltas=pagar-total
 
console.log('sus vueltas son',vueltas)

//ARRAYS

/*let vegetales=new Array('repollo','nabo','rabano','zanahoria')

console.log(vegetales)
console.log(vegetales[1])
console.log(vegetales.lenght)
vegetales[2]='nabo';
console.log(vegetales)
console.log(vegetales[2])
vegetales[2]='espinacas';
console.log(vegetales)

let i
for (i=0; <= vegetales.lenght - 1; i++){
	console.log(vegetales[1]);
}
vegetales.forEach(function(elemento,indice){
	console.log(elemento,indice)

})
let comidas=[]

let cantidad=prompt('digite la cantidad de comidas que desee')
cantidad=parseInt(cantidad)

let i
 for(i = 0; i<cantidad; i++){

 let nombres=prompt('digite el nombre de la comida No', +i+ '.')
 comidas.push(nombres)
 console.log(comidas)

}*/
/*let indice
let tiempo
let competidores=new Array('competidor1','competidor2','competidor3','competidor4')
console.log(competidores)
console.log(indice)
console.log(competidores,indice)
console.log('El tiempo registrado para los competidores fue')
console.log(competidores[0])
console.log('Nado 30mts en 5min')
console.log(competidores[1])
console.log('Nado 25mts en 8min')
console.log(competidores[2])
console.log('Nado 18mts en 5min')
console.log(competidores[3])
console.log('Nado 40mts en 5min')
console.log('EL PREMIO ES PARA')
console.log(competidores[3])*/


/*let cantidad=parseInt(prompt('Digite la cantidad de competidores'))
let comp=[]
let tiem=[]

for (let i=0; i<cantidad; i++){
	let compe=prompt('ingrese el nombre No.', +i+ '.') 
	comp.push(compe)
	let tiempo=prompt('ingrese el tiempo No.', +i+ '.')
	tiem.push(tiempo)


	console.log('el participante' ,comp[i], 'tuvo un tiempo de' ,tiem[i], 'min/seg' )

}*/
