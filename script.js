const team1Name = 'Home Team';
const team2Name = 'Away Team';

let team1Score = 0;
let team2Score = 0;

const team1ScoreDisplay = document.getElementById('team1-score');
const team2ScoreDisplay = document.getElementById('team2-score');

const updateScoreDisplay = () => {
  team1ScoreDisplay.textContent = team1Score;
  team2ScoreDisplay.textContent = team2Score;
};

const addTeam1Point = () => {
  team1Score++;
  updateScoreDisplay();
};

const subtractTeam1Point = () => {
  if (team1Score > 0) {
    team1Score--;
    updateScoreDisplay();
  }
};

const addTeam2Point = () => {
  team2Score++;
  updateScoreDisplay();
};

const subtractTeam2Point = () => {
  if (team2Score > 0) {
    team2Score--;
    updateScoreDisplay();
  }
};

// Add event listeners for the team 1 score buttons
const team1AddButton = document.getElementById('team1-add');
team1AddButton.addEventListener('click', addTeam1Point);

const team1SubtractButton = document.getElementById('team1-subtract');
team1SubtractButton.addEventListener('click', subtractTeam1Point);

// Add event listeners for the team 2 score buttons
const team2AddButton = document.getElementById('team2-add');
team2AddButton.addEventListener('click', addTeam2Point);

const team2SubtractButton = document.getElementById('team2-subtract');
team2SubtractButton.addEventListener('click', subtractTeam2Point);
