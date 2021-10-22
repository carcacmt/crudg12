var endpoint="http://129.151.122.66:8080/api/Departamento"
$(document).ready(function(){
    getDepartamento()
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
                          "<td><button class='btn btn-warning'>Actualizar</button></td>"+
                          "</tr>"  
                console.log(registro)          
           })
           $("#tbody").html(registro)
            

        }

    })

}
