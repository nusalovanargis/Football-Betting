/* 
1. Create one player array for each team (variables 'players1' and 'players2') 
2. The first player in any player is the goolkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk) with the goolkeeper's name and one array ('fieldPlayers') with all the remaining 10 field players.
3. Create an array all 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final) containing all the originial team1 players plus 'Thiago', 'Countinho', and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw', 'team2')
6.Write a function ('printGoals') that recieves an arbitrary number of player names (NOT AN ARRAY) and prints each of them to console, along with the number of goals who were scored (number of player names passed in)
7.The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski', and 'Kimmich'. Then call the function again with players from game.scored
*/

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1.
const [players1, players2] = game.players;
console.log(players1, players2);

// 2.
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// 3.
const allPlayers = [...players1, players2];
console.log(allPlayers);

// 4.
const players1Final = [...players1, "Thiago", "Countinho", "Perisic"];

// 5
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

// 6.
const printGoals = (...players) => {
  console.log(players);
  console.log(`${players.length} goals were scored`);
};

printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
printGoals("Davies", "Muller");
printGoals(...game.scored);

// 7. 
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');