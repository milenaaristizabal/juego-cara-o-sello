let boton = document.getElementById('boton')
boton.addEventListener('click',()=>{
		let nombre = document.getElementById('nombre').value
        let dinero = document.getElementById('cdinero').value
        let opciones = document.getElementById('opciones').value
        let Suma=0,Resta=0, salir=0;

        let maquina=1+(Math.random() * 2);
          
            while (salir!=4) {
                let nombre = prompt("Ingrese su nombre");

            	alert("La cantidad que ha apostado es: $"+dinero+"\n");
            	

                if (opciones==maquina){
                    alert("Felicidades" +nombre+ "usted ha ganado, la opcion de la maquina fue: "+maquina+ " \n");
                    Suma = Suma+dinero;
                alert("La cantidad de dinero que ha sumado es: "+Suma+" \n");
                }

                else{
                    alert(":( Perdiste intentalo de nuevo "+nombre);
                    Resta= Resta-Suma;
                alert("La cantidad de dinero que tiene acumulado hasta ahora es: "+Resta+" \n");
                }
                prompt("Si desea continuar selccione 3 y si desea salir del juego seleccione 4");
             }
            })
        