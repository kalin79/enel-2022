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
        var checkbox = document.querySelector('input[name="atencion"]:checked').value;
        var puntaje = $("#puntaje").val();
        var pregunta3 = $("#motivos").val();
        var pregunta4 = $("#motivos2").val();
       
        console.log(checkbox);
        console.log(puntaje);
        console.log(pregunta3);
        console.log(pregunta4);
        // return false;
        top.location.href = 'gracias.html';
    });
});