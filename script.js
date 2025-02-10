let players = [
    { color: "red", scores: 0 },
    { color: "green", scores: 0 },
    { color: "blue", scores: 0 },
  ];
  
  const colorArr = players.map((player) => player.color);
  
  function openingCeremony(players, race100M) {
    console.log("Welcome everyone for the 2025 National sports event! Play fair and square! All the best to all the players. Show your best game...");
    race100M(players, longJump);
  }
  
  function race100M(players, longJump) {
    console.log("100M race is starting...");
    players.forEach((item) => {
      item.scores = Math.floor(Math.random() * 10); // Assigning random scores for this event
    });
  
    setTimeout(() => {
      console.log("Race is finished");
      console.log(`Here are the updated scores: ${JSON.stringify(players)}`);
      longJump(players, highJump);
    }, 5000);
  }
  
  function longJump(players, highJump) {
    let selectedColor = Math.floor(Math.random() * colorArr.length); // Selecting a random player as the winner
    players[selectedColor].scores += 10;
  
    setTimeout(() => {
      console.log("Long Jump event has started...");
    }, 6000);
  
    setTimeout(() => {
      console.log("Long Jump event is finished");
      console.log(`${players[selectedColor].color} wins the Long Jump!`);
      console.log(`Here are the updated scores: ${JSON.stringify(players)}`);
      highJump(players, awardCeremony);
    }, 8000);
  }
  
  function highJump(players, awardCeremony) {
    let userInput = prompt("Enter the Color: ").toLowerCase().trim(); // User input
  
    let selectedPlayer = players.find((player) => player.color === userInput);
  
    if (selectedPlayer && selectedPlayer !== null) {
      selectedPlayer.scores += 10;
    } else {
      console.log("Invalid input. Please try again.");
      return highJump(players, awardCeremony); // Recursively call until valid input
    }
  
    setTimeout(() => {
      console.log("High Jump event is finished.");
      console.log(`${userInput} wins the High Jump!`);
      console.log(`Here are the updated scores: ${JSON.stringify(players)}`);
      awardCeremony(players);
    }, 9000);
  }
  
  function awardCeremony(players) {

    players.sort((a, b) => b.scores - a.scores);
  
    setTimeout(() => {
      console.log("All the events are finished...");
    }, 11000);
  
    setTimeout(() => {
      console.log("Now, let's see who is the winner of this sport event?");
    }, 12000);
  
    setTimeout(() => {
      console.log(`The winner of this sport event is ${players[0]?.color}`);

      console.log(`First Position: ${players[0]?.color}`);
      console.log(`Second Position: ${players[1]?.color}`);
      console.log(`Third Position: ${players[2]?.color}`);
    }, 15000);
  }
  
  // Starting the race
  openingCeremony(players, race100M);
  
