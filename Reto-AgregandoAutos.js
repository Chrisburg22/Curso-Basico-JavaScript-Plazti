
function auto( MARCA, MODELO, ANNIO ){
    this.marca=MARCA;
    this.modelo=MODELO;
    this.annio=ANNIO;
}
var autos=[];

function agregaNuevoAuto(){
    var pregunta=prompt("Cuantos autos vas a agregar");
    var respuesta=pregunta.toLowerCase();
    for(var i=0 ; i < respuesta; i++){
        var marca = prompt("Ingresa la Marca del Auto");
        var modelo = prompt("Ingresa el Model del Auto");
        var annio = prompt("Ingresa Año del Auto");
        autos.push(new auto(marca, modelo, annio))
    }
}
function imprimeListadeAutos(){
    for(var i=0 ;  i < autos.length ; i++){
        console.log(autos[i]);
    }
 }