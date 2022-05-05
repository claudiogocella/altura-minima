let dato1 = document.getElementById("dato1");
//let dato2 = document.getElementById("dato2");

let btnEnviar = document.getElementById("enviar");
let rotulo1 = document.getElementById("rotulo1");
//let rotulo2 = document.getElementById("rotulo2");

rotulo1.innerHTML = "Ingrese su altura ";
//rotulo2.innerHTML = "Ingrese su contraseña";

btnEnviar.addEventListener("click", () => {
   let altura : number = Number(dato1.value); 

   if (altura >= 130) {
    console.log ("Usted puede pasar, bienvenido!")
  else {
    console.log ("Usted debe medir 130 cm o mas")
  }
   }); 