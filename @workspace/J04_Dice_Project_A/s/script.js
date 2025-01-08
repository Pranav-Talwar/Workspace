// Generate a random number between 1 and 6
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;


// Use a switch statement to handle different cases
switch (randomNumber1) {
    case 1:
        document.querySelector("img.img1").src = "dice1.png";
        break;
    case 2:
        document.querySelector("img.img1").src = "dice2.png";
        break;
    case 3:
        document.querySelector("img.img1").src = "dice3.png";
        break;
    case 4:
        document.querySelector("img.img1").src = "dice4.png";
        break;
    case 5:
        document.querySelector("img.img1").src = "dice5.png";
        break;
    case 6:
        document.querySelector("img.img1").src = "dice6.png";
        break;
    default:
        console.error("Invalid random number!");
}
switch (randomNumber2) {
    case 1:
        document.querySelector("img.img2").src = "dice1.png";
        break;
    case 2:
        document.querySelector("img.img2").src = "dice2.png";
        break;
    case 3:
        document.querySelector("img.img2").src = "dice3.png";
        break;
    case 4:
        document.querySelector("img.img2").src = "dice4.png";
        break;
    case 5:
        document.querySelector("img.img2").src = "dice5.png";
        break;
    case 6:
        document.querySelector("img.img2").src = "dice6.png";
        break;
    default:
        console.error("Invalid random number!");
}
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").textContent = "Player 2 Wins!";
} else {
    document.querySelector("h1").textContent = "It's a Draw!";
}
