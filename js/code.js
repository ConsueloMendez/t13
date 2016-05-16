$(document).ready(function() {
    function actualizar(){
        $.ajax({
        url: "https://andreihelo-restful-api.herokuapp.com/students",
        success: function (result, status, xhr) {
            var botonCargar = $("<button id='br'><i class='fa fa-times-circle' aria-hidden='true'></i></button>");
            $("tbody").children().remove();
            for (var i = 0; i < result.length; i++) {
                $("tbody").append(
                "<tr><td>"+result[i].id+"</td><td>" + result[i].registration_number + "</td><td>" + result[i].name +
                "</td><td>" + result[i].last_name + "</td><td>"+result[i].status+"</td><td class='br'></td>"
                    );
                }
            $(".br").append(botonCargar);
        }
    });
    };
    actualizar();


    $("tbody").on("click","#br",function() {
        var id= parseInt($(this).parent().siblings().first().text());
        $.ajax({
            url: "https://andreihelo-restful-api.herokuapp.com/students/"+id,
            method: "POST",
            data: "_method=DELETE",
            success: function (result, status, xhr) {
                actualizar();
        }
     });

    });

    $("thead").on("click","#update",function(){
        actualizar();
    });

});
