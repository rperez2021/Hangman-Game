var Sirius = {
    number: 1,
    name: "Sirius",
    type: "Main Sequence",
    distance: "8.6 Light Years",
    constellation: "Canis Major",
}

var Vega = {
    number: 2,
    name: "Vega",
    type: "Main Sequence",
    distance: "25 Light Years",
    constellation: "Lyra", 
}

var Polaris = {
    number: 3,
    name: "Polaris",
    type: "Yellow Supergiant",
    distance: "433 Light Years",
    constellation: "Ursa Minor",
}

var Aldebaran = {
    number: 4, 
    name: "Aldebaran",
    type: "Orange Giant",
    distance: "65 Light Years",
    constellation: "Taurus",
}

var Betelgeuse = {
    number: 5,
    name: "Betelguese",
    type: "Red Supergiant",
    distance: "642 Light Years",
    constellation: "Orion",
}

var Rigel = {
    number: 6,
    name: "Rigel",
    type: "Blue Supergiant",
    distance: "863 Light Years",
    constellation: "Orion",
}

var Deneb = {
    number: 7,
    name: "Deneb",
    type: "Blue-White Supergiant",
    distance: "2600 Light Years",
    constellation: "Cygnus",
}

var Altair = {
    number: 8,
    name: "Altair",
    type: "Main Sequence",
    distance: "16.7 Light Years",
    constellation: "Aquila",
}

var Antares = {
    number: 9,
    name: "Antares",
    type: "Red Supergiant",
    distance: "550 Light Years",
    constellation: "Scorpius",
}

var Atlas = {
    number: 10,
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

//This function will select a star from our Object Array
var selectstar = function (arr) {
    return arr [Math.floor(Math.random() * arr.lenght)];
}

//This function will take the selectstar and create the correct number of guess characters
for (var i = 0; i < selectstar.length; i++) {
    document.getElementById

}

//This function will evaluate the user input and place them in the correct field

//This function will keep track of used guesses and update lives (guesses remaining)

//