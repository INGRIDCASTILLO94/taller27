    var enlaces = document.getElementsByTagName("a");
    console.log('Hay '+ enlaces.length + ' Enlaces En La Pagina');
    document.write('Hay ' + enlaces.length + ' Enlaces En La Pagina', "<br>");

    var enlace = enlaces[enlaces.length-2].href;
    console.log("El Penultimo Enlace Dirige A " + enlace);
    document.write("El Penultimo Enlace Dirige A " + enlace , "<br>");

    var apuntador = 0;
    for(var index=0; index<enlaces.length; index++) {
        if(enlaces[index].href == "http://prueba/") {
        apuntador++;
        }
    }
    console.log("Los enlaces que apuntan a http://prueba/ son "+apuntador);
    document.write("Los enlaces que apuntan a http://prueba/ son" + apuntador , "<br>");

    var cantidad = document.getElementsByTagName("p");
	enlace = cantidad[2].getElementsByTagName("a");  
  	console.log("La cantidad de enlaces del tercer párrafo son "+enlace.length);
    document.write("La cantidad de enlaces del tercer párrafo son "+enlace.length , "<br>");