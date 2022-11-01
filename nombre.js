

//---------------------------#1 calcular cuantas letras tiene el nombre que se ingrese--------------------------------------
function saludo(){

    //aqui le estamos diciendo que busque en todo el documento los elementos que tengan el 
    //id nombre y luego para extraer los elementos se pone el .value

    let nombre = document.getElementById('nombre').value
    
    alert("Hola"+nombre)
}

//---------------------------#2 cambiar de minusculas a mayusculas--------------------------------------
function validar(){
    let nombre1=document.getElementById('nombre1').value
    
   alert("La cantidad de dinero que ha apostado es $"+nombre1) 
}

//---------------------------#3 cambiar de mayusculas a minusculas--------------------------------------
let boton = document.getElementById('boton')
boton.addEventListener('click',()=>{

    let maquina=1+(Math.random() * 2);

let opcion = document.getElementById('1').value
let nombre = document.getElementById('nombre').value

 if (opcion==maquina){
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
            )
