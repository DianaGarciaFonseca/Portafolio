boton.addEventListener('click',e=>{
e.preventDefault()

let opcion1=document.getElementById('opcion1').value
opcion1=parseInt(opcion1)
let opcion2=document.getElementById('opcion2').value
opcion2=parseInt(opcion2)



let respuesta=document.getElementById('respuesta')


if(opcion1===1 && opcion2===1){
	texto=`<p>Como ambos quieren quedar los primeros en todo, las peleas y 
	reconciliaciones se turnarán dando como resultado una unión de gran 
	intensidad y de muchos tiras y aflojas.</p>`
	respuesta.innerHTML=texto
	respuesta.style.setProperty("visibility", "visible")
    respuesta.style.setProperty("opacity", "0.8")
	respuesta.style.setProperty('transition','all 3s ease')
	

}
else if (opcion1===1 && opcion2===2){
	texto=`<p>Las relaciones entre estos dos signos suelen estar 
	centradas generalmente en el aspecto financiero y materialista de la vida.</p>`
	respuesta.innerHTML=texto
	respuesta.style.setProperty("visibility", "visible")
    respuesta.style.setProperty("opacity", "0.8")
	respuesta.style.setProperty('transiton','all 3s ease')
}
else if(opcion1===1 && opcion2===3){
	texto=`<p>Los dos se sienten muy a gusto nada más conocerse
	 y al segundo se hacen amigos inseparables.</p>`
	respuesta.innerHTML=texto
	respuesta.style.setProperty("visibility", "visible")
    respuesta.style.setProperty("opacity", "0.8")
	respuesta.style.setProperty('transition','all 3s ease')
}
else if(opcion1===1 && opcion2===4){
	texto=`<p>Es cierto que Aries se siente en paz en los brazos del lunático Cáncer y entre
	 ambos surge un cariño muy especial,pero las necesidades emocionales de cada uno son 
	 tan distintas que sus ritmos chocarán.</p>'`
	respuesta.innerHTML=texto
	respuesta.style.setProperty("visibility", "visible")
    respuesta.style.setProperty("opacity", "0.8")
	respuesta.style.setProperty('transition','all 3s ease')
}
else if(opcion1===1 && opcion2===5){
	texto=`<p>Se trata, por tanto, de dos energías bastante antagónicas que chocarán desde el principio.</p>`
	respuesta.innerHTML=texto
	respuesta.style.setProperty('transition','all 3s ease')
}
else if(opcion1===1 && opcion2===6){
	texto=`<p>Ambos se respetan, se gustan y cuando surge algo entre ellos la pasión está servida. Esto en teoría, pero en
	 la práctica y cuando la relación se estabiliza, la convivencia puede poner a prueba sus nervios.</p>`
	respuesta.innerHTML=texto
	respuesta.style.setProperty("visibility", "visible")
    respuesta.style.setProperty("opacity", "0.8")
	respuesta.style.setProperty('transition','all 3s ease')
}
else if(opcion1===1 && opcion2===7){
	texto=`<p>Se trata de dos signos muy diferentes; mientras que Aries es impulsivo y
	 muy seguro de sí mismo, Escorpio es más introvertido y se mueve por instinto.</p>`
	respuesta.innerHTML=texto
	respuesta.style.setProperty("visibility", "visible")
    respuesta.style.setProperty("opacity", "0.8")
	respuesta.style.setProperty('transition','all 3s ease')
}
else if(opcion1===1 && opcion2===8){
	texto=`<p>Ésta es, sin duda, una unión llena de aventura y complicidad.
	 Ambos son joviales, buscadores, aventureros y espontáneos. Hacen una pareja estupenda.</p>`
	respuesta.innerHTML=texto
	respuesta.style.setProperty("visibility", "visible")
    respuesta.style.setProperty("opacity", "0.8")
	respuesta.style.setProperty('transition','all 3s ease')
}
else if(opcion1===1 && opcion2===9){
	texto=`<p>Hacen una pareja estupenda, y nada se les pondrá
	 por delante cuando tomen la decisión de viajar por el mundo</p>`
	respuesta.innerHTML=texto
	respuesta.style.setProperty("visibility", "visible")
    respuesta.style.setProperty("opacity", "0.8")
	respuesta.style.setProperty('transition','all 3s ease')
}
else if(opcion1===1 && opcion2===10){
	texto=`<p>Capricornio se sentirá felizmente rejuvenecido con
	 el intrépido Aries y éste encontrará su apoyo más fiel en el signo de la cabra</p>`
	respuesta.innerHTML=texto
	respuesta.style.setProperty("visibility", "visible")
    respuesta.style.setProperty("opacity", "0.8")
	respuesta.style.setProperty('transition','all 3s ease')
}
else if(opcion1===1 && opcion2===11){
	texto=`<p>Aries y Acuario tienen mucho en común y un grado de compatibilidad muy alto.
	 Ambos signos son independientes, humanitarios, optimistas y entusiastas.</p>`
	respuesta.innerHTML=texto
	respuesta.style.setProperty("visibility", "visible")
    respuesta.style.setProperty("opacity", "0.8")
	respuesta.style.setProperty('transition','all 3s ease')
}
else if(opcion1===1 && opcion2===12){
	texto=`<p>Aries disfruta del modo apasionado de amar de Piscis pero pronto se aburre de tanta intensidad 
	emocional e intentará cambiar algunos rasgos que no le gustan nada del signo de los peces.</p>`
	respuesta.innerHTML=texto
	respuesta.style.setProperty("visibility", "visible")
    respuesta.style.setProperty("opacity", "0.8")
	respuesta.style.setProperty('transition','all 3s ease')
}//termina aries
 else if(opcion1===2 && opcion2===2){
 	texto=`<p>Son prácticos y no se complican demasiado, por lo que son muy compatibles
 	 en una relación. La energía sociable y cariñosa de Venus contribuirá a un primer encuentro mágico.</p>`
 	respuesta.innerHTML=texto
 	respuesta.style.setProperty("visibility", "visible")
 	respuesta.style.setProperty("opacity", "0.8")
	respuesta.style.setProperty('transition','all 3s ease')

 }
 else if(opcion1===2 && opcion2===3){
 	texto=`<p>Un signo tímido como Tauro se sentirá muy atraído por la rapidez, ingenio
 	 e inteligencia de Géminis ya que despertará su interés por conocer cosas nuevas y estar al día</p>`
 	respuesta.innerHTML=texto
 	respuesta.style.setProperty("visibility", "visible")
 	respuesta.style.setProperty("opacity", "0.8")
	respuesta.style.setProperty('transition','all 3s ease')
 }
 else if(opcion1===2 && opcion2===4){
 	texto=`<p>Cáncer también sabrá cómo darle a Tauro esa devoción que tanto necesita mientras
    que Tauro otorgará dosis de paciencia para calmar los constantes cambio de ánimo del cangrejo.</p>`
 	respuesta.innerHTML=texto
 	respuesta.style.setProperty("visibility", "visible")
 	respuesta.style.setProperty("opacity", "0.8")
	respuesta.style.setProperty('transition','all 3s ease')
 }
 else if(opcion1===2 && opcion2===5){
 	texto=`<p>La compatibilidad entre Leo y Tauro es alta, siempre y cuando los
    dos signos asuman sus diferencias y las gestionen de forma inteligente y 
    evitando su habitual terquedad.</p>`
 	respuesta.innerHTML=texto
 	respuesta.style.setProperty("visibility", "visible")
 	respuesta.style.setProperty("opacity", "0.8")
	respuesta.style.setProperty('transition','all 3s ease')
 }
 else if(opcion1===2 && opcion2===6){
 	texto=`<p>Tauro y Virgo pueden disfrutar de una vida con mucha armonía.
 	Tierra se obtiene una base sólida</p>`
 	respuesta.innerHTML=texto
 	respuesta.style.setProperty("visibility", "visible")
 	respuesta.style.setProperty("opacity", "0.8")
	respuesta.style.setProperty('transition','all 3s ease')
 }
 else if(opcion1===2 && opcion2===7){
 	texto=`<p>La compatibilidad entre Libra y Tauro no es muy alta, por no decir baja 
 	y recomendamos mucho esfuerzo y comprensión por parte de los dos para hacer funcionar esta relación.</p>`
 	respuesta.innerHTML=texto
 	respuesta.style.setProperty("visibility", "visible")
 	respuesta.style.setProperty("opacity", "0.8")
	respuesta.style.setProperty('transition','all 3s ease')
 }
 else if(opcion1===2 && opcion2===8){
 	texto=`<p>Son dos signos opuestos que sienten una 
 	atracción física y psíquica al momento. La relación puede ser 
 	fecunda y apasionada pero para que Tauro pueda sentirse seguro.</p>`
 	respuesta.innerHTML=texto
 	respuesta.style.setProperty("visibility", "visible")
 	respuesta.style.setProperty("opacity", "0.8")
	respuesta.style.setProperty('transition','all 3s ease')
 }
 else if(opcion1===2 && opcion2===9){
 	texto=`<p>Se trata de una relación complicada y difícil 
 	de mantener, pues mientras Tauro, paciente y seguro, busca la tranquilidad y el confort.</p>`
 	respuesta.innerHTML=texto
 	respuesta.style.setProperty("visibility", "visible")
 	respuesta.style.setProperty("opacity", "0.8")
	respuesta.style.setProperty('transition','all 3s ease')
 }
 else if(opcion1===2 && opcion2===10){
 	texto=`<p>La compatibilidad entre Capricornio y Tauro es muy alta, 
 	porque tienen mucho en común y pueden esperar ser muy felices juntos.</p>`
 	respuesta.innerHTML=texto
 	respuesta.style.setProperty("visibility", "visible")
 	respuesta.style.setProperty("opacity", "0.8")
	respuesta.style.setProperty('transition','all 3s ease')
 }
 else if(opcion1===2 && opcion2===11){
 	texto=`<p>Es una relación en la que Tauro se lo va a tener que trabajar
 	mucho más si no quiere que Acuario salga volando, 
 	pero para ello deberá vivir el presente sin programar el futuro</p>`
 	respuesta.innerHTML=texto
 	respuesta.style.setProperty("visibility", "visible")
 	respuesta.style.setProperty("opacity", "0.8")
	respuesta.style.setProperty('transition','all 3s ease')
 }
 else if(opcion1===2 && opcion2===12){
 	texto=`<p>Hacen buena pareja y se comprenderán bien, sobre todo, 
 	por su fuerte sentido de la amistad. Ambos son sensibles y creativos</p>`
 	respuesta.innerHTML=texto
 	respuesta.style.setProperty("visibility", "visible")
 	respuesta.style.setProperty("opacity", "0.8")
	respuesta.style.setProperty('transition','all 3s ease')
 }
 //termina tauro
 else if(opcion1===3 && opcion2===3){
 	texto=`<p>La compatibilidad de Géminis con Géminis es alta y lo 
 	más probable, que una pareja de dos Géminis tengan una relación llena de diversión</p>`
 	respuesta.innerHTML=texto
 	respuesta.style.setProperty("visibility", "visible")
 	respuesta.style.setProperty("opacity", "0.8")
	respuesta.style.setProperty('transition','all 3s ease')
 }
 else if(opcion1===3 && opcion2===4){
 	texto=`<p>En el lado positivo de la relación ambos son dos signos muy 
 	soñadores y con una tremenda imaginación que se complementa además de tener un humor brillante</p>`
 	respuesta.innerHTML=texto
 	respuesta.style.setProperty("visibility", "visible")
 	respuesta.style.setProperty("opacity", "0.8")
	respuesta.style.setProperty('transition','all 3s ease')
 }
 else if(opcion1===3 && opcion2===5){
 	texto=`<p>La compatibilidad entre Leo y Géminis es bastante 
 	alta y en esta relación ambos descubrirán tener mucho en común.</p>`
 	respuesta.innerHTML=texto
 	respuesta.style.setProperty("visibility", "visible")
 	respuesta.style.setProperty("opacity", "0.8")
	respuesta.style.setProperty('transition','all 3s ease')
 }
 else if(opcion1===3 && opcion2===6){
 	texto=`<p>En principio pueden llegar a ser excelentes amigos, pero si 
 	pasan de la amistad al amor de pareja, la convivencia puede ser algo más compleja</p>`
 	respuesta.innerHTML=texto
 	respuesta.style.setProperty("visibility", "visible")
 	respuesta.style.setProperty("opacity", "0.8")
	respuesta.style.setProperty('transition','all 3s ease')
 }
 else if(opcion1===3 && opcion2===7){
 	texto=`<p>Hay muchas probabilidades de que seas extremadamente feliz 
 	durante mucho tiempo. Incluso se trata de una combinación tan afortunada</p>`
 	respuesta.innerHTML=texto
 	respuesta.style.setProperty("visibility", "visible")
 	respuesta.style.setProperty("opacity", "0.8")
	respuesta.style.setProperty('transition','all 3s ease')
 }
 else if(opcion1===3 && opcion2===8){
 	texto=`<p> Son dos signos muy particulares y eso queda muy 
 	patente en cuanto se encuentran frente a frente.</p>`
 	respuesta.innerHTML=texto
 	respuesta.style.setProperty("visibility", "visible")
 	respuesta.style.setProperty("opacity", "0.8")
	respuesta.style.setProperty('transition','all 3s ease')
 }
 else if(opcion1===3 && opcion2===9){
 	texto=`<p>Se trata de dos signos libres como el viento que necesitan 
 	su propio espacio para ser felices y sentirse plenos.</p>`
 	respuesta.innerHTML=texto
 	respuesta.style.setProperty("visibility", "visible")
 	respuesta.style.setProperty("opacity", "0.8")
	respuesta.style.setProperty('transition','all 3s ease')
 }
 else if(opcion1===3 && opcion2===10){
 	texto=`<p>Trabajando juntos forman un equipo envidiable, tanto, que se pasan horas y horas en la 
 	cama hablando de sus sueños y de la manera de materializarlos.</p>`
 	respuesta.innerHTML=texto
 	respuesta.style.setProperty("visibility", "visible")
 	respuesta.style.setProperty("opacity", "0.8")
	respuesta.style.setProperty('transition','all 3s ease')
 }
 else if(opcion1===3 && opcion2===11){
 	texto=`<p>La compatibilidad entre los signos Acuario y Géminis es muy alta, ya 
 	que ambos esperan sacar más o menos lo mismo de la vida.</p>`
 	respuesta.innerHTML=texto
 	respuesta.style.setProperty("visibility", "visible")
 	respuesta.style.setProperty("opacity", "0.8")
	respuesta.style.setProperty('transition','all 3s ease')
 }
 else if(opcion1===3 && opcion2===12){
 	texto=`<p>Ni contigo ni sin ti” podría ser la frase que mejor define la vida en común de estos dos signos tan dispares pues por una parte lo pasarán bien juntos, pero 
 	por otra, su carácter abierto y sociable atraerá amistades tan variopintas.</p>`
 	respuesta.innerHTML=texto
 	respuesta.style.setProperty("visibility", "visible")
 	respuesta.style.setProperty("opacity", "0.8")
	respuesta.style.setProperty('transition','all 3s ease')
 }
 //temina geminis
 else if(opcion1===4 && opcion2===4){
 	texto=`<p>La combinación entre dos Cáncer puede ser realmente buena, 
 	porque ambos se levantarán la moral, comprenderán los cambios de 
 	humor y cambios en el estado de ánimo mutuamente y con facilidad.</p>`
 	respuesta.innerHTML=texto
 	respuesta.style.setProperty("visibility", "visible")
 	respuesta.style.setProperty("opacity", "0.8")
	respuesta.style.setProperty('transition','all 3s ease')
 }

 else if(opcion1===4 && opcion2===5){
 	texto=`<p>Tienen un ego bastante frágil, son vulnerables y no encajan 
 	bien la crítica, porque se ofenden con facilidad.</p>`
 	respuesta.innerHTML=texto
 	respuesta.style.setProperty("visibility", "visible")
 	respuesta.style.setProperty("opacity", "0.8")
	respuesta.style.setProperty('transition','all 3s ease')
 }
 else if(opcion1===4 && opcion2===6){
 	texto=`<p>Será un amor que irá in crescendo con el paso del tiempo.</p>`
 	respuesta.innerHTML=texto
 	respuesta.style.setProperty("visibility", "visible")
 	respuesta.style.setProperty("opacity", "0.8")
	respuesta.style.setProperty('transition','all 3s ease')
 }
 else if(opcion1===4 && opcion2===7){
 	texto=`<p>La compatibilidad a largo plazo entre Cáncer y Libra es una combinación de signos es bastante 
 	baja y solamente sobreviriá la pareja si hay una base de amor y pasión muy fuerte.</p>`
 	respuesta.innerHTML=texto
 	respuesta.style.setProperty("visibility", "visible")
 	respuesta.style.setProperty("opacity", "0.8")
	respuesta.style.setProperty('transition','all 3s ease')
 }
 else if(opcion1===4 && opcion2===8){
 	texto=`<p>Una irresistible y mágica atracción les envolverá 
 	desde el instante en que se cruzan sus miradas.</p>`
 	respuesta.innerHTML=texto
 	respuesta.style.setProperty("visibility", "visible")
 	respuesta.style.setProperty("opacity", "0.8")
	respuesta.style.setProperty('transition','all 3s ease')
 }
 else if(opcion1===4 && opcion2===9){
 	texto=`<p>Es una convivencia muy movida y llena de altibajos, sobre todo 
 	porque no comparten a la par los quehaceres de la vida.</p>`
 	respuesta.innerHTML=texto
 	respuesta.style.setProperty("visibility", "visible")
 	respuesta.style.setProperty("opacity", "0.8")
	respuesta.style.setProperty('transition','all 3s ease')
 }
 else if(opcion1===4 && opcion2===10){
 	texto=`<p>Se trata de dos signos opuestos que se complementan a la 
 	perfección principalmente porque ambos son leales por naturaleza.</p>`
 	respuesta.innerHTML=texto
 	respuesta.style.setProperty("visibility", "visible")
 	respuesta.style.setProperty("opacity", "0.8")
	respuesta.style.setProperty('transition','all 3s ease')
 }
 else if(opcion1===4 && opcion2===11){
 	texto=`<p>En teoría, esta relación parece abocada al fracaso, pero las teorías, 
 	sobre todo si hay un Acuario por medio, pueden fallar estrepitosamente.</p>`
 	respuesta.innerHTML=texto
 	respuesta.style.setProperty("visibility", "visible")
 	respuesta.style.setProperty("opacity", "0.8")
	respuesta.style.setProperty('transition','all 3s ease')
 }
 else if(opcion1===4 && opcion2===12){
 	texto=`<p>Ambos signos se entienden instintivamente entre sí y sienten las 
 	necesidades del otro. Ambos son cariñosos y dan apoyo a su pareja.</p>`
 	respuesta.innerHTML=texto
 	respuesta.style.setProperty("visibility", "visible")
 	respuesta.style.setProperty("opacity", "0.8")
	respuesta.style.setProperty('transition','all 3s ease')
 }
 //termina cancer
 else if(opcion1===5 && opcion2===5){
 	texto=`<p>Entre ambos deben tener presente que se juntará demasiada fuerza de 
 	carácter en poco espacio, lo ideal sería unir esa fuerza para que mire en la misma
    dirección y así se podría producir una maravillosa relación llena de magia, pasión y aventura.</p>`
 	respuesta.innerHTML=texto
 	respuesta.style.setProperty("visibility", "visible")
 	respuesta.style.setProperty("opacity", "0.8")
	respuesta.style.setProperty('transition','all 3s ease')
 }
 else if(opcion1===5 && opcion2===6){
 	texto=`<p>La compatibilidad entre Leo, que es puro fuego, y Virgo,
 	 que es totalmente tierra, es algo compleja y complicada.</p>`
 	respuesta.innerHTML=texto
 	respuesta.style.setProperty("visibility", "visible")
 	respuesta.style.setProperty("opacity", "0.8")
	respuesta.style.setProperty('transition','all 3s ease')
 }
 else if(opcion1===5 && opcion2===7){
 	texto=`<p>Son dos signos que derrochan energía y unas tremendas 
 	ganas de vivir y de disfrutar de la vida.</p>`
 	respuesta.innerHTML=texto
 	respuesta.style.setProperty("visibility", "visible")
 	respuesta.style.setProperty("opacity", "0.8")
	respuesta.style.setProperty('transition','all 3s ease')
 }
 else if(opcion1===5 && opcion2===8){
 	texto=`<p>A ambos les encanta el dramatismo e impactar y eso les 
 	convierte en dos actores a punto de salir a escena. </p>`
 	respuesta.innerHTML=texto
 	respuesta.style.setProperty("visibility", "visible")
 	respuesta.style.setProperty("opacity", "0.8")
	respuesta.style.setProperty('transition','all 3s ease')
 }
 else if(opcion1===5 && opcion2===9){
 	texto=`<p>El intrépido Leo y el aventurero Sagitario forman una combinación 
 	romántica natural; también pueden ser los mejores amigos.</p>`
 	respuesta.innerHTML=texto
 	respuesta.style.setProperty("visibility", "visible")
 	respuesta.style.setProperty("opacity", "0.8")
	respuesta.style.setProperty('transition','all 3s ease')
 }
 else if(opcion1===5 && opcion2===10){
 	texto=`<p>La austeridad y disciplina típicas de Capricornio frente al vital 
 	sol de Leo, harán sombra en esta relación, sin embargo el sol y la sombra siempre caminan juntos.</p>`
 	respuesta.innerHTML=texto
 	respuesta.style.setProperty("visibility", "visible")
 	respuesta.style.setProperty("opacity", "0.8")
	respuesta.style.setProperty('transition','all 3s ease')
 }
 else if(opcion1===5 && opcion2===11){
 	texto=`<p>A los Acuario les gusta el calor, la generosidad y la energía de Leo mientras, 
 	que a los Leo les impresiona la capacidad intelectual y la seguridad de Acuario.</p>`
 	respuesta.innerHTML=texto
 	respuesta.style.setProperty("visibility", "visible")
 	respuesta.style.setProperty("opacity", "0.8")
	respuesta.style.setProperty('transition','all 3s ease')
 }
 else if(opcion1===5 && opcion2===12){
 	texto=`<p>Leo aportará seguridad al emocional Piscis, que se sentirá encantado en el 
 	reino dorado del Rey de la selva y este disfrutará de todo el manantial de atenciones que le brinda.</p>`
 	respuesta.innerHTML=texto
 	respuesta.style.setProperty("visibility", "visible")
 	respuesta.style.setProperty("opacity", "0.8")
	respuesta.style.setProperty('transition','all 3s ease')
 }
 //tremino leo
 else if(opcion1===6 && opcion2===6){
 	texto=`<p>La compatibilidad de Virgo con Virgo es muy alta y en esta relación la palabra clave es el 
 	perfeccionismo y de ahí se deriva el principal problema, que deban superar - exigencias excesivas.</p>`
 	respuesta.innerHTML=texto
 	respuesta.style.setProperty("visibility", "visible")
 	respuesta.style.setProperty("opacity", "0.8")
	respuesta.style.setProperty('transition','all 3s ease')
 }
 else if(opcion1===6 && opcion2===7){
 	texto=`<p>Los dos son sumamente detallistas y atentos y podrían llegar 
 	a ser una pareja feliz si centran sus atenciones el uno en el otro.</p>`
 	respuesta.innerHTML=texto
 	respuesta.style.setProperty("visibility", "visible")
 	respuesta.style.setProperty("opacity", "0.8")
	respuesta.style.setProperty('transition','all 3s ease')
 }
 else if(opcion1===6 && opcion2===8){
 	texto=`<p>Forman un buen equipo en todos los aspectos; por un lado los 
 	dos son trabajadores y responsables</p>`
 	respuesta.innerHTML=texto
 	respuesta.style.setProperty("visibility", "visible")
 	respuesta.style.setProperty("opacity", "0.8")
	respuesta.style.setProperty('transition','all 3s ease')
 }
else if(opcion1===6 && opcion2===9){
 	texto=`<p>Ambos son dos signos mutables y eso significa que van a intentar adaptarse. 
 	Sagitario deberá aprender a ser más cauto y realista y Virgo a ser más audaz y desprendido.</p>`
 	respuesta.innerHTML=texto
 	respuesta.style.setProperty("visibility", "visible")
 	respuesta.style.setProperty("opacity", "0.8")
	respuesta.style.setProperty('transition','all 3s ease')
 }
else if(opcion1===6 && opcion2===10){
 	texto=`<p>La compatibilidad de Capricornio con Virgo es muy alta gracias a una combinación de 
 	elementos similares, que da una buena base para su relación.</p>`
 	respuesta.innerHTML=texto
 	respuesta.style.setProperty("visibility", "visible")
 	respuesta.style.setProperty("opacity", "0.8")
	respuesta.style.setProperty('transition','all 3s ease')
 }
else if (opcion1===6 && opcion2===11){
	texto=`<p>Si Virgo se olvida de los convencionalismos sociales y se permite algún que otro 
	divertido atrevimiento, la relación resultará emocionante y llena de estímulos para los dos, 
	además, Acuario encontrará en Virgo la virtud de la previsión y la constancia.</p>`
	respuesta.innerHTML=texto
	respuesta.style.setProperty("visibility", "visible")
 	respuesta.style.setProperty("opacity", "0.8")
	respuesta.style.setProperty('transition','all 3s ease')
}
else if (opcion1===6 && opcion2===12){
	texto=`<p>La compatibilidad de Piscis con Virgo es muy buena a pesar de una 
	contradicción entre los dos signos.</p>`
	respuesta.innerHTML=texto
	respuesta.style.setProperty("visibility", "visible")
 	respuesta.style.setProperty("opacity", "0.8")
	respuesta.style.setProperty('transition','all 3s ease')
}
else if (opcion1===7 && opcion2===7){
	texto=`<p>Al principio todo entre ellos destila armonía, buen gusto, 
	perfección, belleza y estética.</p>`
	respuesta.innerHTML=texto
	respuesta.style.setProperty("visibility", "visible")
 	respuesta.style.setProperty("opacity", "0.8")
	respuesta.style.setProperty('transition','all 3s ease')
}
else if (opcion1===7 && opcion2===8){
	texto=`<p>Libra considera que Escorpio es demasiado intenso y se siente 
	abrumado por sus ataques de celos; y el signo del escorpión se siente 
	frustrado ante las cambiantes decisiones de Libra.</p>`
	respuesta.innerHTML=texto
	respuesta.style.setProperty("visibility", "visible")
 	respuesta.style.setProperty("opacity", "0.8")
	respuesta.style.setProperty('transition','all 3s ease')
}
else if (opcion1===7 && opcion2===9){
	texto=`<p>Se trata de una relación basada en la amistad por encima de 
	todo y en el optimismo como concepto vital con el que vivir el día a día.</p>`
	respuesta.innerHTML=texto
	respuesta.style.setProperty("visibility", "visible")
 	respuesta.style.setProperty("opacity", "0.8")
	respuesta.style.setProperty('transition','all 3s ease')
}
else if (opcion1===7 && opcion2===10){
	texto=`<p>El respeto y admiración que Capricornio infunde en Libra puede ser 
	un buen estímulo para comenzar una interesante y fructífera.</p>`
	respuesta.innerHTML=texto
	respuesta.style.setProperty("visibility", "visible")
 	respuesta.style.setProperty("opacity", "0.8")
	respuesta.style.setProperty('transition','all 3s ease')
}
else if (opcion1===7 && opcion2===11){
	texto=`<p>Se trata de una relación con mucha gente alrededor ya que 
	ambos tienen una legión de amigos cerquita suyo.</p>`
	respuesta.innerHTML=texto
	respuesta.style.setProperty("visibility", "visible")
 	respuesta.style.setProperty("opacity", "0.8")
	respuesta.style.setProperty('transition','all 3s ease')
}
else if (opcion1===7 && opcion2===12){
	texto=`<p>Pero la emotiva sensibilidad de Piscis puede 
	desconcertar el equilibrio mental de Libra, y las eternas 
	dudas de Libra causar inseguridad en Piscis. Aun así, ambos
	signos pueden llegar a ser la pareja ideal </p>`
	respuesta.innerHTML=texto
	respuesta.style.setProperty("visibility", "visible")
 	respuesta.style.setProperty("opacity", "0.8")
	respuesta.style.setProperty('transition','all 3s ease')
}
else if (opcion1===8 && opcion2===8){
	texto=`<p>El suyo puede ser un amor épico, de novela, al que 
	no le faltarán desatinos, tormentos, melodrama y una pasión sin 
	freno que puede llevar a ambos a hacer todo tipo de locuras.</p>`
	respuesta.innerHTML=texto
	respuesta.style.setProperty("visibility", "visible")
 	respuesta.style.setProperty("opacity", "0.8")
	respuesta.style.setProperty('transition','all 3s ease')
}
else if (opcion1===8 && opcion2===9){
	texto=`<p>Se trata de una forma de vivir el amor muy diferente, 
	casi podríamos decir que opuesta; Escorpio necesita tener y retener 
	a la persona amada, sentirla como suya.</p>`
	respuesta.innerHTML=texto
	respuesta.style.setProperty("visibility", "visible")
 	respuesta.style.setProperty("opacity", "0.8")
	respuesta.style.setProperty('transition','all 3s ease')
}
else if (opcion1===8 && opcion2===10){
	texto=`<p>Aunque es un signo de Agua y otro de Tierra, son 
	dos signos que se compenetran bastante bien e incluso ambos 
	pueden llegar a ser la pareja ideal.</p>`
	respuesta.innerHTML=texto
	respuesta.style.setProperty("visibility", "visible")
 	respuesta.style.setProperty("opacity", "0.8")
	respuesta.style.setProperty('transition','all 3s ease')
}
else if (opcion1===8 && opcion2===11){
	texto=`<p>Ambos están predispuestos al flechazo. Escorpio ve en el 
	igno del Aguador a una persona increíble, llena de matices, excitante 
	y sugerente e incluso extravagante, algo que le seducirá y maravillará a la par.</p>`
	respuesta.innerHTML=texto
	respuesta.style.setProperty("visibility", "visible")
 	respuesta.style.setProperty("opacity", "0.8")
	respuesta.style.setProperty('transition','all 3s ease')
}
else if (opcion1===8 && opcion2===12){
	texto=`<p>Sus encuentros son absolutamente apasionados y fecundos pero deben 
	no anegar el terreno que quieren compartir.</p>`
	respuesta.innerHTML=texto
	respuesta.style.setProperty("visibility", "visible")
 	respuesta.style.setProperty("opacity", "0.8")
	respuesta.style.setProperty('transition','all 3s ease')
}
else if (opcion1===9 && opcion2===9){
	texto=`<p>Ambos son excelentes amigos y compañeros que descubren juntos que 
	la energía y honestidad que tienen en común es un potente y poderoso estímulo 
	para el cuerpo y el espíritu.</p>`
	respuesta.innerHTML=texto
	respuesta.style.setProperty("visibility", "visible")
 	respuesta.style.setProperty("opacity", "0.8")
	respuesta.style.setProperty('transition','all 3s ease')
}
else if (opcion1===9 && opcion2===10){
	texto=`<p>Puede que al responsable Capricornio le cueste y le asuste un poco 
	formalizar una relación con el liberal Sagitario, pero cuando lo haga su decisión 
	será inamovible y beneficiará a los dos, pues, aunque distintos, se trata de dos 
	signos que se complementan.</p>`
	respuesta.innerHTML=texto
	respuesta.style.setProperty("visibility", "visible")
 	respuesta.style.setProperty("opacity", "0.8")
	respuesta.style.setProperty('transition','all 3s ease')
}
else if (opcion1===9 && opcion2===11){
	texto=`<p>La compatibilidad entre Sagitario y Acuario es bastante alta y si ambos se 
	esfuerzan un poco, lo más probable es que su relación sea larga y feliz.</p>`
	respuesta.innerHTML=texto
	respuesta.style.setProperty("visibility", "visible")
 	respuesta.style.setProperty("opacity", "0.8")
	respuesta.style.setProperty('transition','all 3s ease')
}
else if (opcion1===9 && opcion2===12){
	texto=`<p>El romanticismo y sensibilidad de Piscis quedarán cautivados por el 
	idealismo y entusiasmo de Sagitario, quien a su vez se dejará seducir por las atenciones del pez</p>`
	respuesta.innerHTML=texto
	respuesta.style.setProperty("visibility", "visible")
 	respuesta.style.setProperty("opacity", "0.8")
	respuesta.style.setProperty('transition','all 3s ease')
}
else if (opcion1===10 && opcion2===10){
	texto=`<p>Se trata de una relación muy equilibrada de dos personas prácticas, cautelosas y reservadas 
	con unos criterios y puntos de vista muy afines.</p>`
	respuesta.innerHTML=texto
	respuesta.style.setProperty("visibility", "visible")
 	respuesta.style.setProperty("opacity", "0.8")
	respuesta.style.setProperty('transition','all 3s ease')
}
else if (opcion1===10 && opcion2===11){
	texto=`<p>La compatibilidad entre Capricornio y Acuario puede ser 
	bastante alta. Los Acuarios son creativos, hábiles y tienen una gran 
	capacidad de adaptación a los cambios de su entorno y de su vida en general y 
	son capaces de comprender cada detalle de cada situación.</p>`
	respuesta.innerHTML=texto
	respuesta.style.setProperty("visibility", "visible")
 	respuesta.style.setProperty("opacity", "0.8")
	respuesta.style.setProperty('transition','all 3s ease')
}
else if (opcion1===10 && opcion2===12){
	texto=`<p>El agua de Piscis necesita de la estabilidad de la Tierra. 
	Este será el principal punto en común que tienen ambos signos que pronto se 
	sentirán atraídos el uno por el otro.</p>`
	respuesta.innerHTML=texto
	respuesta.style.setProperty("visibility", "visible")
 	respuesta.style.setProperty("opacity", "0.8")
	respuesta.style.setProperty('transition','all 3s ease')
}
else if (opcion1===11 && opcion2===11){
	texto=`<p>Ya que no hay ningún signo con mayor capacidad para comprender 
	el signo y de no sentirse amenazado por su forma de ser tan distinta y singular.</p>`
	respuesta.innerHTML=texto
	respuesta.style.setProperty("visibility", "visible")
 	respuesta.style.setProperty("opacity", "0.8")
	respuesta.style.setProperty('transition','all 3s ease')
}
else if (opcion1===11 && opcion2===12){
	texto=`<p>Es una relación con un grado de compatibilidad no muy alto, 
	principalmente porque son dos almas muy distintas.</p>`
	respuesta.innerHTML=texto
	respuesta.style.setProperty("visibility", "visible")
 	respuesta.style.setProperty("opacity", "0.8")
	respuesta.style.setProperty('transition','all 3s ease')
}
else if (opcion1===12 && opcion2===12){
	texto=`<p>Sin duda se sentirán atraídos el uno por el otro con la 
	seguridad recíproca de haber encontrado el amor de su vida</p>`
	respuesta.innerHTML=texto
	respuesta.style.setProperty("visibility", "visible")
 	respuesta.style.setProperty("opacity", "0.8")
	respuesta.style.setProperty('transition','all 3s ease')
}

})