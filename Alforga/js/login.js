window.onload = inicio;
function inicio(){
    let boton = document.getElementById('btnContinuar');
    boton.addEventListener("click", clickboton)
}

function  clickboton(e){
    e.preventDefault();
   let usuario = document.getElementById('txtNombres').value;
   let mostrarDatos = document.getElementById('Mostrar');

   mostrarDatos.innerHTML += "Bienvenido: " + usuario + "<br>"
}
