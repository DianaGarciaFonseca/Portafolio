boton.addEventListener('click',e=>{
e.preventDefault()

let dia=document.getElementById('dia').value
dia=parseInt(dia)
let mes=document.getElementById('mes').value
mes=parseInt(mes)
console.log(dia,mes)


let respuesta=document.getElementById('respuesta')
console.log((mes===3 && dia>=21) || (mes===4 && dia<=18))

if((mes===3 && dia>=21) || (mes===4 && dia<=18)){
	texto=`<p> Su Signo Zodiacal es ARIES <img src='imagenes/aries.png'></p>`
	respuesta.innerHTML=texto
	respuesta.style.setProperty("visibility", "visible")
    respuesta.style.setProperty("opacity", "0.8")
	respuesta.style.setProperty('transition','all 3s ease')
	

}
else if ((mes===4 && dia>=20) || (mes===5 && dia<=20)){
	texto=`<p> Su Signo Zodiacal es TAURO <img src='imagenes/tauro.png'></p>`
	respuesta.innerHTML=texto
	respuesta.style.setProperty("visibility", "visible")
    respuesta.style.setProperty("opacity", "0.8")
	respuesta.style.setProperty('transiton','all 3s ease')
}
else if((mes===5 && dia>=21) || (mes===6 && dia<=20)){
	texto=`<p> Su Signo Zodiacal es GEMINIS <img src='imagenes/gemini.png'></p>`
	respuesta.innerHTML=texto
	respuesta.style.setProperty("visibility", "visible")
    respuesta.style.setProperty("opacity", "0.8")
	respuesta.style.setProperty('transition','all 3s ease')
}
else if((mes===6 && dia>=21) || (mes===7 && dia<=22)){
	texto=`<p> Su Signo Zodiacal es CANCER <img src='imagenes/cancer.png'></p>'`
	respuesta.innerHTML=texto
	respuesta.style.setProperty("visibility", "visible")
    respuesta.style.setProperty("opacity", "0.8")
	respuesta.style.setProperty('transition','all 3s ease')
}
else if((mes===7 && dia>=23) || (mes===8 && dia<=22)){
	texto=`<p> Su Signo Zodiacal es LEO <img src='imagenes/leo.png'></p>`
	respuesta.innerHTML=texto
	respuesta.style.setProperty('transition','all 3s ease')
}
else if((mes===8 && dia>=23) || (mes===9 && dia<=22)){
	texto=`<p> Su Signo Zodiacal es VIRGO <img src='imagenes/Virgo.png'></p>`
	respuesta.innerHTML=texto
	respuesta.style.setProperty("visibility", "visible")
    respuesta.style.setProperty("opacity", "0.8")
	respuesta.style.setProperty('transition','all 3s ease')
}
else if((mes===9 && dia>=23) || (mes===10 && dia<=22)){
	texto=`<p> Su Signo Zodiacal es LIBRA <img src='imagenes/libra.png'></p>`
	respuesta.innerHTML=texto
	respuesta.style.setProperty("visibility", "visible")
    respuesta.style.setProperty("opacity", "0.8")
	respuesta.style.setProperty('transition','all 3s ease')
}
else if((mes===10 && dia>=23) || (mes===11 && dia<=21)){
	texto=`<p> Su Signo Zodiacal es ESCORPIO <img src='imagenes/scorpio.png'></p>`
	respuesta.innerHTML=texto
	respuesta.style.setProperty("visibility", "visible")
    respuesta.style.setProperty("opacity", "0.8")
	respuesta.style.setProperty('transition','all 3s ease')
}
else if((mes===11 && dia>=22) || (mes===12 && dia<=21)){
	texto=`<p> Su Signo Zodiacal es SAGITARIO <img src='imagenes/sagi.png'></p>`
	respuesta.innerHTML=texto
	respuesta.style.setProperty("visibility", "visible")
    respuesta.style.setProperty("opacity", "0.8")
	respuesta.style.setProperty('transition','all 3s ease')
}
else if((mes===12 && dia>=22) || (mes===1 && dia<=19)){
	texto=`<p> Su Signo Zodiacal es CAPRICORNIO <img src='imagenes/capri.png'></p>`
	respuesta.innerHTML=texto
	respuesta.style.setProperty("visibility", "visible")
    respuesta.style.setProperty("opacity", "0.8")
	respuesta.style.setProperty('transition','all 3s ease')
}
else if((mes===1 && dia>=20) || (mes===2 && dia<=18)){
	texto=`<p> Su Signo Zodiacal es ACUARIO <img src='imagenes/acuario.png'></p>`
	respuesta.innerHTML=texto
	respuesta.style.setProperty("visibility", "visible")
    respuesta.style.setProperty("opacity", "0.8")
	respuesta.style.setProperty('transition','all 3s ease')
}
else if((mes===2 && dia>=19) || (mes===3 && dia<=20)){
	texto=`<p> Su Signo Zodiacal es PISCIS <img src='imagenes/piscis.png'></p>`
	respuesta.innerHTML=texto
	respuesta.style.setProperty("visibility", "visible")
    respuesta.style.setProperty("opacity", "0.8")
	respuesta.style.setProperty('transition','all 3s ease')
}

})