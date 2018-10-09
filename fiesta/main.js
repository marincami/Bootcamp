function mostrarLaTecla(eventoTeclado) {
    console.log(eventoTeclado.key, eventoTeclado.keyCode);
    var miAudiecito = document.
        querySelector('#audiecito' + eventoTeclado.keyCode);
    if (miAudiecito !== null) {
        miAudiecito.currentTime = 0;
        miAudiecito.play();
    }
    var miTecla = document.
        querySelector('#tecla' + eventoTeclado.keyCode);
    miTecla.classList.add('clase-presionada');
    setTimeout( function(){
        miTecla.classList.remove('clase-presionada');
        //miTecla.classList.add('clase-liberada');
    }, 200);
}
document.addEventListener('keydown', mostrarLaTecla);