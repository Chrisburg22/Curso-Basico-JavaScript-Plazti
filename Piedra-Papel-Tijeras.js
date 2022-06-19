var user;
var tijeras=1;
var papel=2;
var piedra=3;

function  game(){
    var pc=Math.floor(Math.random()*(3 + 1  - 1 + 1));
   if(user != pc){
        if( (user==tijeras && pc==2) || (user==papel && pc==3) || (user==piedra && pc==1) ){
            console.log("A ganado el usuario")
         }
         else if ( (user==tijeras && pc==3) || (user==papel && pc==1) || (user==piedra && pc==2) ){
             console.log("A ganado la PC")
             }
    }
    else{
        console.log("EMPATES");
    }
}