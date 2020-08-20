console.log('start buscarpock');

function buscarpock(){
	let txtopcion = document.getElementById('opcion').value;
	
	let img = document.getElementById('img');
	let etiqueta = document.getElementById('datos');
	let xhttp = new XMLHttpRequest();
	xhttp.open("GET", 'https://pokeapi.co/api/v2/pokemon/${txtopcion}');
	xhttp.send();
	
	xhttp.onreadystatechange=function(){
		if(this.readyState == 4 && this.status == 200){
			let datosp =  JSON.parse(this.response);
			console.log( datosp );
			
			img.setAttribute("src",datosp.sprites.front_default);
			etiqueta.value = datosp.name;
			
		}

	}
}