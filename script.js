
//selecciona una palabra de la lista

function sortearPalabra(){
	return palabras[Math.round(Math.random()*(palabras.length-1))];
}

var giones="";
var cantidadDeGiones=0;
var letrasCorrectas=[];    
var contenedorDePalabra="";
var mostrarLetra="";
var letrasDigitadas="";
var errores=0;
var palabraElegida="";
var boton = document.getElementById("iniciar-juego");



function pasarLetrasAGiones(cantidad) {
	var i=0;
	while (i<=cantidad-1){

		giones=giones+" _ ";
		i++
		console.log(giones)
	}
		return giones;
}


function inicio(){
	if (boton.innerHTML=="INICIAR JUEGO"){
		iniciarJuego()
	}else{
		window.location.reload()
		
	}
}


function iniciarJuego(){
	window.scrollTo(0,310);
	boton.innerHTML="Reiniciar Juego";
	errores=0;
	palabraElegida=sortearPalabra();//ingresa en la varpalabraElegida una palabra de la lista
	palabraSeparada=palabraElegida.split("");//separa las letras de la palabra
	console.log(palabraSeparada);
	cantidadDeGiones=palabraSeparada.length;
	mostrarPalabra="";
	letrasDigitadas="";
	pasarLetrasAGiones(cantidadDeGiones);//pasamos las letras a a giones
	console.log(giones);
	
	document.addEventListener("keyup",ingresarLetra);//evento ppara cuando toca una letra llamamos aingresarLetra

	//cuando se muestra la palabra elegida se saca el evento de tocar letras
	if(mostrarPalabra==palabraElegida){
		document.removeEventListener("keyup",ingresarLetra);
	}
	ahorcado();
		
}

//suma los errores y avisa si ya fue ingresada la letra
function ingresarLetra(pulsar){
	if(pulsar.keyCode >= 65 && pulsar.keyCode <= 90 || pulsar.keyCode==165) {
		var letra="";
		letra=String.fromCharCode(pulsar.keyCode);
		if(letrasDigitadas.includes(letra)){
			alert("Letra ya ingresada intente con otra");
		}else{
			letrasDigitadas+=letra+"  ";
			if(palabraElegida.indexOf(letra)<0){													
				errores++;
				console.log(errores);
			}
			
				mostrarPalabra="";
				var posicionLetra=520;//valor inicial des letras a mostrar;
				for (var i=0; i<palabraSeparada.length; i++){//recorre letra por letra;
				
					if(letra==palabraSeparada[i]){ //vusca si la letra ingresada esta en alguna posicion;
						console.log(letra +"si esta en el lugar"+palabraSeparada[i])
						mostrarLetra=letra;//guarda la letra en la var mostrarLetra;
						dibujarLetra(posicionLetra);//inprime la var mostrarLetra;
						posicionLetra=posicionLetra+90;//aumenta el valor de la posicionLetraen +90 por cada letra correcta;
						letrasCorrectas+=letra;//agrega la letra correcta a una array; 
						console.log(letrasCorrectas);
					}else{
						console.log(letra +"no esta en el lugar"+palabraSeparada[i])
						/*mostrarLetra="";
						dibujarLetra(posicionLetra);*/
						posicionLetra=posicionLetra+90;
					}
					if(letrasCorrectas.length==palabraSeparada.length){
						console.log("Felicidades, ganaste");
						ganador()
						document.removeEventListener("keyup",ingresarLetra);
					}
					
				
				}	
				
		}
	}else{
		alert("Por favor ingrese una letra");
		
	}
	

	
	console.log(letrasDigitadas);
	ahorcado();
	
}
 


