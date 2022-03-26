var pantalla = document.getElementById('canvas');
var pincel = pantalla.getContext("2d");
var colormunheco="gray";


function base(){
	//base
	pincel.fillStyle = "rgba(248,248,248,0) ";
	pincel.fillRect(0,0,1200,800);
	pincel.fillStyle = "brown";
	pincel.beginPath();	
	pincel.lineTo(100,500);
	pincel.lineTo(200,430);
	pincel.lineTo(300,500);	
	pincel.fill();
	//barra
	pincel.beginPath();
	pincel.fillRect(185,450,30,-400);
	//horca
	pincel.fillRect(200,50,200,30);
	pincel.fillRect(400,100,30,-50);
	pincel.stroke();
	//giones
	pincel.font="80px Arial";
	pincel.fillText(giones,500,480)

}
 
function ojo(){
	pincel.beginPath();
	pincel.lineWidth = 5;
	pincel.strokeStyle = "black";
	pincel.arc(400,140,10,0,2*Math.PI);
	pincel.stroke();
	pincel.beginPath();
	pincel.lineWidth = 5;
	pincel.strokeStyle = "black";
	pincel.arc(430,140,10,0,2*Math.PI);
	pincel.stroke();
}

function cabeza(){
	
	pincel.beginPath();
	pincel.fillStyle = colormunheco;
	pincel.lineWidth = 10;
	 
	pincel.arc(415,150,50,0,2*Math.PI);
	pincel.fill();
	
}
function tronco(){
	pincel.fillStyle = colormunheco;
	
	pincel.beginPath();
	pincel.fillRect(390,300,50,-100);
	
}
function brazoDe(){
	pincel.strokeStyle = colormunheco;
	pincel.lineWidth = 10; 
	pincel.beginPath();
	pincel.moveTo(330,200);
	pincel.lineTo(393,210);
	pincel.stroke();
}
function brazoIz(){
	pincel.strokeStyle = colormunheco;
	pincel.lineWidth = 10; 
	pincel.beginPath();
	pincel.moveTo(430,210);
	pincel.lineTo(500,200);
	pincel.stroke();
}
function piernaDe(){
	pincel.strokeStyle = colormunheco;
	pincel.lineWidth = 10; 
	pincel.beginPath();
	pincel.moveTo(330,380);
	pincel.lineTo(415,280);
	pincel.stroke();
}
function piernaIz(){
	pincel.strokeStyle = colormunheco;
	pincel.lineWidth = 10; 
	pincel.beginPath();
	pincel.moveTo(500,380);
	pincel.lineTo(415,280);
	pincel.stroke();
}

function ahorcado(){
	
	if(errores==0){
		base();
	}
	if(errores>0){
		cabeza();
		ojo()
	}
	if(errores>1){
		tronco();
	}
	if(errores>2){
		brazoDe();
	}
	if(errores>3){
		brazoIz();
	}
	if(errores>4){
		piernaIz();
	}
	if(errores>5){
		piernaDe();
		perdedor();
	}
	letrasInsertadas();
	dibujarLetra();
	if (errores==7){
		document.removeEventListener("keyup",ingresarLetra);
	}
	if(mostrarPalabra==palabraElegida){

		winner();
	}
}

function dibujarLetra(valorX){
	pincel.fillStyle = "black";
	/*pincel.beginPath();
	pincel.strokeStyle = "black";*/
	pincel.font="60px Arial center" ;
	pincel.fillText(mostrarLetra,valorX,475);
	/*pincel.fillText(mostrarPalabra,x,(y-10));*/
} 
//letras que se precionan
function letrasInsertadas(x,y){
	pincel.fillStyle = "black";
	pincel.font="50px Arial";
	pincel.fillText("Letras Ingresadas: ",600,50);
	pincel.fillText(letrasDigitadas,600,150);

}

function ganador(){
	pincel.fillStyle = "green";
	pincel.font="70px arial center" ;
	pincel.fillText("Ganaste, Felicidades!",500,300);
}
function perdedor(){
	pincel.fillStyle = "red";
	pincel.font="50px arial center" ;
	pincel.fillText("Fin del juego ",500,250);
	pincel.fillText("La palabra era:",500,300);
	pincel.fillText(palabraElegida,500,360)
}