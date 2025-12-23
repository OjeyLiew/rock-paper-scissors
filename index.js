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

for (let i=0; i < 10; i++) {
	console.log(getComputerChoice());
}
