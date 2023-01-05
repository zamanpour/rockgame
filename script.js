var choices = ["r", "p", "s"];

var j = 0;
start: while (true) {

    let winsCount = 0;
    let lossesCount = 0;
    let tiesCount = 0;


    for (let i = 0; i < 5; i++) {

        let userChoice = prompt("please enter r, p, or s");

        let computerRand = Math.floor(Math.random() * 3);
        let camputerChoice = choices[computerRand];

        if (!choices.includes(userChoice)) {
            alert("This is not valid input!");
        } else {

            //document.getElementById("results").innerHTML = "You choose: " + userChoice + " & Computer choose: " + camputerChoice;

            console.log("You choose:", userChoice, "& Computer choose:", camputerChoice);



            switch (userChoice) {
                case "r":
                    switch (camputerChoice) {
                        case "r":
                            tiesCount++;
                            console.log("This is Tie");
                            break;
                        case "p":
                            lossesCount++;
                            console.log("You losse!");
                            break;
                        case "s":
                            winsCount++;
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
                            console.log("This is Tie");
                            break;
                        case "s":
                            lossesCount++;
                            console.log("You losse!");
                            break;
                        case "r":
                            winsCount++;
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
                            console.log("This is Tie");
                            break;
                        case "r":
                            lossesCount++;
                            console.log("You losse!");
                            break;
                        case "p":
                            winsCount++;
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

    let playAgain = prompt("Play again?");
    if (playAgain) {
        continue start;
        break;
    } else {
        break;
    }


}