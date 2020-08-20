console.log('start');

function buscarpock(){
	let xhttp = new XMLHttpRequest();
	xhttp.open("GET", "https://pokeapi.co/api/v2/pokemon/1");
	xhttp.send();
	
	xhttp.onreadystatechange=function(){
		if(this.readyState == 4 && this.status == 200){
			console.log(this.response);
		}

	}
}