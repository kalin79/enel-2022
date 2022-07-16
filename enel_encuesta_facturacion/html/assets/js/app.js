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
        var pregunta2 = document.querySelector('input[name="atencion"]:checked').value;
        var puntaje = $("#puntaje").val();
        // var pregunta2 = $("#atencion").val();
        var pregunta3 = $("#motivos").val();
        var otro = $("#otro").val();
       
        // console.log(checkbox);
        console.log(puntaje);
        console.log(pregunta2);
        console.log(pregunta3);
        console.log(otro);
        // return false;
        top.location.href = 'gracias.html';
    });
});