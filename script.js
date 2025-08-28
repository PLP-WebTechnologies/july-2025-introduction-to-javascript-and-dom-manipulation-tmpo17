// Variable declarations and conditionals

let username = "Tats";
let age = 19;

if (age >= 18) {
    console.log(username + " is an adult.");
} else {
    console.log(username + " is a minor.");
}

// Custom Function

function greetUser() {
    document.getElementById("output").innerText = "Hi there, " + username;
}

// Loop example 1

function showNumbers() {
    let numbers = "";
    for (let i = 1; i <= 7; i++) {
        numbers += i + " ";
    }
    document.getElementById("output").innerText = "Numbers: " + numbers;
}

// Loop example 2

function showAnimals() {
    let animals = ["cat", "dog", "rabbit", "parrot"];
    let list = "";
    for (let animal of animals) {
        list += animal + " ";
    }
    document.getElementById("output").innerText = "Animals: " + list;
}

// DOM Interactions

document.getElementById("greetBtn").addEventListener("click", greetUser);
document.getElementById("showNumbersBtn").addEventListener("click", showNumbers);
document.getElementById("showAnimalsBtn").addEventListener("click", showAnimals);
