let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("barra-nav").style.top = "0"; // Muestra la barra de navegación al desplazarse hacia arriba
    } else {
        document.getElementById("barra-nav").style.top = "-180px"; // Oculta la barra de navegación al desplazarse hacia abajo
    }
    prevScrollpos = currentScrollPos;
}


function enviarjaja(){
    alert('Comentario enviado XDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD')
}