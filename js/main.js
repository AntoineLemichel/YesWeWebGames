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

var frame0 = [
    '.......0........',
    '.......0........',
    '......000.......',
    '......111.......',
    '..3...1F1...3...',
    '..1...1F1...1...',
    '..1.3.111.3.1...',
    '..1.1111111.1...',
    '111.1111111.111.',
    '1E1.1011101.1E1.',
    '111110111011111.',
    '..11101110111...',
    '....11...11.....',
    '................',
    '................',
    '................'
];
game.create.texture('yourKey', frame0, 6, 6, 0);