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
var userguess = "";
var wrongword = [];
var rightword = [];
var underscores = [];
var win = 0;

//This function will select a star from our Object Array
var selectstar = function (arr) {
    return arr [Math.floor(Math.random() * arr.length)];
}
var randomstar = selectstar(starArr);
console.log (randomstar.name);


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
console.log(split_star)

// Get user guess from keypress
document.addEventListener('keypress', (event) => {
    let userguess = String.fromCharCode(event.keyCode);
    console.log(userguess);

//if the User guess is correct
    if(split_star.indexOf(userguess) > -1) {
        rightword.push(userguess);
        console.log(rightword);
        underscores[split_star.indexOf(userguess)] = userguess; {
        if (underscores.join("") == split_star) {
            alert("you win!");
            win++;
            console.log(win);
        }
        }
    } else {
        wrongword.push(userguess);
        console.log(wrongword);
    }
});






//This function will check the user input to see if it is included in the array.
// var check_user_guess = function (params) {
//     return userguess.includes(split_star)
// }
// var isitinarray = check_user_guess("");
//     console.log(isitinarray)

//This function located the index of the match
// function getAllIndexes(arr, val) {
//     var indexes = [], i = -1;
//     while ((i = arr.indexOf(val, i+1)) != -1){
//         indexes.push(i);
//     }
//     return indexes;
// }

// var indexes = getAllIndexes(split_star, userguess);
//     console.log(indexes)

// //This function will push the correct userguess into the blanks
// function push_to_under_score() {
    

    
// }

// var check_user_guess = function(haystack, arr) {
//     return split_star.some(function(userguess) {
//         return split_star.indexOf(userguess) >= 0;
//     });
// };


// function check_user_guess(element, index, array) {
//     return split_star === userguess;
// }

// var blah = split_star.some(check_user_guess(userguess));
// console.log(blah)
// console.log(userguess)

// if (userguess == randomstar)

// //This input will evaluate the user input and place on the wrong answer list
// if (!userguess) {
//     var wrongletter = getElementById("wrongletters");
// }



//This function will keep track of used guesses and update lives (guesses remaining)

//


// function indexOfArray (value, array) {
//     return split_star.indexOf(value);
// }

//new one 

// // This function will take the selectstar and create the correct number of guess characters
// let create_underscores = () => {
//     for (var i = 0; i < randomstar.name.length; i++) {
//         underscores += "_ ";
//     }
//     document.getElementById("word-blanks").innerHTML = underscores;
//     }