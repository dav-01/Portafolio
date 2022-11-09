// window.alert('En Progreso')


$(function () {
    var texto = "David Cabrera";
    maquina("typer", texto, 100, 0);
});

function maquina(contenedor, texto, intervalo, n) {
    var i = 0,
        timer = setInterval(function () {
            if (i < texto.length) {
                $("#" + contenedor).html(texto.substr(0, i++) + '|');
            } else {
                clearInterval(timer);
                $("#" + contenedor).html(texto);
                if (--n != 0) {
                    setTimeout(function () {
                        maquina(contenedor, texto, intervalo, n);
                    }, 3600);
                }
            }
        }, intervalo);
};
