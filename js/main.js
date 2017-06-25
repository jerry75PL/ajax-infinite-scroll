'use strict';


$(function () {

    console.log("działa");


    window.onscroll = function (ev) {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {

            $.getJSON('https://jsonplaceholder.typicode.com/users',
                function (data) {
                    console.log(data);

                    data.forEach(function (el) {
                        $('body').append('<p>nazwa użytkownika to: ' + el.name + '</p>');
                        $('body').append('<p>ID użytkownika to: ' + el.id + '</p>');
                        $('body').append('<p>URL użytkownika to: <a href ="http://' + el.website + '">' + el.website + '</a></p><hr>');
                    });
                });


        }
    }



});