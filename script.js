var choices = ["r", "p", "s"];

var j = 0;
start: while (true) {

    let winsCount = 0;
    let lossesCount = 0;
    let tiesCount = 0;

    var resultText = "";

    for (let i = 0; i < 5; i++) {

        let userChoice = prompt("please enter r, p, or s");

        let computerRand = Math.floor(Math.random() * 3);
        let camputerChoice = choices[computerRand];

        if (!choices.includes(userChoice)) {
            alert("This is not valid input!");
        } else {

            resultText += "<br> You choose: " + userChoice + " & Computer choose: " + camputerChoice;
            console.log("You choose:", userChoice, "& Computer choose:", camputerChoice);


            resultText += " As a result:";
            switch (userChoice) {
                case "r":
                    switch (camputerChoice) {
                        case "r":
                            tiesCount++;
                            resultText += "This is Tie";
                            console.log("This is Tie");
                            break;
                        case "p":
                            lossesCount++;
                            resultText += "You losse!";
                            console.log("You losse!");
                            break;
                        case "s":
                            winsCount++;
                            resultText += "You Win!";
                            console.log("You Win!");
                            break;
                        default:
                            break;
                    }

                    break;

                case "p":
                    switch (camputerChoice) {
                        case "p":
                            tiesCount++;
                            resultText += "This is Tie";
                            console.log("This is Tie");
                            break;
                        case "s":
                            lossesCount++;
                            resultText += "You losse!";
                            console.log("You losse!");
                            break;
                        case "r":
                            winsCount++;
                            resultText += "You Win!";
                            console.log("You Win!");
                            break;
                        default:
                            break;
                    }

                    break;

                case "s":
                    switch (camputerChoice) {
                        case "s":
                            tiesCount++;
                            resultText += "This is Tie";
                            console.log("This is Tie");
                            break;
                        case "r":
                            lossesCount++;
                            resultText += "You losse!";
                            console.log("You losse!");
                            break;
                        case "p":
                            winsCount++;
                            resultText += "You Win!";
                            console.log("You Win!");
                            break;
                        default:
                            break;
                    }

                    break;

                default:
                    break;
            }

        }


    }
    document.getElementById("results").innerHTML = resultText;
    let playAgain = prompt("Play again?");
    if (playAgain && playAgain !== "no" && playAgain !== "No") {
        continue start;
        break;
    } else {
        break;
    }


}