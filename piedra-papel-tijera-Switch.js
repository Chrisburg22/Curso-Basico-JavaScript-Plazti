console.log("Piedra, Pepel o Tijeras");
do{
    var salir=true;
    var opciones=["piedra","papel","tijeras"]
    console.log("Iniciando")
    var pc=opciones[Math.floor(Math.random() * 3)];
    var pregunta = prompt("Ingresa tu opcion: piedra, papel o tijeras")
    var user=pregunta.toLowerCase();
    switch(user){
        case "piedra":
            if(user == pc){
                console.log("Opcion de la PC: " + pc);
                console.log("EMPATADOS");
            }
            else if (pc=="papel"){
                console.log("Opcion de la PC: " + pc);
                console.log("Gana PC");
            }
            else if(pc=="tijeras"){
                console.log("Opcion de la PC: " + pc);
                console.log("Gana User");
            } break;
       case "papel":
           if(user == pc){"Opcion de la PC: "
               console.log("Opcion de la PC: " + pc);
               console.log("EMPATADOS");
            }
            else if (pc=="tijeras"){
                console.log("Opcion de la PC: " + pc);
                console.log("Gana PC");
            }
            else if(pc=="piedra"){
                console.log("Opcion de la PC: " + pc);
                console.log("Gana User");
             } break;
       case "tijeras":
           if(user == pc){
               console.log("Opcion de la PC: " + pc);
               console.log("EMPATADOS");
            }
            else if (pc=="piedra"){
                console.log("Opcion de la PC: " + pc);
                console.log("Gana PC");
            }
            else if(pc=="papel"){
                console.log("Opcion de la PC: " + pc);
                console.log("Gana User");
             } break; 
    }
    salir=prompt("Quieres volver a jugar 0=Salir 1=Seguir Jugando");
}while(salir!=false);