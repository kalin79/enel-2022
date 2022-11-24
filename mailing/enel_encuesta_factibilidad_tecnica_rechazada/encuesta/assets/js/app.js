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
        
        var explico = '';
        var puntaje = $("#puntaje").val();
        var informacion = $("#informacion").val();
        

        if ( (puntaje == "") || (puntaje == null) || (puntaje == 0) ){
            alert("Debe responder la pregunta 1")
            return false
        }

        if (document.querySelector('input[name="explico"]:checked')){
            explico = document.querySelector('input[name="explico"]:checked').value
        }else{
            alert("Debe responder la pregunta 2")
            return false
        }

        if ( (informacion == "") || (informacion == null) ){
            alert("Debe responder la pregunta 3")
            return false
        }

        console.log(puntaje);
        console.log(explico);
        console.log(informacion);
        // return false;
        top.location.href = 'gracias.html';
    });
});