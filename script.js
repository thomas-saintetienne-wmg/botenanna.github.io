const chat = document.getElementById('chat');
const messageInput = document.getElementById('messageInput');
const sendButton = document.getElementById('sendButton');
const gif1Duration = 8000; // Duration of GIF 1 in milliseconds

const songs = [
  {
    song: "Boten Anna",
    artist: "Victor Leksell",
    audio: "BotenAnna.mp3"
  }
];

const correctArtist = "Victor Leksell";
const alternativeResponses = [
  "Oops, that's not quite right.",
  "Nice try, but not the correct answer.",
  "Almost there, but not quite.",
  "Not quite what we were looking for.",
  "You're getting warmer, but it's not the right artist."
];

sendButton.addEventListener('click', handleUserInput);

// Function to display an introductory message
function displayIntroMessage() {
  const introMessage = "Hej, jag heter Anna. Vet du vem som sjunger om mig ?";
  displayMessage(introMessage, 'bot');
}

// Call the displayIntroMessage function when the page loads
window.addEventListener('load', displayIntroMessage);

function showAudioPlayer() {
  const audioContainer = document.getElementById('audioContainer');
  audioContainer.style.display = 'block';
}

function playAudio() {
  const audioPlayer = document.getElementById('audioPlayer');
  audioPlayer.src = getAudioURLForCorrectArtist();
  audioPlayer.play();
}

function handleUserInput() {
  const userGuess = messageInput.value.trim();
  displayMessage(userGuess, 'user');

  if (userGuess.toLowerCase() === correctArtist.toLowerCase()) {
    const response = "Congratulations! You guessed it right. The artist is Victor Leksell.";
    displayMessage(response, 'bot');
    playAudio();
    showGif('gif1');
    setTimeout(function() {
      hideGif('gif1');
      animateGif('gif2');
    }, gif1Duration);
    showAudioPlayer();
  } else {
    const randomResponse = getRandomResponse();
    const response = `${randomResponse}`;
    displayMessage(response, 'bot');
    hideAudioPlayer();
  }

  messageInput.value = '';
}

function showGif(gifId) {
  const gif = document.getElementById(gifId);
  gif.style.display = 'block';
  const gifContainer = document.getElementById('gifContainer');
  gifContainer.style.display = 'block';
}

function hideGif(gifId) {
  const gif = document.getElementById(gifId);
  gif.style.display = 'none';
}
function hideAudioPlayer() {
  const audioContainer = document.getElementById('audioContainer');
  audioContainer.style.display = 'none';
}

function getAudioURLForCorrectArtist() {
  const correctSong = songs.find((song) => song.artist.toLowerCase() === correctArtist.toLowerCase());
  if (correctSong) {
    return correctSong.audio;
  }
  return '';
}
function getRandomResponse() {
  const randomIndex = Math.floor(Math.random() * alternativeResponses.length);
  return alternativeResponses[randomIndex];
}

function displayMessage(message, sender) {
  const messageElement = document.createElement('div');
  messageElement.classList.add('message', sender);
  messageElement.textContent = message;
  chat.appendChild(messageElement);
  chat.scrollTop = chat.scrollHeight;
}

function animateGif(gifId) {
  const gif = document.getElementById(gifId);
  gif.style.display = 'block';
}

