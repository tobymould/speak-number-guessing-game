const msgEl = document.getElementById('msg');
const msgEl2 = document.getElementById('msg2');
const start = document.querySelector('#start-button');
// const stop = document.querySelector('#stop-button');

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

let recognition = new window.SpeechRecognition();

const startListening = () => {
  recognition.start();
};

// const stopListening = () => {
//   recognition.stop();
// };

const onSpeak = e => {
  console.log(e);

  const msg = parseInt(event.results[0][0].transcript);
  writeMessage(msg);
  checkNumber(msg);
};

const writeMessage = msg => {
  msgEl.innerHTML = `<div>You guessed: </div> <span class="box"> ${msg} </span`;
  return;
};

// generate random number
const getRandomNumber = () => {
  return Math.floor(Math.random() * 100) + 1;
};

const randomNum = getRandomNumber();
console.log('Number:', randomNum);

const checkNumber = msg => {
  if (Number.isNaN(msg)) {
    msgEl2.innerHTML = `<div>Your guess was not a number. Please try again.</div>`;
  } else if (randomNum === msg) {
    msgEl2.innerHTML = `<div>CORRECT! YAAAAAY! You guessed correctly =D</div>`;
  } else if (randomNum < msg) {
    msgEl2.innerHTML = `<div>TOO HIGH</div>`;
  } else if (randomNum > msg) {
    msgEl2.innerHTML = `<div>TOO LOW</div>`;
  }

  const toleranceValue = Math.abs(randomNum - msg);
  console.log(msg);
  console.log(toleranceValue);
  if (msg > 100 || msg < 1) {
    msgEl2.innerHTML += `<div>You need to guess a number between 1 - 100 only</div>`;
  } else if (toleranceValue >= 60 && toleranceValue < 100) {
    msgEl2.innerHTML += `<div>You are guessing on the complete opposite end of the range. Try again :)</div>`;
  } else if (toleranceValue >= 40 && toleranceValue < 60) {
    msgEl2.innerHTML += `<div>You are frozen cold you're so far</div>`;
  } else if (toleranceValue >= 20 && toleranceValue < 40) {
    msgEl2.innerHTML += `<div>You are cold</div>`;
  } else if (toleranceValue >= 10 && toleranceValue < 20) {
    msgEl2.innerHTML += `<div>You are warm</div>`;
  } else if (toleranceValue >= 5 && toleranceValue < 10) {
    msgEl2.innerHTML += `<div>You are hot!</div>`;
  } else if (toleranceValue >= 3 && toleranceValue < 5) {
    msgEl2.innerHTML += `<div>You are boiling you're sooooo close!!</div>`;
  } else if (toleranceValue >= 1 && toleranceValue < 3) {
    msgEl2.innerHTML += `<div>You couldn't be closer if you tried!</div>`;
  }
  return;
};

// speak result:
recognition.addEventListener('result', onSpeak);
start.addEventListener('click', startListening);
document.body.addEventListener('click', event => {
  if (event.target.id === 'play-again') {
    window.location.reload();
  }
});
// stop.addEventListener('click', stopListening);
