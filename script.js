var socialMediaPlatforms = ["Instagram", "Snapchat", "Facebook", "Twitter", "Pinterest", "Tumblr", "Flickr", "Redd" +
    "it", "WhatsApp", "Quora", "Vine", "TikTok", "MySpace"];

var baseballGreats = ["BabeRuth", "HankAaron", "RobertoClemente", "NolanRyan", "WillieMays", "RickeyHenderson", "Ra" +
    "ndyJohnson", "JoeDiMaggio", "MickeyMantle", "PeteRose", "HonusWagner", "StanMusial", "CyYoung", "LouGehrig", "T" +
    "yCobb", "TedWilliams", "JackieRobinson", "AlbertPujols", "DerekJeter"];

var capitolCities = ["Montgomery", "Juneau", "Phoenix", "LittleRock", "Sacramento", "Denver", "Hartford", "Dove" +
    "r", "Tallahassee", "Atlanta", "Honolulu", "Boise", "Springfield", "Indianapolis", "DesMoines", "Topeka", "Frankf" +
    "ort", "BatonRouge", "Augusta", "Annapolis", "Boston", "Lansing", "StPaul", "Jackson", "JeffersonCity", "Helena", "Li" +
    "ncoln", "CarsonCity", "Concord", "Trenton", "SantaFe", "Albany", "Raleigh", "Bismarck", "Columbus", "OklahomaCit" +
    "y", "Salem", "Harrisburg", "Providence", "Columbia", "Pierre", "Nashville", "Austin", "SaltLakeCity", "Montpelie" +
    "r", "Richmond", "Olympia", "Charleston", "Madison", "Cheyenne"];

var pixarMovies = ["ToyStory", "ABugsLife", "MonstersInc", "FindingNemo", "TheIncredibles", "Cars", "Ratatou" +
    "llie", "Up", "Brave", "MonstersUniversity", "InsideOut", "TheGoodDinosaur", "FindingDory", "Coco"];

var animals =["Dog", "Cat", "Fox", "Zebra", "Lion", "Tiger", "Monkey", "Gorilla", "Ape", "Giraffe", "Platypus", "Fr" +
    "og", "Antelope", "Toad", "Jellyfish", "Panda", "Wasp", "Eagle", "Octopus", "Aardvark", "Capybara", "Turtle", "C" +
    "hinchilla", "KomodoDragon", "Jaguar", "Quail", "Scorpion", "Vulture", "Walrus", "Yak"];

var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T" +
    "", "U", "V", "W", "X", "Y", "Z"];

var hangmanImages =[];

var guessesRemaining = 6;
var guessedLetters = [];
var rand = "";
var allButtons = document.getElementsByClassName("allButtons");

function startGame(){
    document.getElementById("winLose").innerHTML="";
    document.getElementById("playAgain").innerHTML = "";
    document.getElementById("newCategory").innerHTML = "";
    document.getElementById("startWord").innerHTML="";
    guessedLetters = [];
    guessesRemaining = 6;
    var category = document.getElementById("selectCat").value;
    if(category == 0){
        alert("Please select a category");
        return false;
    }
    if(category == 1){
        rand = socialMediaPlatforms[Math.floor(Math.random() * socialMediaPlatforms.length)];
    }
    if(category == 2){
        rand = baseballGreats[Math.floor(Math.random() * baseballGreats.length)];
    }
    if(category == 3){
        rand = capitolCities[Math.floor(Math.random() * capitolCities.length)];
    }
    if(category == 4){
        rand = pixarMovies[Math.floor(Math.random() * pixarMovies.length)];
    }
    if(category == 5){
        rand = animals[Math.floor(Math.random() * animals.length)];
    }
    rand = rand.toUpperCase();
    document.getElementById("buttonContainer").innerHTML="";
    for(var i = 0; i < alphabet.length; i++){
        var button = document.createElement("button");
        button.innerHTML = alphabet[i];
        document.getElementById("buttonContainer").appendChild(button);
        button.setAttribute("class", "allButtons w3-round-large w3-shadow");
        button.setAttribute("onclick", "guessLetter(this)");
        button.setAttribute("value", alphabet[i]);
    }
    document.getElementById("guessedLetters").innerHTML="Guessed Letters: " + guessedLetters;
    document.getElementById("guessesRemaining").innerHTML="Guesses Remaining: " + guessesRemaining;
    document.getElementById("image").innerHTML= "<img src='images/6.png'>";
}



function printWord(){
    var setUp = "";
    for(var i = 0; i < rand.length; i++){
        if(guessedLetters.indexOf(rand[i]) >= 0){
            setUp += rand[i];
        } else {
            setUp += "_ ";
        }
    }
    document.getElementById("startWord").innerHTML = setUp;
    if(setUp.indexOf("_") == -1){
        document.getElementById("winLose").innerHTML="You Win! Congratulations!";
        for(var j = 0; j < allButtons.length; j++){
            allButtons[j].disabled = true;
        }
        createEndButtons();
    }
}

function guessLetter(button){
    var letter = button.value;
    guessedLetters.push(letter);
    if(rand.indexOf(letter) == -1){
        printWord();
        guessesRemaining--;
    } else {
        printWord();
    }
    document.getElementById("guessedLetters").innerHTML="Guessed Letters: " + guessedLetters;
    document.getElementById("guessesRemaining").innerHTML="Guesses Remaining: " + guessesRemaining;
    button.disabled = true;
    console.log(button.value);
    document.getElementById("image").innerHTML= "<img src='images/"+guessesRemaining+".png'>";
    if(guessesRemaining == 0){
        document.getElementById("winLose").innerHTML="You Lose! Better Luck Next Time...";
        for(var i = 0; i < allButtons.length; i++){
            allButtons[i].disabled = true;
        }
        createEndButtons();
    }
    button.setAttribute("class", "clicked");
}

function createEndButtons(){
    var playAgain = document.createElement("button");
    playAgain.innerHTML = "Play Again";
    document.getElementById("playAgain").appendChild(playAgain);
    playAgain.setAttribute("class", "allButtons");
    playAgain.setAttribute("onclick", "playAgain()");

    var newCategory = document.createElement("button");
    newCategory.innerHTML = "Choose a New Category";
    document.getElementById("newCategory").appendChild(newCategory);
    newCategory.setAttribute("class", "allButtons");
    newCategory.setAttribute("onclick", "newCategory()");
}

function playAgain(){
    startGame();
    printWord();
}

function newCategory(){
    location.reload();
}