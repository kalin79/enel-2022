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
        var canal = '';
        var cajuela = '';
        var puntaje = $("#puntaje").val();
        var otro = $("#txtOtro").val();
        var informacion = $("#informacion").val();
        if (document.querySelector('input[name="canal"]:checked')){
            canal = document.querySelector('input[name="canal"]:checked').value
        }else{
            alert("Debe responder la pregunta 1")
            return false
        }

        if ( (puntaje == "") || (puntaje == null) || (puntaje == 0) ){
            alert("Debe responder la pregunta 2")
            return false
        }

        if (document.querySelector('input[name="cajuela"]:checked')){
            cajuela = document.querySelector('input[name="cajuela"]:checked').value
        }else{
            alert("Debe responder la pregunta 3")
            return false
        }

        if ( (informacion == "") || (informacion == null) ){
            alert("Debe responder la pregunta 4")
            return false
        }

        console.log(canal);
        console.log(puntaje);
        console.log(otro);
        console.log(cajuela);
        console.log(informacion);
        // return false;
        top.location.href = 'gracias.html';
    });
});