/*
Javascript IDs:
word-blanks - needs to equal the string lenght of randomstar
wrong-guesses - here we store the incorrect guesses
guesses-left - number of guesses remaining
win-counter - number of wins
loss-counter - number of losses

*/

var Sirius = {
    name: "Sirius",
    type: "Main Sequence",
    distance: "8.6 Light Years",
    constellation: "Canis Major",
    url: "https://"
}

var Vega = {
    name: "Vega",
    type: "Main Sequence",
    distance: "25 Light Years",
    constellation: "Lyra", 
}

var Polaris = {
    name: "Polaris",
    type: "Yellow Supergiant",
    distance: "433 Light Years",
    constellation: "Ursa Minor",
}

var Aldebaran = {
    name: "Aldebaran",
    type: "Orange Giant",
    distance: "65 Light Years",
    constellation: "Taurus",
}

var Betelgeuse = {
    name: "Betelguese",
    type: "Red Supergiant",
    distance: "642 Light Years",
    constellation: "Orion",
}

var Rigel = {
    name: "Rigel",
    type: "Blue Supergiant",
    distance: "863 Light Years",
    constellation: "Orion",
}

var Deneb = {
    name: "Deneb",
    type: "Blue-White Supergiant",
    distance: "2600 Light Years",
    constellation: "Cygnus",
}

var Altair = {
    name: "Altair",
    type: "Main Sequence",
    distance: "16.7 Light Years",
    constellation: "Aquila",
}

var Antares = {
    name: "Antares",
    type: "Red Supergiant",
    distance: "550 Light Years",
    constellation: "Scorpius",
}

var Atlas = {
    name: "Atlas",
    type: "B-Type Giant",
    distance: "431 Light Years",
    constellation: "Taurus",
}

var starArr = [Sirius, Vega, Polaris, Aldebaran, Betelgeuse, Rigel, Deneb, Altair, Antares, Atlas];

var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];

var gethint ;
var guesses ; 
var userguess ;

//This function will select a star from our Object Array
var selectstar = function (arr) {
    return arr [Math.floor(Math.random() * arr.length)];
}

//This function will take the selectstar and create the correct number of guess characters
// var wordblanks = document.getElementById("word-blanks");
// var underscores = "";
// for (var i = 0; i < selectstar.length; i++) {
//     underscores += "_";
// }
// wordblanks.appendChild("word-blanks")

//This function will evaluate the user input and place them in the correct field if it is a valid letter
  function splitString(star) {
        return star.split("");
}
splitString(selectstar(starArr).name);

if (userguess == selectstar)

//This input will evaluate the user input and place on the wrong answer list
if (!userguess) {
    var wrongletter = getElementById("wrongletters");
}

//This function will keep track of used guesses and update lives (guesses remaining)

//


