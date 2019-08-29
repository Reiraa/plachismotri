const getUserChoice = userInput => { 
userInput = userInput.toLowerCase(); 
if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') { 
return userInput; 
} else { 
console.log('Error'); 
}}; 
const getComputerChoice = () => { 
const randomNumber = Math.floor(Math.random() * 3); 
switch (randomNumber) { 
case 0: 
return 'rock'; 
case 1: 
return 'paper'; 
case 2: 
return 'scissors'; 
} 
}; 
const determineWinner = (userChoice,computerChoice) => { 
if 
(userChoice === 'rock' && computerChoice === 'paper') || 
(userChoice === 'paper' && computerChoice === 'scissors') || 
(userChoice === 'scissors' && computerChoice === 'rock') 
{return 'Comp won'; 
} else if (userChoice === computerChoice){ 
return 'Tie'; 
} else { 
return 'User won'; 
} 
} 
console.log(determineWinner('paper','rock'));
 
if (userChoice === computerChoice){ 
return 'Tie'; 
} 
if (userChoice === 'rock'){ 
if (computerChoice === 'paper'){ 
return 'Comp won'; 
} else {'User won'} 
} 
if (userChoice === 'paper'){ 
if (computerChoice === 'scissors'){ 
return 'Comp won'; 
} 
else {'User won'} 
} 
if (userChoice === 'scissors'){ 
if (computerChoice === 'rock'){ 
return 'Comp won'; 
} else {'User won'} 
} 
}
