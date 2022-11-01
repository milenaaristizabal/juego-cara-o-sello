
		let usuario,nombre;
        let Suma=0,Resta=0, salir=0;

        let maquina=1+(Math.random() * 2);
          
            while (salir!=4) {
                let nombre = prompt("Ingrese su nombre");

            	let dinero = prompt("Dijite la cantidad de dinero que quiere apostar \n");
                dinero=parseFloat(dinero)
            	alert("La cantidad que ha apostado es: $"+dinero+"\n");
            	
                prompt("Seleccione una de las opciones \n 1. Cara  \n 2. Sello  \n");
                usuario=parseFloat(usuario)

                if (usuario==maquina){
                    alert("Felicidades" +nombre+ "usted ha ganado, la opcion de la maquina fue: "+maquina+ " \n");
                    Suma = Suma+dinero;
                alert("La cantidad de dinero que ha sumado es: "+Suma+" \n");
                }

                else{
                    alert(":( Usted ha perdido, la opcion de la maquina fue "+maquina);
                    Resta= Resta-Suma;
                alert("La cantidad de dinero que tiene acumulado hasta ahora es: "+Resta+" \n");
                }
                prompt("Si desea continuar selccione 3 y si desea salir del juego seleccione 4");
             }
        