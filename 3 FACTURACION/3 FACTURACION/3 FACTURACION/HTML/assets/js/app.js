function seleccionarPuntaje(){
    // console.log($(this).data("puntaje"))
    let id = $(this).data("id");
    console.log(id)
    $(".btnSeleccionar .boxCircle").removeClass("active");
    $("#puntaje").val($(this).data("puntaje"));
    $(`#circulo-${id} .boxCircle`).addClass("active");

}

var contador=0;


$(function(){
    $(".btnSeleccionar").on('click', seleccionarPuntaje);
    
    $(".btnIrEnel").on('click', function(){
        top.location.href = 'https://www.enel.pe/';
    })
    
    $( "form" ).submit(function( event ) {
        event.preventDefault();
        top.location.href = 'gracias.html';
    });

    $(".seleccionMultiple").on('click', function(){
        if($(this).is(':checked')){
            if (contador >= 2) {
                alert("Sólo puede seleccionar como máx 2.");
                return false;
            }
            contador++;
            console.log(contador);
        }else{
            contador--;
        }
    })

});


    