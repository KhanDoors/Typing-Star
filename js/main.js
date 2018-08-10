window.addEventListener('load', init);

// Globals

// Available Levels
const levels = {
  easy: 5,
  medium: 3,
  hard: 1
};

// To change level
const currentLevel = levels.medium;

let time = currentLevel;
let score = 0;
let isPlaying;

// DOM Elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = [
  'hat', 'river', 'lucky', 'statue', 'generate', 'stubborn', 'cocktail', 'runaway', 'joke', 'developer', 'establishment', 'hero', 'javascript',
  'nutrition', 'revolver', 'echo', 'siblings', 'investigate', 'horrendous', 'symptom', 'laughter', 'magic', 'master', 'space', 'definition', "dream","easy","bank","noun","down","occasionally", "plant","surrounded","teacher","bee","leaving","nose", "friend","back","pressure","ready","itself","still",
  "difference","subject","card","frame","truth","street", "member","may","leather","cream","press","yet", "teach","hit","original","himself","pencil","nose",
  "previous","pole","cattle","struck","yet","hold","continent","glass","roof","motion","weigh","clear", "pain","tip","beauty","movie","telephone","definition",
  "please","improve","entirely","queen","begun","evidence", "road","than","trip","hurried","bottle","travel", "steam","carbon","universe","hurried","stopped","headed",
  "choice","white","spent","greater","mean","fought", "wash","property","ear","fur","engine","circle"
];

// Initialize Game
function init() {
  // Show number of seconds in UI
  seconds.innerHTML = currentLevel;
  // Load word from array
  showWord(words);
  // Start matching on word input
  wordInput.addEventListener('input', startMatch);
  // Call countdown every second
  setInterval(countdown, 1000);
  // Check game status
  setInterval(checkStatus, 50);
}

// Start match
function startMatch() {
  if (matchWords()) {
    isPlaying = true;
    time = currentLevel + 1;
    showWord(words);
    wordInput.value = '';
    score++;
  }

  // If score is -1, display 0
  if (score === -1) {
    scoreDisplay.innerHTML = 0;
  } else {
    scoreDisplay.innerHTML = score;
  }
}

// Match currentWord to wordInput
function matchWords() {
  if (wordInput.value === currentWord.innerHTML) {
    message.innerHTML = 'Correct!!!';
    return true;
  } else {
    message.innerHTML = '';
    return false;
  }
}

// Pick & show random word
function showWord(words) {
  // Generate random array index
  const randIndex = Math.floor(Math.random() * words.length);
  // Output random word
  currentWord.innerHTML = words[randIndex];
}

// Countdown timer
function countdown() {
  // Make sure time is not run out
  if (time > 0) {
    // Decrement
    time--;
  } else if (time === 0) {
    // Game is over
    isPlaying = false;
  }
  // Show time
  timeDisplay.innerHTML = time;
}

// Check game status
function checkStatus() {
  if (!isPlaying && time === 0) {
    message.innerHTML = 'Game Over!!!';
    score = -1;
  }
}