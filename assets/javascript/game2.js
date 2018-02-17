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

var gethint;
var guesses;
var userguess = "";
var wrongletters = [];
var rightletters = [];
var underscores = [];
var win = 0;
var loss = 0;
var lives = 9;
var rightguesscount = 0;


//This function will select a star from our Object Array
var selectstar = function randomstar1(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
var randomstar = selectstar(starArr);
console.log(randomstar.name);


// This function will take the selectstar and create the correct number of guess characters
let createunderscores = () => {
    for (var i = 0; i < randomstar.name.length; i++) {
        underscores.push("_");    
    }
    return underscores;
    
}
console.log(createunderscores());

//This function will convert the selected star into an array to evaluate match.
function splitString(star) {
    return star.split("");
}
var split_star = splitString(randomstar.name.toLowerCase());
console.log(split_star);

function reset() {
    rightguesscount = 0;
    lives = 9;
    wrongletters = [];
    randomstar1();
    createunderscores();
    splitString();
    
};




// Get user guess from keypress
document.addEventListener('keypress', (event) => {
    let userguess = String.fromCharCode(event.keyCode);
    console.log(userguess);

    //if the User guess is correct
    if (split_star.indexOf(userguess) > -1) {
        for (var i = 0; i < split_star.length; i++) {
            if (split_star[i] === userguess) {
                rightguesscount++;
                console.log(rightguesscount);
                underscores[i] = userguess;
                document.getElementById('word-blanks').innerHTML = underscores.join(' ');
                document.getElementById('hints').innerHTML = randomstar.type + " -- " + 
                randomstar.distance + " -- " + randomstar.constellation;
            }
        }
        console.log(underscores);
    }
    else {
        wrongletters.push(userguess);
        lives--;
        document.getElementById('guesses-left').innerHTML = lives;
        document.getElementById('wrong-guesses').innerHTML = wrongletters;
    }
    if (rightguesscount === split_star.length) {
        //Counts Wins 
        win++;
        //Changes HTML
        document.getElementById('win-counter').innerHTML = win;
        alert('You Win');
        reset();
    }
    // When number of Guesses reaches 0 then You lose
    else if (lives === 0) {
        //Counts losses
        loss++;
        //Changes HTML
        document.getElementById('loss-counter').innerHTML = loss;
        alert('You Lose');
        reset();
    }


});










