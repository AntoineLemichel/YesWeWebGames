// document.onkeydown = checkKey;

// function checkKey(takekey) {

//     takekey = takekey || window.event;

//     if (takekey.keyCode == '38') {
//         console.log("Fleche haut");
//     } else if (takekey.keyCode == '40') {
//         console.log("Fleche bas");
//     } else if (takekey.keyCode == '37') {
//         console.log("Fleche gauche");
//     } else if (takekey.keyCode == '39') {
//         console.log("Fleche droite");
//     }

// }

var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', {
    create: create
});

function create() {

    var pixelWidth = 6;
    var pixelHeight = 6;

    var chick = [
        '...55.......',
        '.....5......',
        '...7888887..',
        '..788888887.',
        '..888088808.',
        '..888886666.',
        '..8888644444',
        '..8888645555',
        '888888644444',
        '88788776555.',
        '78788788876.',
        '56655677776.',
        '456777777654',
        '.4........4.'
    ];

    game.create.texture('chick', chick, pixelWidth, pixelHeight);


    game.add.sprite(150, 200, 'chick').anchor.y = 1;

}

createUI();
