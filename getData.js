$(document).ready(function() {
    $("ul").hide();

    $.getJSON('astros.json', function(data) {
        var number = data['number'];
        $('#SpacePeople').html(number);

        data['people'].forEach(function (d) {
            $('#astroNames').append('<li>' + d['name']+ '</li>');
        });
    });

    $("button").click(function(){
        $("#astroNames").toggle();
    });
});


