// primera funcion
var a = 4;
var b = 1;
var c = a + b;

if(c < 20){
    console.log("numero chico");
}

else {
    console.log("numero grande")
}


// segunda funcion
var edad = 18;
if (edad = 18){
    console.log ("podes votar");
} 
else if (edad > 18){
    console.log ("podes votar");
}
else {
    console.log("no podes votar");
}


// tercera funcion
function resta(año,edad){
    var edad = edad;
    var año = año;
    return año - edad
}
console.log(resta(2022,30));


// cuarta funcion
var Ropa = {
    pantalon: "Adidas",
    remera: "puma",
    campera: "nike",
    marcaDeVestimenta: function(){
        console.log(`marca ${this.pantalon} ${this.remera} ${this.campera}`)
    }
};
Ropa.marcaDeVestimenta();


// quinta funcion
var alumnos = ["Gonzalo", "Rodrigo", "Franco"];
function saludar (alumnos){
    console.log(`Hola ${alumnos}`);
}

for(var i = 0; i < alumnos.length; i++){
    saludar (alumnos[i]);
}


// sexta funcion
var alumnos = ["Gonzalo", "Rodrigo", "Franco"];
function saludar (alumnos){
    console.log(`Hola ${alumnos}`);
}

for(var alumno of alumnos){
    saludar(alumno);
}


// séptima función
var marcaDeAuto = ["Fiat", "Peugeot", "Ford", "Audi"];
function mercado (marcaDeAuto){
    console.log(`LaMejorMarcaDeAutoEs ${marcaDeAuto}`);

}

for (var i = 0; i < marcaDeAuto.length; i++){
    mercado (marcaDeAuto[i]);
}
    
