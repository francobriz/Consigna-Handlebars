const btnBuscar = document.getElementById("btn-buscar");
const inputArtista = document.getElementById("input-artista");

btnBuscar.addEventListener("click", function(){
    if(!inputArtista.value || inputArtista.value===" "){
        return;
    }
    window.location.href = "/busqueda?artista=" + inputArtista.value;
});