var endpoint="http://129.151.122.66:8080/api/Departamento"
$(document).ready(function(){
    $("#alerta").hide()
    getDepartamento()


    $("#actualizar").click(function(){
        editarDepartamento()
    })
})


function getDepartamento(){

    $.ajax({

        url:endpoint+"/all",
        type:'GET',
        dataType:'json',
        success:function(data){
           console.log(data)

           let registro=""
           $.each(data,function(index,departamento){
                console.log(departamento)
                registro+="<tr>"+
                          "<td>"+departamento.id_dep+"</td>"+
                          "<td>"+departamento.nomdep+"</td>"+
                          "<td>"+departamento.startDate+"</td>"+
                          "<td>"+departamento.endDate+"</td>"+
                          "<td>"+
                          "<button class='btn btn-warning' data-toggle='modal' data-target='#myModal'"+
                          "onclick=\"ver('"+departamento.id_dep+"','"+departamento.nomdep+"','"+departamento.startDate+"','"+departamento.endDate+"')\""+
                          ">Actualizar</button>"+
                          "<button class='btn btn-danger ml-1' "+
                          "onclick=\"eliminar('"+departamento.id_dep+"')\""+
                          ">Eliminar</button>"+
                          "</td>"+
                          "</tr>"  
                       
           })
           $("#tbody").html(registro)
            

        }

    })

}


function ver(id_dep,nomdep,startDate,endDate){
    let ds=new Date(startDate)
    let de=new Date(endDate)  
    console.log(ds) 
    console.log(de) 
    console.log(ds.toISOString().slice(0,16)) 
    console.log(de.toISOString().slice(0,16)) 
    $("#id_dep").val(id_dep)
    $("#nomdep").val(nomdep)
    $("#startDate").val(ds.toISOString().slice(0,16))
    $("#endDate").val(ds.toISOString().slice(0,16))    
    
}

function editarDepartamento(){

    let departamento={
        
        id_dep:$("#id_dep").val(),
        nomdep:$("#nomdep").val(),
        startDate:$("#startDate").val(),
        endDate:$("#endDate").val()
    }
    
    datajson=JSON.stringify(departamento)
   
    $.ajax({

        url:endpoint+"/update",
        type:'PUT',
        data:datajson,
        dataType:'json',
        contentType:"application/json",
        complete:function(data){
            console.log(data.status)
            let mensaje=""
            if(data.status=="201"){
                mensaje="Actualizo Departamento con Exito!!"
            }   
            else{
                mensaje="Problemas al Actualizar en BD consulte con el Administrador"
            }
            
            $("#alerta").show()
            $("#mensaje").html(mensaje)
            getDepartamento()
            
        }

    })



}


function eliminar(id){

    $.ajax({

        url:endpoint+"/"+id,
        type:'DELETE',
        dataType:'json',
        contentType:"application/json",
        complete:function(data){
         
            getDepartamento()
            
        }

    })
   
}



