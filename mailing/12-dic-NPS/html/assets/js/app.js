function seleccionarPuntaje(){
    // console.log($(this).data("puntaje"))
    let id = $(this).data("id");
    console.log(id)
    $(".btnSeleccionar .boxCircle").removeClass("active");
    $("#puntaje").val($(this).data("puntaje"));
    $(`#circulo-${id} .boxCircle`).addClass("active");

}

$(function(){
    $(".btnSeleccionar").on('click', seleccionarPuntaje);
    
    $(".btnIrEnel").on('click', function(){
        top.location.href = 'https://www.enel.pe/';
    })
    
    $( "form" ).submit(function( event ) {
        event.preventDefault();
        var puntaje = $("#puntaje").val();
        var motivos = $("#motivos").val();

        if ( (puntaje == "") || (puntaje == null) || (puntaje == 0) ){
            alert("Debe responder la pregunta 1")
            return false
        }

        if ( (motivos == "") || (motivos == null) ){
            alert("Debe responder la pregunta 2")
            return false
        }

        console.log(puntaje);
        console.log(motivos);
        // return false;
        top.location.href = 'gracias.html';
    });
});