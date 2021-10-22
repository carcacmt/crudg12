var endpoint="http://129.151.122.66:8080/api/Departamento"
$(document).ready(function(){
    $("#alerta").hide()
    $("#guardar").click(function(){
        
        guardarDepartamento()
    })

    $("#alerta").click(function(){
        $("#alerta").hide()
    })
    
})


function guardarDepartamento(){

    let departamento={
        
        id_dep:$("#id_dep").val(),
        nomdep:$("#nomdep").val(),
        startDate:$("#startDate").val(),
        endDate:$("#endDate").val()
    }
    
    datajson=JSON.stringify(departamento)
    console.log(datajson)

    $.ajax({

        url:endpoint+"/save",
        type:'POST',
        data:datajson,
        dataType:'json',
        contentType:"application/json",
        complete:function(data){
            console.log(data.status)
            let mensaje=""
            if(data.status=="201"){
                mensaje="Registro Departamento con Exito!!"
            }   
            else{
                mensaje="Problemas al Guardar en BD consulte con el Administrador"
            }
            
            $("#alerta").show()
            limpiar()
            $("#mensaje").html(mensaje)
            
            console.log(mensaje)
        }

    })



}


function limpiar(){
        $("#id_dep").val(""),
        $("#nomdep").val(""),
        $("#startDate").val(""),
        $("#endDate").val("")
    }
