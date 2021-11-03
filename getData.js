$(document).ready(function() {
    $("ul").hide();

    $.getJSON('http://api.open-notify.org/astros.json?callback=?', function(data) {
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


