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
        var checkboxes = document.querySelectorAll('input[name="atencion"]:checked');
        var outputCheckBoxes = [];
        var puntaje = $("#puntaje").val();
        var pregunta2 = $("#otro").val();
        var pregunta3 = $("#motivos").val();
        var boolOtro = false;
        checkboxes.forEach((checkbox) => {
            outputCheckBoxes.push(checkbox.value);
            // console.log(checkbox.value)
            if (checkbox.value === '6'){
                boolOtro = true;
            }
        });

        if (boolOtro === false){
            pregunta2 = "";
        }

        console.log(outputCheckBoxes);
        console.log(puntaje);
        console.log(pregunta2);
        console.log(pregunta3);

        // enviar los datos a  BD

        // return false;
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


    