
function getComputerChoice() {
	// Randomly generate a number between 0 and 1
	randNum = Math.random()
	// If the number is between 0 and 1/3 pick "rock"
	if (randNum < 1/3) {
		return "rock"
	}
	// If the number is between 1/3 and 2/3 pick "scissors"
	else if (randNum < 2/3) {
		return "scissors";
	}
	// If the number is between 2/3 and 1 pick "paper"
	return "paper";
}

function getHumanChoice() {
	// Prompt the user to enter a choice between "rock", "paper", and "scissors"
	// Save the choice in a variable
	const choice = prompt("Enter a choice between 'rock', 'paper', and 'scissors'");
	return choice;
}


function playGame(rounds = 5) {
	function playRound(humanChoice, computerChoice) {
		humanChoice = humanChoice.toLowerCase();
		if (humanChoice === "rock") {
			if (computerChoice === "rock") {
				console.log("You draw! You both picked 'rock'");	
			}
			else if (computerChoice === "paper") {
				console.log("You lose! Paper beats Rock");
				computerScore += 1;
			}
			else {
				console.log("You win! Rock beats Scissors");
				humanScore += 1;
			}
		}
		else if (humanChoice === "paper") {
			if (computerChoice === "rock") {
				console.log("You win! Paper beats Rock");	
				humanScore += 1;
			}
			else if (computerChoice === "paper") {
				console.log("You draw! You both picked Paper");
			}
			else {
				console.log("You lose! Scissors beats paper");
				computerScore += 1;
			}

		}
		else {
			if (computerChoice === "rock") {
				console.log("You lose! Rock beats Scissors");	
				computerScore += 1;
			}
			else if (computerChoice === "paper") {
				console.log("You win! Scissors beats Paper");
				humanScore += 1;
			}
			else {
				console.log("You draw! You both picked Scissors");

			}

		}
	}
	let humanScore = 0;
	let computerScore = 0;
	for (let i = 0; i < rounds; ++i) {
		const humanSelection = getHumanChoice();
		const computerSelection = getComputerChoice();
		playRound(humanSelection, computerSelection);
		console.log("Round: ", i+1);
		console.log("Human Score: ", humanScore);
		console.log("Computer Score: ", computerScore);
	}
}

playGame();
