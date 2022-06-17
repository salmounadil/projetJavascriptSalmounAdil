



// changer police 

    var police = document.getElementById('police');
    var body1 = document.getElementById('index');

    police.addEventListener('click', function () {

        if (body1.style.fontFamily != 'Times New Roman', 'Times', 'serif') {
            body1.style.fontFamily = 'Times New Roman', 'Times', 'serif';
        }

        else {
            body1.style.fontFamily = 'Courier New', 'Courier', 'monospace';
        }
    });

    // changer police2 

    var police2 = document.getElementById('police2');
    var body1 = document.getElementById('index');

    police2.addEventListener('click', function () {

        if (body1.style.fontFamily != 'Courier New', 'Courier', 'monospace') {
            body1.style.fontFamily = 'Courier New', 'Courier', 'monospace';
        }

        else {
            body1.style.fontFamily =  'Times New Roman', 'Times', 'serif';
        }
    });
    

    // changer theme

  

    var background = document.getElementById('background');
    var div1 = document.getElementById('div1');

    background.addEventListener('click', function () {

div1.style.backgroundColor ="red";
div1.style.width = "75%";
    });

    // theme origine

    var background1 = document.getElementById('background1');
    var div1 = document.getElementById('div1');

    background1.addEventListener('click', function () {

div1.style.backgroundColor ="blue";
div1.style.width = "90%";
    });


// lien javascript 

var lien = document.getElementById('page');

lien.addEventListener('click',function(){
    window.location.href = 'https://fr.dragon-ball-official.com/'
}) 