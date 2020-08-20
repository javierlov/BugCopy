console.log('start buscarpock');

function buscarpock(){
	let txtopcion = document.getElementById('opcion').value;
	
	let img = document.getElementById('img');
	let imgA = document.getElementById('imgA');
	let imgB = document.getElementById('imgB');
	
	let etiqueta = document.getElementById('datos');
	let xhttp = new XMLHttpRequest();
	let urlpcok = 'https://pokeapi.co/api/v2/pokemon/'+txtopcion;
	xhttp.open("GET", urlpcok);
	xhttp.send();
	
	xhttp.onreadystatechange=function(){
		if(this.readyState == 4 && this.status == 200){
			let datosp =  JSON.parse(this.response);
			console.log( datosp );
			
			img.setAttribute("src",datosp.sprites.front_default);
			imgA.setAttribute("src",datosp.sprites.back_default);
			imgB.setAttribute("src",datosp.sprites.front_shiny);
			
			etiqueta.innerHTML = "Nombre "+datosp.name+". base_experience : "+datosp.base_experience+
				". peso : "+datosp.weight;
			
		}

	}
}


function buscarpockName(){
	let txtopcion = document.getElementById('opcion').value;
	
	let img = document.getElementById('img');
	let imgA = document.getElementById('imgA');
	let imgB = document.getElementById('imgB');
	
	let etiqueta = document.getElementById('datos');
	let xhttp = new XMLHttpRequest();
	let urlpcok = ' https://pokeapi.co/api/v2/pokemon/'+txtopcion;
	xhttp.open("GET", urlpcok);
	xhttp.send();
	
	xhttp.onreadystatechange=function(){
		if(this.readyState == 4 && this.status == 200){
			let datosp =  JSON.parse(this.response);
			console.log( datosp );
			
			img.setAttribute("src",datosp.sprites.front_default);
			imgA.setAttribute("src",datosp.sprites.back_default);
			imgB.setAttribute("src",datosp.sprites.front_shiny);
			
			etiqueta.innerHTML = "Nombre "+datosp.name+". base_experience : "+datosp.base_experience+
				". peso : "+datosp.weight;
			
		}

	}
}