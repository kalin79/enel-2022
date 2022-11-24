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
        top.location.href = 'gracias.html';
    });
        
});